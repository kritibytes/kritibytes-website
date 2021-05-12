import { createUseStyles } from "react-jss";
import { ITheme } from '../styles/theme';
import Heading from './Heading';
import Button from './Button';
import Image from './Image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ProjectProps {
  image: string,
  name: string,
  details: string,
  buttons: {
    documentation?: string,
    github?: string
  }
}

const useStyles = createUseStyles((theme: ITheme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    background: theme.alternativeBackground,
    position: 'relative',
    height: "auto",
    overflow: "hidden",
    transition: ".25s box-shadow ease-in-out, .3s color ease, .3s background ease",
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
    flexGrow:"1",
  },
  buttons: {
    display:"block",
    padding: "10px",
    "& > *": {
      marginRight: "10px"
    }
  }
}))

const Project: React.FC<ProjectProps> = ({ image, name, details, buttons={} }): JSX.Element => {
  const router = useRouter()
  image = image.startsWith("@@") ? "https://opengraph.githubassets.com/c6a5f3ed8ab389f348b01939a1fc000c4ac410f3e1b3a6a7b9047c7af05481aa/" + image.slice(2) : image
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <Image
          src={image}
        />
      </div>
      <div className={classes.info}>
        <Heading size={2} text={name} />
        <p>
          {details}
        </p>
      </div>
      <div className={classes.buttons}>
        {
          "documentation" in buttons
            ? <Button text="Documentation" color="#238636" textColor="white" fontSize="small" onClick={() => { router.push(buttons.documentation) }} />
            : null
        }
        {
          "github" in buttons
            ? <Button text="Github" color="black" textColor="white" fontSize="small" onClick={() => { router.push(buttons.github) }} />
            : null
        }
      </div>
    </div>
  );
}

export default Project;