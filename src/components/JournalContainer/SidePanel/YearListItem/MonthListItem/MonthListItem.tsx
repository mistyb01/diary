import { ReactNode } from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const MonthListItem = ({
  month,
  children,
  showByDefault,
}: {
  month: string;
  children: ReactNode;
  showByDefault: boolean;
}) => {
  const [showChildren, setShowChildren] = useState(showByDefault);

  return (
    <li>
      <button
        className="list-toggle"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h3 className="label-bold">{month}</h3>
        {showChildren ? <FiChevronDown /> : <FiChevronRight />}
      </button>
      {showChildren && (
        <ul className="list-side-panel list-side-panel--entry">{children}</ul>
      )}
    </li>
  );
};

export default MonthListItem;
