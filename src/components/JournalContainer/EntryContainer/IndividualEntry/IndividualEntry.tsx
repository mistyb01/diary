import Entry from "../../../../types/entry";
import dayjs from "dayjs";
import CalendarIcon from "../../../Icons/CalendarIcon";
import ClockIcon from "../../../Icons/ClockIcon";

interface IndividualEntryProps {
  entry: Entry;
}

const IndividualEntry = ({ entry }: IndividualEntryProps) => {
  return (
    <div className="entry-container">
      <div className="top-row">
        <div className="metadata-container">
          <div className="metadata-items">
            <span className="icon-item">
              <CalendarIcon size="small" />
              {dayjs(entry.creation_timestamp).format("ddd, MMMM D, YYYY")}
            </span>
            <span className="icon-item">
              <ClockIcon size="small" />
              {dayjs(entry.creation_timestamp).format("h:mm A")}
            </span>
          </div>
          <div className="metadata-items">
            <span className="icon-item">25° Kent WA</span>
            <span className="icon-item">COLORS // FLOW</span>
          </div>
        </div>
        <button className="edit-entry-btn">edit entry</button>
      </div>
      <div>
        <h1 className="heading-entry">{entry.title}</h1>
        <p className="entry-body">{entry.text_body}</p>
      </div>
    </div>
  );
};

export default IndividualEntry;
