import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
  emblemOnly?: boolean;
  animate?: boolean;
}

export default function Logo({
  size = '100%',
  className = '',
  emblemOnly = false,
  animate = true,
}: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="दaksh Computers Logo"
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      className={`select-none object-contain ${className} ${animate ? 'animate-[float_6s_ease-in-out_infinite]' : ''}`}
      referrerPolicy="no-referrer"
    />
  );
}
