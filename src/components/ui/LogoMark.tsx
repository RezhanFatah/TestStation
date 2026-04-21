interface LogoMarkProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LogoMark({
  className = "",
  size = 34,
  color = "var(--ts-orange)",
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <circle cx="18" cy="18" r="16.5" stroke={color} strokeWidth="2.2" fill="none" />
      <circle cx="18" cy="18" r="11"   stroke={color} strokeWidth="2.2" fill="none" />
      <circle cx="18" cy="18" r="5.5"  stroke={color} strokeWidth="2.2" fill="none" />
      <circle cx="18" cy="18" r="2.2"  fill={color} />
      <line x1="19.8" y1="16.2" x2="27.5" y2="8.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <polygon points="27.5,6.5 31,10 26.5,11.5 25,7.5" fill={color} />
    </svg>
  );
}
