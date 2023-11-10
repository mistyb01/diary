import Entry from "../../../../types/entry";

interface ScrollViewProps {
  entries: Entry[];
  // selectedEntry: number | null;
  // updateSelectedEntry: (value: React.SetStateAction<number | null>) => void;
}

const ScrollView = ({ entries }: ScrollViewProps) => {
  return <section className="main-container">scroll</section>;
};

export default ScrollView;
