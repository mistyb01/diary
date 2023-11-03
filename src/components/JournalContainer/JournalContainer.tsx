import SidePanel from "./SidePanel";
import EntryContainer from "./EntryContainer";
import { useState, useEffect } from "react";
// utility file where API calls for entries will be kept
import { entryService } from "../../api/EntryService";
import Entry from "../../types/entry";
import dayjs from "dayjs";

const JournalContainer = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);

  // Function to find the index of the most recent entry
  function findMostRecentEntryIndex(entries: Entry[]) {
    if (!entries || entries.length === 0) {
      return -1; // Return -1 if the list is empty
    }
    const mostRecentEntry = entries.reduce((a, b) =>
      new Date(a.creation_timestamp).getTime() >
      new Date(b.creation_timestamp).getTime()
        ? a
        : b
    );
    return entries.indexOf(mostRecentEntry);
  }

  useEffect(() => {
    entryService
      .getEntries()
      .then((entries) => {
        setEntries(entries);
        setSelectedEntry(findMostRecentEntryIndex(entries));
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
      />
    </>
  );
};

export default JournalContainer;
