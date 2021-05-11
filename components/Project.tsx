import { createUseStyles } from "react-jss";
import { ITheme } from '../styles/theme';
import Image from 'next/image'
import Heading from './Heading';
import Button from './Button';

export interface ProjectProps {

}

const useStyles = createUseStyles((theme: ITheme) => ({
  "@globals": {
    body: {
      background: "black"
    }
  },
  wrapper: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    display: "flex",
    background: theme.alternativeBackground,
    position: 'relative',
    height: "auto",
    overflow:"hidden"
  },
  image: {
    width: "50%"
  },
  info: {
    width: "50%",
    paddingLeft: "10px",
    height:"100%"
  },
  buttons: {
    padding: "10px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    display: "flex",
    width: "50%",
    "& > *": {
      marginRight:"10px"
    }
  }
}))

const Project: React.FC<ProjectProps> = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <Image
          src="https://opengraph.githubassets.com/c6a5f3ed8ab389f348b01939a1fc000c4ac410f3e1b3a6a7b9047c7af05481aa/kritibytes/flaskmng"
          layout="fill"
        />
      </div>
      <div className={classes.info}>
        <Heading size={2} text={"flaskmng"} />
        <p>
          flaskmng is a tool that manages Flask project. It is designed in MVT architecture.
        </p>
        <div className={classes.buttons}>
          <Button text="Documentation" color="#238636" textColor="white" fontSize="small"/>
          <Button text="Github" color="black" textColor="white" fontSize="small"/>
        </div>
      </div>
    </div>
  );
}

export default Project;