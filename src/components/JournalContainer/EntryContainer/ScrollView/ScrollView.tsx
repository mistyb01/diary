import Entry from "../../../../types/entry";
import IndividualEntry from "../IndividualEntry";

interface ScrollViewProps {
  entries: Entry[];
  // selectedEntry: number | null;
  // updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}

const ScrollView = ({ entries }: ScrollViewProps) => {
  return (
    <section className="main-container">
      <div className="scroll-container">
        {entries.map((entry) => (
          <IndividualEntry entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default ScrollView;
