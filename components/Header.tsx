import styles from '../styles/components/Header.module.scss'
import Button from './Button'

type HeaderProps = {
  htext: string,
  description: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ htext, description }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.back_lines}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.text_box}>
        <h1>{htext}</h1>
        <h2>{description}</h2>
        <Button text="Explore More" />
      </div>
    </header>
  );
}

export default Header;