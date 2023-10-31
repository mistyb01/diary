import { MouseEventHandler, ReactNode } from "react";

interface EntryListItemProps {
  isSelected: boolean;
  updateIsSelected: MouseEventHandler<HTMLLIElement>;
  children: ReactNode;
}

const EntryListItem = ({
  isSelected,
  updateIsSelected,
  children,
}: EntryListItemProps) => {
  return (
    <li
      className={`entry-list-item ${isSelected && "entry-list-item--selected"}`}
      onClick={updateIsSelected}
    >
      <button>{children}</button>
    </li>
  );
};

export default EntryListItem;
