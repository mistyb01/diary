const ReadingModeToggle = () => {
  return (
    <section className="reading-mode-toggle-container">
      <h1 className="heading-label">change reading mode</h1>

      <div>
        <input
          type="radio"
          id="page-a-day"
          name="mode"
          value="page-a-day"
          checked
        />
        <label htmlFor="page-a-day">Page-a-day</label>
      </div>

      <div>
        <input type="radio" id="scroll" name="mode" value="scroll" />
        <label htmlFor="scroll">Scroll</label>
      </div>
    </section>
  );
};

export default ReadingModeToggle;
