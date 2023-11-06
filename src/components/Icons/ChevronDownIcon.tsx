export default function ChevronDownIcon({
  size,
}: {
  size: "small" | "medium";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`feather icon-${size}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}
