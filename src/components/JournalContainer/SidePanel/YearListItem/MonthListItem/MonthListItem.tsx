import { ReactNode } from "react";
import { useState } from "react";

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
      <h3 onClick={() => setShowChildren(!showChildren)}>{month}</h3>
      {showChildren && <ul className="entry-list-side-panel">{children}</ul>}
    </>
  );
};

export default MonthListItem;
