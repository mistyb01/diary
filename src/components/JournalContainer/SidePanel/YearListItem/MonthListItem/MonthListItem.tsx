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
    <li>
      <div
        className="list-toggle"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h3 className="label-bold">{month}</h3>
        {showChildren ? <FiChevronDown /> : <FiChevronRight />}
      </div>
      {showChildren && (
        <ul className="list-side-panel list-side-panel--entry">{children}</ul>
      )}
    </li>
  );
};

export default MonthListItem;
