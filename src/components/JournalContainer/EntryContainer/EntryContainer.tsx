import Entry from "../../../types/entry";

interface EntryContainerProps {
  entries: Entry[];
  selectedEntry: number | null;
}

const EntryContainer = ({ entries, selectedEntry }: EntryContainerProps) => {
  let entryToShow: Entry | undefined = undefined;
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
