import Entry from "../../../../types/entry";
import dayjs from "dayjs";
import CalendarIcon from "../../../Icons/CalendarIcon";
import ClockIcon from "../../../Icons/ClockIcon";
import { MouseEventHandler } from "react";
import IndividualEntry from "../IndividualEntry";

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
          <IndividualEntry entry={entryToShow} />
        </div>
      )}
    </section>
  );
};

export default SinglePage;
