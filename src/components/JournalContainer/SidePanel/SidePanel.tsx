import YearListItem from "./YearListItem";

import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import ReadingModeToggle from "./ReadingModeToggle";
import Entry from "../../../types/entry";

interface SidePanelProps {
  entries: Entry[];
  selectedEntry: number | null;
  updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}

const SidePanel = ({
  entries,
  selectedEntry,
  updateSelectedEntry,
}: SidePanelProps) => {
  const [showPanel, setShowPanel] = useState(true);

  return (
    <section className="side-panel-container">
      <div
        className="side-panel-toggle-container"
        onClick={() => setShowPanel(!showPanel)}
      >
        {showPanel ? <CgClose /> : <CgMenuGridR />}
      </div>

      <div
        className={
          showPanel ? "side-panel-content show-panel" : "side-panel-content"
        }
      >
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
      </div>
    </section>
  );
};

export default SidePanel;
