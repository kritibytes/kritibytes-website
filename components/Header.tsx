import Button from './Button'
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import { useTheme } from 'react-jss'
import { ITheme } from '../styles/theme';
import { Link } from 'react-scroll'

export interface HeaderProps {
  htext: string,
  description: string,
  showBtn?: boolean
}


const useStyles = createUseStyles((theme: ITheme) => ({
  header: {
    width: '100%',
    height: '480px',
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box',
    background: theme.alternativeBackground
  },
  back_lines: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    "& div": {
      height: '30px',
      backgroundColor: theme.primary,
      minWidth: "10px",
      borderRadius: "10px",
      animation: "lineStart ease-out"
    },
    "& div:nth-child(1)": {
      width: "60%",
      animationDuration: "1s"
    },
    "& div:nth-child(2)": {
      width: "30%",
      animationDuration: "1.3s"
    },
    "& div:nth-child(3)": {
      width: "45%",
      animationDuration: "1.9s"
    },
    "& div:nth-child(4)": {
      width: "70%",
      animationDuration: "1.3s"
    },
    "& div:nth-child(5)": {
      width: "25%",
      animationDuration: "2.2s"
    },
  },
  text_box: {
    zIndex: 2,
    position: "absolute",
    top: "50%",
    boxSizing: "border-box",
    padding: "20px",
    transform: "translateY(-50%)",
    "& h1": {
      fontSize: "65px",
      margin: "0px",
      fontWeight: "700",
      color: theme.text,
      "@media screen and (max-width: 600px)": {
        fontSize: "40px"
      }
    },
    "& h2": {
      fontSize: "25px",
      marginTop: "10px",
      marginBottom: "50px",
      color: theme.text,
      "@media screen and (max-width:600px)": {
        fontSize: "20px",
      }
    }
  }
}))

const Header: React.FC<HeaderProps> = ({ htext, description, showBtn = true }) => {
  const theme = useTheme() as ITheme
  const classes = useStyles()

  return (
    <header className={classes.header} style={{ paddingTop: '80px' }}>
      <div className={classes.back_lines}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.text_box}>
        <h1>{htext}</h1>
        <h2>{description}</h2>
        {showBtn && <Link to="about" spy={true} smooth={true} duration={1000}><Button text="Explore More" color={theme.text} textColor={theme.alternativeBackground} /></Link>}
      </div>
    </header>
  );
}

export default Header;