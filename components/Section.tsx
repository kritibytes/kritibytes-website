import styles from '../styles/components/Section.module.scss'

export interface SectionProps {
  title: string,
  id: string,
  children: JSX.Element | string | never[]
}

const Section: React.FC<SectionProps> = ({ title, id, children }: SectionProps): JSX.Element => {
  return (
    <section className={styles.section} id={id}>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </section>
  );
}

export default Section;