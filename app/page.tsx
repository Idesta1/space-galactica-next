// app/icons/Planet.tsx
interface PlanetProps {
  color?: string;
  size?: number;
}

export const Planet = ({ color = "currentColor", size = 24 }: PlanetProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <circle cx="12" cy="2" r="3" />
    </svg>
  );
};
