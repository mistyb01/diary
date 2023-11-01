import Entry from "../../../types/entry";
import dayjs from "dayjs";

import { FiCalendar } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiCloudSnow } from "react-icons/fi";

interface EntryContainerProps {
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}

const EntryContainer = ({
  entries,
  selectedEntry,
  updateSelectedEntry,
}: EntryContainerProps) => {
  let entryToShow: Entry | undefined = undefined;
  let indexOfSelectedEntry: number | undefined = undefined;
  let isNext: boolean = false;

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

  return (
    <section className="main-container">
      {entryToShow && (
        <div className="entry-container">
          <div className="next-prev-container">
            <button>⬅ prev</button>
            {isNext && <button onClick={nextEntry}>next ➡</button>}
          </div>
          <div className="top-row">
            <div className="metadata-container">
              <div className="metadata-items">
                <span className="icon-item">
                  <FiCalendar />
                  {dayjs(entryToShow.creation_timestamp).format(
                    "ddd, MMMM D, YYYY"
                  )}
                </span>
                <span className="icon-item">
                  <FiClock />
                  {dayjs(entryToShow.creation_timestamp).format("h:mm A")}
                </span>
              </div>
              <div className="metadata-items">
                <span className="icon-item">
                  <FiCloudSnow /> 25° Kent WA
                </span>
                <span className="icon-item">
                  <FiMusic /> COLORS // FLOW
                </span>
              </div>
            </div>
            <button className="edit-entry-btn">edit entry</button>
          </div>
          <div>
            <h1 className="heading-entry">{entryToShow.title}</h1>
            <p className="entry-body">{entryToShow.text_body}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EntryContainer;
