interface ReadingModeToggleProps {
  readingMode: "singlePage" | "scroll";
  updateReadingMode: (
    mode: React.SetStateAction<"singlePage" | "scroll">
  ) => void;
}

const ReadingModeToggle = ({
  readingMode,
  updateReadingMode,
}: ReadingModeToggleProps) => {
  return (
    <section className="reading-mode-toggle-container">
      <h1 className="heading-label">change reading mode</h1>
      <div className="radios">
        <div className="radio-option">
          <input
            type="radio"
            id="singlePage"
            name="mode"
            value="singlePage"
            checked={readingMode === "singlePage"}
            onChange={() => updateReadingMode("singlePage")}
          />
          <label htmlFor="singlePage">Single page</label>
        </div>

        <div className="radio-option">
          <input
            type="radio"
            id="scroll"
            name="mode"
            value="scroll"
            checked={readingMode === "scroll"}
            onChange={() => updateReadingMode("scroll")}
          />
          <label htmlFor="scroll">Scroll</label>
        </div>
      </div>
    </section>
  );
};

export default ReadingModeToggle;
