import styles from '../styles/components/Button.module.scss'

export interface ButtonProps {
  text: string
}


const Button : React.FC<ButtonProps> = ({ text }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button}>{text}</button>
  );
}

export default Button;