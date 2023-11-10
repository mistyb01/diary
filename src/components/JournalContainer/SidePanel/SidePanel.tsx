import YearListItem from "./YearListItem";

import { useState, useEffect, useRef } from "react";
import MenuIcon from "../../Icons/MenuIcon";
import CloseIcon from "../../Icons/CloseIcon";
import autoAnimate from "@formkit/auto-animate";

import ReadingModeToggle from "./ReadingModeToggle";
import Entry from "../../../types/entry";
import dayjs from "dayjs";

interface SidePanelProps {
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
  readingMode: "singlePage" | "scroll";
  updateReadingMode: (
    mode: React.SetStateAction<"singlePage" | "scroll">
  ) => void;
}

const SidePanel = ({
  entries,
  selectedEntry,
  updateSelectedEntry,
  readingMode,
  updateReadingMode,
}: SidePanelProps) => {
  const [showPanel, setShowPanel] = useState(true);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 175 });
  }, [parent]);

  // get array of the years that contain entries
  function getYearArr() {
    const yearArr: string[] = [];
    entries.forEach((entry) => {
      const year = dayjs(entry.creation_timestamp).format("YYYY");
      if (!yearArr.includes(year)) yearArr.push(year);
    });
    return yearArr;
  }

  return (
    <section className="side-panel-container" ref={parent}>
      <div
        className="side-panel-toggle-container"
        onClick={() => setShowPanel(!showPanel)}
      >
        {showPanel ? <CloseIcon size="medium" /> : <MenuIcon size="medium" />}
      </div>

      {showPanel && (
        <div className="side-panel-content">
          <ReadingModeToggle
            readingMode={readingMode}
            updateReadingMode={updateReadingMode}
          />
          <div>
            <h1 className="heading-label">entry list</h1>
            <ul className="year-list-container">
              {getYearArr()
                .sort((a, b) => parseInt(b) - parseInt(a))
                .map((year) => (
                  <YearListItem
                    year={year}
                    key={year}
                    entries={entries}
                    selectedEntryId={selectedEntry}
                    updateSelectedEntryId={updateSelectedEntry}
                  />
                ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SidePanel;
