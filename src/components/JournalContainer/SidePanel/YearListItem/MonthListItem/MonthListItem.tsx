import { ReactNode } from "react";
import { useState } from "react";
import ChevronDownIcon from "../../../../Icons/ChevronDownIcon";
import ChevronRightIcon from "../../../../Icons/ChevronRightIcon";

const MonthListItem = ({
  month,
  children,
  showByDefault,
}: {
  month: string;
  children: ReactNode;
  showByDefault: boolean;
}) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <li>
      <button
        className="list-toggle"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h3 className="label-bold">{month}</h3>
        {showByDefault || showChildren ? (
          <ChevronDownIcon size="small" />
        ) : (
          <ChevronRightIcon size="small" />
        )}
      </button>
      {(showByDefault || showChildren) && (
        <ul className="list-side-panel list-side-panel--entry">{children}</ul>
      )}
    </li>
  );
};

export default MonthListItem;
