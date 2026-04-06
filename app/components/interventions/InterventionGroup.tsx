import SubHeading from "../ui/SubHeading";
import FeatureCard from "../ui/FeatureCard";
import Reveal from "../Reveal";
import { Stagger } from "../Reveal";
import styles from './InterventionGroup.module.css';

interface Item {
  title: string;
  text: string;
  icon: string;
}

interface InterventionGroupProps {
  heading: string;
  items: Item[];
  columns: "cols3md" | "cols2md3lg";
}

export default function InterventionGroup({
  heading,
  items,
  columns,
}: InterventionGroupProps) {
  return (
    <div>
      <Reveal variant="fade-up">
        <SubHeading>{heading}</SubHeading>
      </Reveal>
      <Stagger variant="scale" className={styles[columns]}>
        {items.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title}>
            {item.text}
          </FeatureCard>
        ))}
      </Stagger>
    </div>
  );
}
