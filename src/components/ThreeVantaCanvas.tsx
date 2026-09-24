import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Waves, Share2, Sparkles, RefreshCw, Eye } from 'lucide-react';

export type AnimationMode = 'vanta-waves' | 'neural-plexus' | 'kinetic-torus';

interface ThreeVantaCanvasProps {
  initialMode?: AnimationMode;
  className?: string;
  showControls?: boolean;
}

export const ThreeVantaCanvas: React.FC<ThreeVantaCanvasProps> = ({
  initialMode = 'vanta-waves',
  className = 'w-full h-full absolute inset-0',
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<AnimationMode>(initialMode);
  const [interactiveGlow, setInteractiveGlow] = useState(true);

  // References for animation state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });
  const objectsGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // 1. Initialize Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Initialize Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 20, 65);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Initialize Renderer with Alpha for seamless light-theme blending
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background to blend with #FAF7F2
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Group for swappable mode objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    objectsGroupRef.current = mainGroup;

    // 5. Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xd4af37, 2, 100);
    goldLight.position.set(20, 30, 20);
    scene.add(goldLight);

    const coralLight = new THREE.PointLight(0xff3b30, 2.5, 100);
    coralLight.position.set(-25, 20, 15);
    scene.add(coralLight);

    // 6. BUILD MODE OBJECTS
    let updateAnimation: (time: number) => void = () => {};

    if (activeMode === 'vanta-waves') {
      // ===== MODE 1: VANTA WAVES (3D Dynamic Undulating Grid & Glowing Nodes) =====
      const cols = 55;
      const rows = 45;
      const spacing = 2.2;
      const count = cols * rows;

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const originalY = new Float32Array(count);
      const colors = new Float32Array(count * 3);

      let idx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = (i - cols / 2) * spacing;
          const z = (j - rows / 2) * spacing;
          const y = Math.sin(i * 0.2) * 2 + Math.cos(j * 0.2) * 2;

          positions[idx * 3] = x;
          positions[idx * 3 + 1] = y;
          positions[idx * 3 + 2] = z;

          originalY[idx] = y;

          // Color blend: Coral-red and Warm Golden Amber
          const ratio = (i + j) / (cols + rows);
          if (ratio < 0.4) {
            // Coral brand red (#FF3B30)
            colors[idx * 3] = 1.0;
            colors[idx * 3 + 1] = 0.23 + ratio * 0.4;
            colors[idx * 3 + 2] = 0.19;
          } else {
            // Warm imperial gold (#D4AF37)
            colors[idx * 3] = 0.83;
            colors[idx * 3 + 1] = 0.69;
            colors[idx * 3 + 2] = 0.22;
          }

          idx++;
        }
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Particle Points
      const particleMaterial = new THREE.PointsMaterial({
        size: 1.4,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.NormalBlending,
      });

      const particleSystem = new THREE.Points(geometry, particleMaterial);
      mainGroup.add(particleSystem);

      // Wireframe Grid Mesh beneath particles for rich tactile depth
      const planeGeo = new THREE.PlaneGeometry(cols * spacing, rows * spacing, cols - 1, rows - 1);
      planeGeo.rotateX(-Math.PI / 2);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xcca84a,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const wireMesh = new THREE.Mesh(planeGeo, wireMat);
      mainGroup.add(wireMesh);

      // Dynamic wave update logic
      updateAnimation = (time) => {
        const posAttr = geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        const wirePosAttr = planeGeo.attributes.position as THREE.BufferAttribute;
        const wirePosArray = wirePosAttr.array as Float32Array;

        const mx = mouseRef.current.x * 20;
        const mz = mouseRef.current.y * 20;

        let pIdx = 0;
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = posArray[pIdx * 3];
            const z = posArray[pIdx * 3 + 2];

            // Harmonic wave equations
            const wave1 = Math.sin(i * 0.25 + time * 1.5) * 2.8;
            const wave2 = Math.cos(j * 0.2 + time * 1.2) * 2.2;
            const wave3 = Math.sin((i + j) * 0.15 + time * 0.8) * 1.8;

            // Mouse proximity ripple
            const dx = x - mx;
            const dz = z - mz;
            const dist = Math.sqrt(dx * dx + dz * dz);
            const mouseEffect = Math.max(0, 1 - dist / 22) * 5.0;

            const newY = wave1 + wave2 + wave3 + mouseEffect;
            posArray[pIdx * 3 + 1] = newY;
            wirePosArray[pIdx * 3 + 1] = newY;

            pIdx++;
          }
        }
        posAttr.needsUpdate = true;
        wirePosAttr.needsUpdate = true;
      };
    } else if (activeMode === 'neural-plexus') {
      // ===== MODE 2: NEURAL PLEXUS / NET (Interactive Interconnected Nodes) =====
      const particleCount = 140;
      const maxDistance = 14;

      const particlesData: Array<{
        velocity: THREE.Vector3;
        numConnections: number;
      }> = [];

      const particlePositions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 75;
        const y = (Math.random() - 0.5) * 35;
        const z = (Math.random() - 0.5) * 45;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // Color mix: Coral and Gold
        const isCoral = Math.random() > 0.45;
        particleColors[i * 3] = isCoral ? 1.0 : 0.85;
        particleColors[i * 3 + 1] = isCoral ? 0.23 : 0.68;
        particleColors[i * 3 + 2] = isCoral ? 0.19 : 0.22;

        particlesData.push({
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08
          ),
          numConnections: 0,
        });
      }

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      pointGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

      const pointMat = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });

      const pointCloud = new THREE.Points(pointGeo, pointMat);
      mainGroup.add(pointCloud);

      // Line connections
      const maxLines = (particleCount * (particleCount - 1)) / 2;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.NormalBlending,
      });

      const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
      mainGroup.add(lineMesh);

      updateAnimation = () => {
        let lineVertexCount = 0;
        const posArray = pointGeo.attributes.position.array as Float32Array;
        const linePos = lineGeo.attributes.position.array as Float32Array;
        const lineCol = lineGeo.attributes.color.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const data = particlesData[i];

          posArray[i * 3] += data.velocity.x;
          posArray[i * 3 + 1] += data.velocity.y;
          posArray[i * 3 + 2] += data.velocity.z;

          // Boundary bouncing
          if (Math.abs(posArray[i * 3]) > 38) data.velocity.x *= -1;
          if (Math.abs(posArray[i * 3 + 1]) > 20) data.velocity.y *= -1;
          if (Math.abs(posArray[i * 3 + 2]) > 25) data.velocity.z *= -1;

          // Mouse gravity pull
          const dx = mouseRef.current.x * 35 - posArray[i * 3];
          const dy = mouseRef.current.y * 20 - posArray[i * 3 + 1];
          const distMouse = Math.sqrt(dx * dx + dy * dy);
          if (distMouse < 18) {
            posArray[i * 3] += dx * 0.015;
            posArray[i * 3 + 1] += dy * 0.015;
          }

          // Connecting lines between neighbors
          for (let j = i + 1; j < particleCount; j++) {
            const p1x = posArray[i * 3];
            const p1y = posArray[i * 3 + 1];
            const p1z = posArray[i * 3 + 2];

            const p2x = posArray[j * 3];
            const p2y = posArray[j * 3 + 1];
            const p2z = posArray[j * 3 + 2];

            const dist = Math.sqrt((p1x - p2x) ** 2 + (p1y - p2y) ** 2 + (p1z - p2z) ** 2);

            if (dist < maxDistance) {
              const alpha = 1.0 - dist / maxDistance;

              linePos[lineVertexCount * 3] = p1x;
              linePos[lineVertexCount * 3 + 1] = p1y;
              linePos[lineVertexCount * 3 + 2] = p1z;

              linePos[(lineVertexCount + 1) * 3] = p2x;
              linePos[(lineVertexCount + 1) * 3 + 1] = p2y;
              linePos[(lineVertexCount + 1) * 3 + 2] = p2z;

              // Line color matching coral or gold
              lineCol[lineVertexCount * 3] = 0.95;
              lineCol[lineVertexCount * 3 + 1] = 0.45;
              lineCol[lineVertexCount * 3 + 2] = 0.25;

              lineCol[(lineVertexCount + 1) * 3] = 0.85;
              lineCol[(lineVertexCount + 1) * 3 + 1] = 0.65;
              lineCol[(lineVertexCount + 1) * 2] = 0.25;

              lineVertexCount += 2;
            }
          }
        }

        pointGeo.attributes.position.needsUpdate = true;
        lineGeo.setDrawRange(0, lineVertexCount);
        lineGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.color.needsUpdate = true;
      };
    } else if (activeMode === 'kinetic-torus') {
      // ===== MODE 3: KINETIC TORUS KNOT / INFINITY GEOMETRY =====
      const torusGeo = new THREE.TorusKnotGeometry(12, 3.2, 160, 32, 2, 3);
      const torusMat = new THREE.MeshStandardMaterial({
        color: 0xff3b30, // Coral red
        metalness: 0.75,
        roughness: 0.25,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });

      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      mainGroup.add(torusMesh);

      // Inner glowing core
      const coreGeo = new THREE.IcosahedronGeometry(7, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37, // Gold
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Surrounding particle ring
      const ringCount = 300;
      const ringGeo = new THREE.BufferGeometry();
      const ringPos = new Float32Array(ringCount * 3);
      for (let i = 0; i < ringCount; i++) {
        const theta = (i / ringCount) * Math.PI * 2;
        const radius = 22 + Math.random() * 8;
        ringPos[i * 3] = Math.cos(theta) * radius;
        ringPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
        ringPos[i * 3 + 2] = Math.sin(theta) * radius;
      }
      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
      const ringMat = new THREE.PointsMaterial({
        color: 0xff4d3d,
        size: 1.2,
        transparent: true,
        opacity: 0.8,
      });
      const ringPoints = new THREE.Points(ringGeo, ringMat);
      mainGroup.add(ringPoints);

      updateAnimation = (time) => {
        torusMesh.rotation.x = time * 0.4 + mouseRef.current.y * 0.8;
        torusMesh.rotation.y = time * 0.6 + mouseRef.current.x * 0.8;

        coreMesh.rotation.x = -time * 0.3;
        coreMesh.rotation.z = time * 0.5;

        ringPoints.rotation.y = time * 0.2;
      };
    }

    // 7. Mouse Listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseRef.current.targetX = (clientX / width) * 2 - 1;
      mouseRef.current.targetY = -(clientY / height) * 2 + 1;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 600;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 9. Main Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Subtle group tilt reacting to mouse
      if (mainGroup) {
        mainGroup.rotation.y = mouseRef.current.x * 0.25;
        mainGroup.rotation.x = -mouseRef.current.y * 0.15;
      }

      // Update current mode's dynamic elements
      updateAnimation(elapsedTime);

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js memory cleanly
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.LineSegments) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeMode]);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Interactive Mode Switcher Capsule (Vanta / Three.js control bar) */}
      {showControls && (
        <div className="absolute bottom-5 right-6 z-20 flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-900/15 shadow-lg animate-fadeIn pointer-events-auto">
          <div className="flex items-center gap-1 px-2.5 py-1 text-stone-500 font-mono text-[10px] uppercase font-bold tracking-wider border-r border-amber-900/10">
            <Sparkles className="w-3 h-3 text-[#FF3B30]" />
            <span>Three.js Engine</span>
          </div>

          <button
            onClick={() => setActiveMode('vanta-waves')}
            className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'vanta-waves'
                ? 'bg-gradient-to-r from-[#FF3B30] to-amber-600 text-white font-bold shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Vanta Waves
          </button>

          <button
            onClick={() => setActiveMode('neural-plexus')}
            className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'neural-plexus'
                ? 'bg-gradient-to-r from-[#FF3B30] to-amber-600 text-white font-bold shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Neural Net
          </button>

          <button
            onClick={() => setActiveMode('kinetic-torus')}
            className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'kinetic-torus'
                ? 'bg-gradient-to-r from-[#FF3B30] to-amber-600 text-white font-bold shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Kinetic Knot
          </button>
        </div>
      )}
    </div>
  );
};
