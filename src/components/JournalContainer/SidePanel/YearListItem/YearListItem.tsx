import EntryListItem from "./EntryListItem/EntryListItem";
import MonthListItem from "./MonthListItem/MonthListItem";
import * as dayjs from "dayjs";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import Entry from "../../../../types/entry";

import { useState } from "react";

interface YearListItemProps {
  year: string;
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}

const YearListItem = ({
  year,
  entries,
  selectedEntry,
  updateSelectedEntry,
}: YearListItemProps) => {
  const [showChildren, setShowChildren] = useState(
    year === dayjs().format("YYYY")
  );
  const thisYearsEntries: Entry[] = entries.filter(
    (entry) => dayjs(entry.creation_timestamp).format("YYYY") === year
  );

  // get array of the months that contain entries
  function getMonthArr() {
    const monthArr: string[] = [];
    thisYearsEntries.forEach((entry) => {
      const month = dayjs(entry.creation_timestamp).format("MMMM");
      if (!monthArr.includes(month)) monthArr.push(month);
    });
    return monthArr;
  }

  return (
    <div className="year-list-item-container">
      <button
        className="list-toggle--large"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h2 className="heading-top">{year}</h2>
        {showChildren ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {showChildren && (
        <ul className="list-side-panel">
          {getMonthArr().map((monthName) => {
            return (
              <MonthListItem key={monthName} month={monthName}>
                {thisYearsEntries
                  .filter(
                    (entry) =>
                      dayjs(entry.creation_timestamp).format("MMMM") ===
                      `${monthName}`
                  )
                  // rudimentary sort for ascending days
                  .sort(
                    (a, b) =>
                      parseInt(dayjs(a.creation_timestamp).format("D")) -
                      parseInt(dayjs(b.creation_timestamp).format("D"))
                  )
                  .map((entry) => (
                    <EntryListItem
                      key={entry.id}
                      isSelected={entry.id === selectedEntry}
                      updateIsSelected={() => updateSelectedEntry(entry.id)}
                    >
                      <span className="label-bold">
                        {dayjs(entry.creation_timestamp).format("D")}
                      </span>
                      {entry.title}
                    </EntryListItem>
                  ))}
              </MonthListItem>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default YearListItem;
