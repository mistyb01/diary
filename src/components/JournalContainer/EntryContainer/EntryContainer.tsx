import Entry from "../../../types/entry";

const EntryContainer = ({
  entries,
  selectedEntry,
}: {
  entries: Entry[];
  selectedEntry: number | null;
}) => {
  let entryToShow = null;
  if (selectedEntry) {
    entryToShow = entries.find((entry) => entry.id === selectedEntry);
  }

  return (
    <section className="main-container">
      {entryToShow && (
        <div className="entry-container">
          <h1>{entryToShow.title}</h1>
          <p>{entryToShow.text_body}</p>
        </div>
      )}
    </section>
  );
};

export default EntryContainer;
