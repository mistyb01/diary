import EntryListItem from "./EntryListItem/EntryListItem";
import MonthListItem from "./MonthListItem/MonthListItem";
import * as dayjs from "dayjs";
import ChevronDownIcon from "../../../Icons/ChevronDownIcon";
import ChevronRightIcon from "../../../Icons/ChevronRightIcon";

import Entry from "../../../../types/entry";

import { useState } from "react";

interface YearListItemProps {
  year: string;
  entries: Entry[];
  selectedEntryId: number | null;
  updateSelectedEntryId: (value: React.SetStateAction<number | null>) => void;
}

const YearListItem = ({
  year,
  entries,
  selectedEntryId,
  updateSelectedEntryId,
}: YearListItemProps) => {
  const [showChildren, setShowChildren] = useState(
    year === dayjs().format("YYYY")
  );
  const thisYearsEntries: Entry[] = entries
    .filter((entry) => dayjs(entry.creation_timestamp).format("YYYY") === year)
    // orders entries so most recent ones are at the top
    .sort(
      (a, b) =>
        new Date(b.creation_timestamp).getTime() -
        new Date(a.creation_timestamp).getTime()
    );

  const yearMatchesSelectedEntry =
    getSelectedEntryYear(selectedEntryId) === year;

  // get array of the months that contain entries
  function getMonthArr() {
    const monthArr: string[] = [];
    thisYearsEntries.forEach((entry) => {
      const month = dayjs(entry.creation_timestamp).format("MMMM");
      if (!monthArr.includes(month)) monthArr.push(month);
    });
    return monthArr;
  }

  function getSelectedEntryMonthYear(id: number | null) {
    let selectedEntryMonth = dayjs(
      entries.find((e) => e.id === id)?.creation_timestamp
    ).format("MMMM YYYY");
    return selectedEntryMonth;
  }

  function getSelectedEntryYear(id: number | null) {
    let selectedEntryYear = dayjs(
      entries.find((e) => e.id === id)?.creation_timestamp
    ).format("YYYY");
    return selectedEntryYear;
  }

  return (
    <div className="year-list-item-container">
      <button
        className="list-toggle--large"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h2 className="heading-top">{year}</h2>
        {showChildren || yearMatchesSelectedEntry ? (
          <ChevronDownIcon size="medium" />
        ) : (
          <ChevronRightIcon size="medium" />
        )}
      </button>

      {(showChildren || yearMatchesSelectedEntry) && (
        <ul className="list-side-panel">
          {getMonthArr().map((monthName) => {
            return (
              <MonthListItem
                key={monthName}
                month={monthName}
                showByDefault={
                  getSelectedEntryMonthYear(selectedEntryId) ===
                  `${monthName} ${year}`
                }
              >
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
                      isSelected={entry.id === selectedEntryId}
                      updateIsSelected={() => updateSelectedEntryId(entry.id)}
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
