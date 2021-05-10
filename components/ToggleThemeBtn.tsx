import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";

export interface ToggleThemeBtnProps {
  onClick: any,
  activeTheme: string
}

const useStyles = createUseStyles({
  button: {
    position:"absolute",
    display: "block",
    width: "50px",
    height:"50px",
    bottom: "20px",
    right: "20px",
    zIndex: 999,
    border: "none",
    outline: "none!important",
    padding: "10px",
    borderRadius: "50%",
  },
  dark: {
    background: "black",
    boxShadow:"0px 0px 15px rgba(0,0,0,.75)",
    "& path": {
      color:"white!important"
    }
  },
  light: {
    background: "white",
    boxShadow:"0px 0px 15px rgba(200,200,200,.75)",
    "& path": {
      color:"#fdba14!important"
    }
  }
})

const ToggleThemeBtn: React.FC<ToggleThemeBtnProps> = ({ activeTheme, ...props }) => {
  const classes = useStyles()
  return (
    <button className={classes.button + " " + (activeTheme == "light" ? classes.dark : classes.light)} {...props}>
      <FontAwesomeIcon size="sm"  icon={activeTheme == "light" ? faMoon : faSun}/>
    </button>
  );
}

export default ToggleThemeBtn;