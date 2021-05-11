import { createUseStyles } from "react-jss";
import { ITheme } from '../styles/theme';
// import Image from 'next/image'
import Heading from './Heading';
import Button from './Button';

const Image = props => {
  const { width, height } = props
  const ratio = (height / width) * 100
  return (
    <div
      style={{
        paddingBottom: `${ratio}%`,
        position: "relative",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        {...props}
      />
    </div>
  )
}

export interface ProjectProps {

}

const useStyles = createUseStyles((theme: ITheme) => ({
  wrapper: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: theme.alternativeBackground,
    position: 'relative',
    height: "auto",
    overflow: "hidden",
    transition:".25s box-shadow ease-in-out",
    "&:hover": {
      boxShadow: `0px 0px 10px ${theme.alternativeBackground}`,
    }
  },
  image: {
    width: "100%",
    display: "block",
    "& > div": {

    },
    "& > div > img": {
      objectFit: "cover",
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
    }
  },
  info: {
    width: "100%",
    padding: "20px 10px",
  },
  buttons: {
    padding: "10px",
    left: "50%",
    display: "flex",
    width: "50%",
    "& > *": {
      marginRight: "10px"
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
        />
      </div>
      <div className={classes.info}>
        <Heading size={2} text={"flaskmng"} />
        <p>
          flaskmng is a tool that manages Flask project. It is designed in MVT architecture.
        </p>
      </div>
      <div className={classes.buttons}>
        <Button text="Documentation" color="#238636" textColor="white" fontSize="small" />
        <Button text="Github" color="black" textColor="white" fontSize="small" />
      </div>
    </div>
  );
}

export default Project;