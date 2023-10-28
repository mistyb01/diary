import { ReactNode } from "react";

const EntryListItem = ({ children }: { children: ReactNode }) => {
  return <li className="entry-list-item">{children}</li>;
};

export default EntryListItem;
