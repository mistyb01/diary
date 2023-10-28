import { ReactNode } from "react";

const EntryListItem = ({
  isSelected,
  children,
}: {
  isSelected: boolean;
  children: ReactNode;
}) => {
  return (
    <li
      className={`entry-list-item ${isSelected && "entry-list-item--selected"}`}
    >
      <button>{children}</button>
    </li>
  );
};

export default EntryListItem;
