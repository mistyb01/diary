import { ReactNode } from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const MonthListItem = ({
  month,
  children,
}: {
  month: string;
  children: ReactNode;
}) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <>
      <div
        className="list-toggle"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h3>{month}</h3>
        {showChildren ? <FiChevronDown /> : <FiChevronRight />}
      </div>
      {showChildren && <ul className="entry-list-side-panel">{children}</ul>}
    </>
  );
};

export default MonthListItem;
