import { createUseStyles } from 'react-jss';
import { ITheme } from '../styles/theme';

export interface HeadingProps {
  text: string,
  size: number
}

const useStyles = createUseStyles((theme: ITheme) => ({
  heading: {
    fontSize: "50px",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      left: "-3px",
      bottom: "3px",
      height: "20px",
      width: "6ch",
      background: theme.primary,
      zIndex: "-1",
    }
  },
  heading2: {
    fontSize: "42px",
  }
}))

const Heading: React.FC<HeadingProps> = ({ text, size }): JSX.Element => {
  const classes = useStyles()

  switch (size) {
    case 1:
      return <h1 className={classes.heading}>{text}</h1>
    case 2:
      return <h2 className={classes.heading2}>{text}</h2>
    case 3:
      return <h3 className={classes.heading}>{text}</h3>
    case 4:
      return <h4 className={classes.heading}>{text}</h4>
    case 5:
      return <h5 className={classes.heading}>{text}</h5>
    case 6:
      return <h6 className={classes.heading}>{text}</h6>
  }
}

export default Heading;