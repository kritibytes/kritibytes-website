import { createUseStyles } from 'react-jss'
import { ButtonDefs } from '../styles/styleDefaults'

export interface ButtonStyleProps {
  color?: string,
  textColor?: string
}

export interface ButtonProps extends ButtonStyleProps {
  text: string,
}

const useStyles = createUseStyles({
  button: (props: ButtonStyleProps) => ({
    background: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    fontSize: 'larger',
    color: props.color,
    border: `3px solid ${props.color}`,
    padding: '10px 15px',
    borderRadius: 10,
    fontWeight: 500,
    boxSizing: 'border-box',
    transition: '0.25s all ease-in-out',
    "&:hover": {
      background: props.color,
      color: props.textColor
    }

  })
})

const Button: React.FC<ButtonProps> = ({ text, color = ButtonDefs.color, textColor = ButtonDefs.textColor, ...args }): JSX.Element => {
  const classes = useStyles({ color, textColor })

  return (
    <button className={classes.button} {...args}>{text}</button>
  );
}

export default Button;