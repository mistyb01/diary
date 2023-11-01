import YearListItem from "./YearListItem";

import { useState, useEffect, useRef } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import autoAnimate from "@formkit/auto-animate";

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
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <section className="side-panel-container" ref={parent}>
      <div
        className="side-panel-toggle-container"
        onClick={() => setShowPanel(!showPanel)}
      >
        {showPanel ? <CgClose /> : <CgMenuGridR />}
      </div>

      {showPanel && (
        <div className="side-panel-content">
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
      )}
    </section>
  );
};

export default SidePanel;
