import Entry from "../../../types/entry";
import dayjs from "dayjs";
import CalendarIcon from "../../Icons/CalendarIcon";
import ClockIcon from "../../Icons/ClockIcon";

import SinglePage from "./SinglePage/SinglePage";

interface EntryContainerProps {
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
  readingMode: "singlePage" | "scroll";
}

const EntryContainer = ({
  entries,
  selectedEntry,
  updateSelectedEntry,
  readingMode,
}: EntryContainerProps) => {
  let entryToShow: Entry | undefined = undefined;
  let indexOfSelectedEntry: number | undefined = undefined;
  let isNext = false;
  let isPrev = false;

  if (selectedEntry) {
    entryToShow = entries.find((entry) => entry.id === selectedEntry);
    if (entryToShow) {
      indexOfSelectedEntry = entries.indexOf(entryToShow);
      if (
        indexOfSelectedEntry !== undefined &&
        indexOfSelectedEntry + 1 < entries.length
      ) {
        isNext = true;
      }
      if (indexOfSelectedEntry !== undefined && indexOfSelectedEntry - 1 >= 0) {
        isPrev = true;
      }
    }
  }

  function nextEntry() {
    if (
      indexOfSelectedEntry !== undefined &&
      indexOfSelectedEntry + 1 < entries.length
    ) {
      let newIdx = (indexOfSelectedEntry += 1);
      const newId = entries[newIdx].id;
      updateSelectedEntry(newId);
    }
  }

  function prevEntry() {
    if (indexOfSelectedEntry !== undefined && indexOfSelectedEntry - 1 >= 0) {
      let newIdx = (indexOfSelectedEntry -= 1);
      const newId = entries[newIdx].id;
      updateSelectedEntry(newId);
    }
  }

  return (
    <>
      {readingMode === "singlePage" && (
        <SinglePage
          entryToShow={entryToShow}
          prevEntry={prevEntry}
          nextEntry={nextEntry}
          isNext={isNext}
          isPrev={isPrev}
        />
      )}
      {readingMode === "scroll" && <p>scrollmode</p>}
    </>
  );
};

export default EntryContainer;
