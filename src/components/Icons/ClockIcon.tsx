export default function ClockIcon({ size }: { size: "small" | "medium" }) {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`feather icon-${size}`}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </button>
  );
}
