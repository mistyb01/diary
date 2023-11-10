import Entry from "../../../../types/entry";
import dayjs from "dayjs";
import CalendarIcon from "../../../Icons/CalendarIcon";
import ClockIcon from "../../../Icons/ClockIcon";
import { MouseEventHandler } from "react";

interface SinglePageProps {
  entryToShow: Entry | undefined;
  nextEntry: MouseEventHandler<HTMLButtonElement>;
  prevEntry: MouseEventHandler<HTMLButtonElement>;
  isNext: boolean;
  isPrev: boolean;
}

const SinglePage = ({
  entryToShow,
  prevEntry,
  nextEntry,
  isNext,
  isPrev,
}: SinglePageProps) => {
  return (
    <section className="main-container">
      {entryToShow && (
        <div className="entry-container">
          <div className="next-prev-container">
            {isPrev && (
              <button className="prev-btn" onClick={prevEntry}>
                ⬅ prev
              </button>
            )}
            {isNext && (
              <button className="next-btn" onClick={nextEntry}>
                next ➡
              </button>
            )}
          </div>
          <div className="top-row">
            <div className="metadata-container">
              <div className="metadata-items">
                <span className="icon-item">
                  <CalendarIcon size="small" />
                  {dayjs(entryToShow.creation_timestamp).format(
                    "ddd, MMMM D, YYYY"
                  )}
                </span>
                <span className="icon-item">
                  <ClockIcon size="small" />
                  {dayjs(entryToShow.creation_timestamp).format("h:mm A")}
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
            <h1 className="heading-entry">{entryToShow.title}</h1>
            <p className="entry-body">{entryToShow.text_body}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SinglePage;
