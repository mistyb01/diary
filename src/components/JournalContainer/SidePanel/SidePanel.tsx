import YearListItem from "./YearListItem";

import { useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import ReadingModeToggle from "./ReadingModeToggle";

const SidePanel = () => {
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
          <h1 className="heading-label">entry list</h1>

          {/* TODO: items are mapped to entry data */}
          {showPanel && (
            <>
              <YearListItem />
              <ReadingModeToggle />
            </>
          )}
        </>
      )}
    </section>
  );
};

export default SidePanel;
