import EntryListItem from "./EntryListItem/EntryListItem";
import MonthListItem from "./MonthListItem/MonthListItem";
import * as dayjs from "dayjs";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import { useState } from "react";

const YearListItem = () => {
  const [showChildren, setShowChildren] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(1);

  const mockData = [
    {
      id: 1,
      userID: 1,
      title: "First Entry",
      text_body: "This is my first diary entry. I had a great day today.",
      creation_timestamp: "2023-10-27T09:00:00",
    },
    {
      id: 2,
      userID: 2,
      title: "Memorable Hike",
      text_body:
        "I went on a memorable hike today. The scenery was breathtaking.",
      creation_timestamp: "2023-10-26T17:30:00",
    },
    {
      id: 3,
      userID: 3,
      title: "Family Dinner",
      text_body: "Had a wonderful family dinner at my favorite restaurant.",
      creation_timestamp: "2023-10-25T20:15:00",
    },
    {
      id: 4,
      userID: 4,
      title: "Productive Workday",
      text_body:
        "Today was a very productive day at work. I accomplished a lot.",
      creation_timestamp: "2023-10-24T16:45:00",
    },
    {
      id: 5,
      userID: 5,
      title: "Movie Night",
      text_body: "Spent the evening watching a great movie with friends.",
      creation_timestamp: "2023-10-23T21:00:00",
    },
    {
      id: 6,
      userID: 1,
      title: "Weekend Getaway",
      text_body: "Had a relaxing weekend getaway by the beach.",
      creation_timestamp: "2023-10-22T14:20:00",
    },
    {
      id: 7,
      userID: 2,
      title: "Gardening Day",
      text_body: "Spent the day gardening and planting new flowers.",
      creation_timestamp: "2023-10-21T10:30:00",
    },
    {
      id: 8,
      userID: 3,
      title: "Birthday Celebration",
      text_body:
        "Celebrated my birthday with friends and family. It was a blast!",
      creation_timestamp: "2023-10-20T18:00:00",
    },
    {
      id: 9,
      userID: 4,
      title: "Rainy Day Reading",
      text_body: "Enjoyed a cozy day indoors, reading my favorite book.",
      creation_timestamp: "2023-10-19T12:45:00",
    },
    {
      id: 10,
      userID: 5,
      title: "New Recipe Experiment",
      text_body:
        "Tried a new recipe for dinner tonight. It turned out delicious!",
      creation_timestamp: "2023-10-18T19:30:00",
    },
  ];
  function getMonthArr() {
    const monthArr: string[] = [];
    mockData.forEach((entry) => {
      const month = dayjs(entry.creation_timestamp).format("MMMM");
      if (!monthArr.includes(month)) monthArr.push(month);
    });
    return monthArr;
  }

  return (
    <div className="year-list-container">
      <button
        className="list-toggle--large"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h2 className="heading-top">2023</h2>
        {showChildren ? <FiChevronDown /> : <FiChevronRight />}
      </button>
      {showChildren && (
        <ul className="list-side-panel">
          {getMonthArr().map((monthName) => {
            return (
              <MonthListItem month={monthName}>
                {mockData
                  .filter(
                    (entry) =>
                      dayjs(entry.creation_timestamp).format("MMMM") ===
                      monthName
                  )
                  // rudimentary sort for ascending days
                  .sort(
                    (a, b) =>
                      parseInt(dayjs(a.creation_timestamp).format("D")) -
                      parseInt(dayjs(b.creation_timestamp).format("D"))
                  )
                  .map((entry) => (
                    <EntryListItem isSelected={entry.id === selectedEntry}>
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
