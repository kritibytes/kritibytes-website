import styles from '../styles/components/Heading.module.scss'

export interface HeadingProps {
  text: string,
  size: number
}

const Heading: React.FC<HeadingProps> = ({ text, size }): JSX.Element => {
  switch (size) {
    case 1:
      return <h1 className={styles.heading}>{text}</h1>
    case 2:
      return <h2 className={styles.heading}>{text}</h2>
    case 3:
      return <h3 className={styles.heading}>{text}</h3>
    case 4:
      return <h4 className={styles.heading}>{text}</h4>
    case 5:
      return <h5 className={styles.heading}>{text}</h5>
    case 6:
      return <h6 className={styles.heading}>{text}</h6>
  }
}

export default Heading;