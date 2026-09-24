import React from 'react';

interface XceedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const XceedLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Xceed Beyond Logo"
    >
      <defs>
        <linearGradient id="xceedRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4136" />
          <stop offset="50%" stopColor="#F53629" />
          <stop offset="100%" stopColor="#E0241A" />
        </linearGradient>
        <filter id="xceedGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF3823" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* The 'eb' infinity ligature */}
      <g filter="url(#xceedGlow)">
        {/* Left 'e' loop & right 'b' bowl infinity stroke */}
        {/*
          Constructed to match the exact geometric continuous ribbon:
          Left lobe forms 'e' with inner horizontal bar.
          Right lobe forms 'b' with tall vertical ascender.
        */}
        {/* Vertical ascender of the 'b' */}
        <path
          d="M68 12 V62"
          stroke="url(#xceedRedGradient)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Continuous infinity figure-8 ribbon */}
        {/* Left loop ('e') */}
        <path
          d="M 68 62
             C 68 76, 52 86, 36 86
             C 18 86, 8 74, 8 57
             C 8 40, 18 28, 36 28
             C 52 28, 66 38, 70 56
             C 74 74, 88 86, 104 86
             C 122 86, 132 74, 132 57
             C 132 40, 122 28, 104 28
             C 88 28, 72 40, 68 62 Z"
          fill="none"
          stroke="url(#xceedRedGradient)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle crossbar inside 'e' to give distinct 'e' anatomy */}
        <path
          d="M 12 56 H 48"
          stroke="url(#xceedRedGradient)"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const XceedLogo: React.FC<XceedLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-stone-900',
}) => {
  const iconSizeClasses = {
    sm: 'w-7 h-5',
    md: 'w-10 h-7',
    lg: 'w-14 h-10',
    xl: 'w-20 h-14',
  }[size];

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <XceedLogoIcon className={iconSizeClasses} />
      </div>
      {showText && (
        <span
          className={`font-display tracking-tight font-bold ${textSizeClasses} ${textColor}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          Xceed <span className="font-semibold text-stone-800">Beyond</span>
        </span>
      )}
    </div>
  );
};
