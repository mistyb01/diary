import SidePanel from "./SidePanel";
import EntryContainer from "./EntryContainer";
import { useState, useEffect } from "react";
// utility file where API calls for entries will be kept
import { entryService } from "../../api/EntryService";
import Entry from "../../types/entry";

const JournalContainer = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    entryService
      .getEntries()
      .then((entries) => setEntries(entries))
      .catch((error) => console.log("error:", error));
  }, []);

  return (
    <>
      <SidePanel entries={entries} />
      <EntryContainer />
    </>
  );
};

export default JournalContainer;
