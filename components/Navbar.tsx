import { useState } from "react";
import style from '../styles/components/Navbar.module.scss';
import { Link as ReactScrollLink } from 'react-scroll'
import Link from './Link'
import { createUseStyles } from "react-jss";
import { NavbarDefs } from '../styles/styleDefaults';

export interface NavbarStyleProps {
  underlineColor?: string,
  backColor?: string,
  textColor?: string
}

export interface NavbarProps extends NavbarStyleProps {
  brandName: string,
}

const useStyle = createUseStyles({
  nav_link: {
    color: "rgba(0, 0, 0, 0.3) !important",
    fontWeight: "700 !important",
    transition: "0.3s all ease!important",
    position: "relative",
    width: "fit-content",
    padding: "8px !important",
    cursor: "pointer !important",
    "&:after": {
      content: '""',
      height: "3px",
      borderRadius: "10%",
      width: "0",
      opacity: 0,
      position: "absolute",
      bottom: "0",
      left: "50%",
      background: (props: NavbarStyleProps) => props.underlineColor,
      transition: "0.3s all ease",
    },
    "&:hover:after": {
      left: 0,
      opacity: 1,
      width: "100%",
    }
  },
  navbar_brand: {
    color: (props: NavbarStyleProps) => props.textColor,
    "&:hover": {
      color: (props: NavbarStyleProps) => props.textColor
    }
  }
})

export const NavLink = ({ to, children, cls }) => {
  return <ReactScrollLink activeClass={style.nav_link__active + " nav-link"} to={to} spy={true} hashSpy={true} smooth={true} duration={1000} className={cls}>{children}</ReactScrollLink>
}

const Navbar: React.FC<NavbarProps> = ({ brandName, underlineColor = NavbarDefs.underlineColor, backColor = NavbarDefs.backColor, textColor = NavbarDefs.textColor }): JSX.Element => {
  const classes = useStyle({ underlineColor, backColor, textColor })
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <nav id="navbar" className={style.navbar + ' navbar navbar-expand-md navbar-light bg-light ml-auto'}>
      <Link href="/"><a className={style.navbar_brand + " " + classes.navbar_brand}>{brandName}</a></Link>
      <button className={style.menu + (menuOpened ? ' ' + style.opened : '') + ' navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={menuOpened} aria-label="Toggle navigation" onClick={() => { setMenuOpened(!menuOpened) }}>
        <svg viewBox="0 0 100 100">
          <path className={style.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className={style.line2} d="M 20,50 H 80" />
          <path className={style.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={style.navbar_nav + " navbar-nav ml-auto"}>
          <li className='nav-item'>
            <NavLink cls={classes.nav_link + " nav-link"} to="hello">Hello</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink cls={classes.nav_link + " nav-link"} to="about">About Me</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink cls={classes.nav_link + " nav-link"} to="skills">Skills</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink cls={classes.nav_link + " nav-link"} to="projects">Projects</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink cls={classes.nav_link + " nav-link"} to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;