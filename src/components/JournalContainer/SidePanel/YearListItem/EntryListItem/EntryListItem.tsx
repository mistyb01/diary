import { ReactNode } from "react";

const EntryListItem = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <li>{children}</li>
    </>
  );
};

export default EntryListItem;
