import { createUseStyles } from 'react-jss'

export interface ButtonProps {
  text: string,
  color?: string
}

export interface ButtonStyleProps {
  color: string
}

const useStyles = createUseStyles({
  button: (props: ButtonStyleProps) => ({
    background: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    fontSize: 'larger',
    color: props.color,
    border: `3px solid ${props.color || 'black'}`,
    padding: '10px 15px',
    borderRadius: 10,
    fontWeight: 500,
    boxSizing: 'border-box',
    transition: '0.25s all ease-in-out',
    "&:hover": {
      background: props.color,
      color: 'white'
    }
  })
}, { link: true })

const Button: React.FC<ButtonProps> = ({ text, color = "black", ...args }: ButtonProps): JSX.Element => {
  const classes = useStyles({ color: "black" })

  return <button className={classes.button} {...args}>{text}</button>
}

export default Button;