import Entry from "../../../types/entry";
import dayjs from "dayjs";

import { FiCalendar } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiCloudSnow } from "react-icons/fi";

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
          <div className="next-prev-container">
            <button>⬅ prev</button>
            <button>next ➡</button>
          </div>
          <h1 className="heading-entry">{entryToShow.title}</h1>

          <div className="metadata-container">
            <div className="metadata-row">
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
              <button className="edit-entry-btn">edit entry</button>
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
          <p className="entry-body">{entryToShow.text_body}</p>
        </div>
      )}
    </section>
  );
};

export default EntryContainer;
