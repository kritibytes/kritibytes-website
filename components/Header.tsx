import Button from './Button'
import { createUseStyles } from 'react-jss';
import { HeaderDefs } from '../styles/styleDefaults';
import { useState, useEffect } from 'react';

export interface HeaderStyleProps {
  backColor?: string,
  lineColor?: string,
  textColor?: string,
  buttonColor?: string,
  buttonTextColor?: string
}

export interface HeaderProps extends HeaderStyleProps {
  htext: string,
  description: string,
}


const useStyles = createUseStyles({
  header: (props: HeaderStyleProps) => ({
    width: '100%',
    height: '480px',
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box',
    background: props.backColor
  }),
  "@keyframes lineStart": {
    "0%": {
      maxWidth: "0"
    },
    "100%": {
      maxWidth: "70%"
    }
  },
  back_lines: (props: HeaderStyleProps) => ({
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
      backgroundColor: props.lineColor,
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
  }),
  text_box: (props: HeaderStyleProps) => ({
    zIndex: 2,
    position: "absolute",
    top: "50%",
    boxSizing: "border-box",
    padding: "20px",
    transform: "translateY(-50%)",
    "& h1": {
      fontSize: "65px",
      margin: "0px",
      color: props.textColor,
      "@media screen and (max-width: 600px)": {
        fontSize: "40px"
      }
    },
    "& h2": {
      fontSize: "25px",
      marginTop:"10px",
      marginBottom: "50px",
      color: props.textColor,
      "@media screen and (max-width:600px)": {
        fontSize: "20px",
      }
    }
  })
})

const Header: React.FC<HeaderProps> = ({ htext, description, backColor = HeaderDefs.backColor, lineColor = HeaderDefs.lineColor, textColor = HeaderDefs.textColor, buttonColor = HeaderDefs.buttonColor, buttonTextColor = HeaderDefs.buttonTextColor }: HeaderProps): JSX.Element => {
  const classes = useStyles({ backColor, lineColor, textColor, buttonTextColor })

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
        <Button text="Explore More" color={buttonColor} textColor={buttonTextColor} />
      </div>
    </header>
  );
}

export default Header;