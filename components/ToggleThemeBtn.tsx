import { createUseStyles } from "react-jss";

export interface ToggleThemeBtnProps {
  onClick: any,
  activeTheme: string
}

const useStyles = createUseStyles({
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 999,
  }
})

const ToggleThemeBtn: React.FC<ToggleThemeBtnProps> = ({ activeTheme, ...props }) => {
  const classes = useStyles()
  return (
    <button className={classes.button} {...props}>TOGGLE</button>
  );
}

export default ToggleThemeBtn;