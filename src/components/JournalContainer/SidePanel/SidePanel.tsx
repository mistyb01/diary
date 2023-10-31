import YearListItem from "./YearListItem";

import { useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import ReadingModeToggle from "./ReadingModeToggle";
import Entry from "../../../types/entry";

const SidePanel = ({
  entries,
  selectedEntry,
  updateSelectedEntry,
}: {
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}) => {
  const [showPanel, setShowPanel] = useState(true);

  return (
    <section className="side-panel-container">
      <div
        className="side-panel-toggle-container"
        onClick={() => setShowPanel(!showPanel)}
      >
        {showPanel ? <FiChevronsLeft /> : <FiChevronsRight />}
      </div>
      {showPanel && (
        <>
          <ReadingModeToggle />
          <div>
            <h1 className="heading-label">entry list</h1>
            {/* TODO: items are mapped to entry data */}
            <YearListItem
              entries={entries}
              selectedEntry={selectedEntry}
              updateSelectedEntry={updateSelectedEntry}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default SidePanel;
