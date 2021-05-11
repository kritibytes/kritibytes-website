import { auto } from "@popperjs/core";
import { createUseStyles } from "react-jss";

export interface ProjectPartProps {

}

const useStyles = createUseStyles({
  wrapper: {
    paddingTop:"20px",
    display: "grid",
    gridColumnGap: "20px",
    gridRowGap: "20px",
    gridTemplateColumns: "1fr 1fr 1fr",
    "@media screen and (max-width:1150px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media screen and (max-width:890px)": {
      gridTemplateColumns: "1fr",
    }
  }
})

const ProjectPart: React.FC<ProjectPartProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  );
}

export default ProjectPart;