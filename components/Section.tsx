import styles from '../styles/components/Section.module.scss'
import Heading from './Heading';

export interface SectionProps {
  title: string,
  id: string,
  children: JSX.Element | string | never[]
}

const Section: React.FC<SectionProps> = ({ title, id, children }: SectionProps): JSX.Element => {
  return (
    <section className={styles.section} id={id}>
      <Heading size={1} text={title} />
      {children}
    </section>
  );
}

export default Section;