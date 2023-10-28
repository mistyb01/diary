import { MouseEventHandler, ReactNode } from "react";

const EntryListItem = ({
  isSelected,
  updateIsSelected,
  children,
}: {
  isSelected: boolean;
  updateIsSelected: MouseEventHandler<HTMLLIElement>;
  children: ReactNode;
}) => {
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
