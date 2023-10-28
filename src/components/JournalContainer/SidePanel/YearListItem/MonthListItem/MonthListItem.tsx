import { ReactNode } from "react";

const MonthListItem = ({
  month,
  children,
}: {
  month: string;
  children: ReactNode;
}) => {
  return (
    <>
      <h3>{month}</h3>
      {children}
    </>
  );
};

export default MonthListItem;
