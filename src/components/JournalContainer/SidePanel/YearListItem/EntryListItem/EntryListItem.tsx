import { ReactNode } from "react";

const EntryListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="entry-list-item">
      <button>{children}</button>
    </li>
  );
};

export default EntryListItem;
