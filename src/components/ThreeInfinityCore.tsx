import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { XceedLogoIcon } from './XceedLogo.tsx';

interface ThreeInfinityCoreProps {
  className?: string;
  onExploreTrack?: (track: string) => void;
}

export const ThreeInfinityCore: React.FC<ThreeInfinityCoreProps> = ({
  className = '',
  onExploreTrack,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 48);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const coralLight = new THREE.PointLight(0xff3b30, 3.5, 80);
    coralLight.position.set(15, 15, 20);
    scene.add(coralLight);

    const goldLight = new THREE.PointLight(0xd4af37, 2.5, 80);
    goldLight.position.set(-15, -15, 20);
    scene.add(goldLight);

    // Group containing the 3D rotating apparatus
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Double Torus Loop representing the 3D Infinity Structure
    // Left 'e' lobe torus
    const lobeGeo = new THREE.TorusGeometry(8.5, 1.4, 32, 100);
    const lobeMatCoral = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    });

    const leftLobe = new THREE.Mesh(lobeGeo, lobeMatCoral);
    leftLobe.position.set(-7.5, 0, 0);
    rootGroup.add(leftLobe);

    const rightLobe = new THREE.Mesh(lobeGeo, lobeMatCoral);
    rightLobe.position.set(7.5, 0, 0);
    rootGroup.add(rightLobe);

    // Vertical stem of the 'b' rising on right side
    const stemGeo = new THREE.CylinderGeometry(1.4, 1.4, 11, 32);
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      metalness: 0.85,
      roughness: 0.2,
    });
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.position.set(0.2, 5.5, 0);
    rootGroup.add(stemMesh);

    // Horizontal crossbar of 'e'
    const barGeo = new THREE.CylinderGeometry(1.1, 1.1, 7.5, 32);
    barGeo.rotateZ(Math.PI / 2);
    const barMesh = new THREE.Mesh(barGeo, stemMat);
    barMesh.position.set(-7.5, 0, 0);
    rootGroup.add(barMesh);

    // 2. Surrounding Orbital Rings with Gold & Emerald Satellites
    const ringGeo1 = new THREE.RingGeometry(18, 18.2, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(22, 22.2, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x059669, // Emerald
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    rootGroup.add(ring2);

    // 3. Orbiting Satellite Nodes
    const satelliteGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const satMatGold = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0x997517,
      metalness: 0.9,
      roughness: 0.1,
    });
    const satMatCoral = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      emissive: 0xaa1e16,
      metalness: 0.9,
      roughness: 0.1,
    });
    const satMatEmerald = new THREE.MeshStandardMaterial({
      color: 0x059669,
      emissive: 0x02452e,
      metalness: 0.9,
      roughness: 0.1,
    });

    const sat1 = new THREE.Mesh(satelliteGeo, satMatCoral);
    const sat2 = new THREE.Mesh(satelliteGeo, satMatGold);
    const sat3 = new THREE.Mesh(satelliteGeo, satMatEmerald);
    rootGroup.add(sat1);
    rootGroup.add(sat2);
    rootGroup.add(sat3);

    // 4. Stardust floating dust particles around core
    const dustCount = 180;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const r = 12 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      dustPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPos[i * 3 + 2] = r * Math.cos(phi);
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 1.0,
      transparent: true,
      opacity: 0.7,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    rootGroup.add(dustPoints);

    // Mouse movement inside container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate group with mouse tracking
      rootGroup.rotation.y = time * 0.35 + mouseRef.current.x * 0.6;
      rootGroup.rotation.x = Math.sin(time * 0.2) * 0.15 - mouseRef.current.y * 0.5;

      // Orbit satellites around rings
      const r1 = 18;
      sat1.position.set(
        Math.cos(time * 1.2) * r1,
        Math.sin(time * 1.2) * r1 * Math.sin(Math.PI / 3),
        Math.sin(time * 1.2) * r1 * Math.cos(Math.PI / 3)
      );

      const r2 = 22;
      sat2.position.set(
        Math.cos(-time * 0.9 + 2) * r2 * Math.cos(Math.PI / 4),
        Math.sin(-time * 0.9 + 2) * r2,
        Math.cos(-time * 0.9 + 2) * r2 * Math.sin(Math.PI / 4)
      );

      sat3.position.set(
        Math.cos(time * 0.7 + 4) * 15,
        Math.sin(time * 1.1 + 4) * 12,
        Math.sin(time * 0.7 + 4) * 15
      );

      ring1.rotation.z = time * 0.15;
      ring2.rotation.z = -time * 0.2;
      dustPoints.rotation.y = -time * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 460;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] cursor-grab active:cursor-grabbing"
      />

      {/* Floating Interactive Badge Over 3D Model */}
      <div className="absolute -bottom-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#FF3B30]/30 shadow-lg flex items-center gap-2 font-mono text-[11px] text-stone-700">
        <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-ping" />
        <span className="font-bold text-[#FF3B30]">3D Xceed Core</span>
        <span className="text-stone-400">|</span>
        <span className="text-stone-500">Interactive Cursor Tracking</span>
      </div>
    </div>
  );
};
