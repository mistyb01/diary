export default function ChevronRightIcon({
  size,
}: {
  size: "small" | "medium";
}) {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`feather icon-${size}`}
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );
}
