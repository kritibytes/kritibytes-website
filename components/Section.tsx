import styles from '../styles/components/Section.module.scss'
import Heading from './Heading';

export interface SectionProps {
  title: string,
  id: string,
  children: any
}

const Section: React.FC<SectionProps> = ({ title, id, children }): JSX.Element => {
  return (
    <section className={styles.section} id={id}>
      <Heading size={1} text={title} />
      {children}
    </section>
  );
}

export default Section;