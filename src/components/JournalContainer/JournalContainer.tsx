import SidePanel from "./SidePanel";
import EntryContainer from "./EntryContainer";
import { useState, useEffect } from "react";
// utility file where API calls for entries will be kept
import { entryService } from "../../api/EntryService";
import Entry from "../../types/entry";

const JournalContainer = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [readingMode, setReadingMode] = useState<"singlePage" | "scroll">(
    "scroll"
  );

  function findMostRecentEntryId(entries: Entry[]) {
    if (!entries || entries.length === 0) {
      return -1; // Return -1 if the list is empty
    }
    const mostRecentEntry = entries.reduce((a, b) =>
      new Date(a.creation_timestamp).getTime() >
      new Date(b.creation_timestamp).getTime()
        ? a
        : b
    );
    return mostRecentEntry.id;
  }

  useEffect(() => {
    entryService
      .getEntries()
      .then((entries) => {
        setEntries(entries);
        setSelectedEntry(findMostRecentEntryId(entries));
      })
      .catch((error) => console.log("error:", error));
  }, []);

  return (
    <>
      <SidePanel
        entries={entries}
        selectedEntry={selectedEntry}
        updateSelectedEntry={(value) => setSelectedEntry(value)}
      />
      <EntryContainer
        entries={entries}
        selectedEntry={selectedEntry}
        updateSelectedEntry={(value) => setSelectedEntry(value)}
        readingMode={readingMode}
      />
    </>
  );
};

export default JournalContainer;
