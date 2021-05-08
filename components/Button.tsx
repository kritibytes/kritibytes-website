import styles from '../styles/components/Button.module.scss'

type ButtonProps = {
  text: string
}


const Button : React.FunctionComponent<ButtonProps> = ({ text }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button}>{text}</button>
  );
}

export default Button;