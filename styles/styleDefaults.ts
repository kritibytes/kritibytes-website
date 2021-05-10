import { ButtonStyleProps } from "../components/Button"
import { HeaderStyleProps } from "../components/Header"
import { NavbarStyleProps } from '../components/Navbar';

import { lightTheme, darkTheme } from "./theme";

export const ButtonDefs: ButtonStyleProps = {
  color: "black",
  textColor: "white"
}

export const HeaderDefs: HeaderStyleProps = {
  backColor: "#f8f8f8ff",
  lineColor: "#0ea0b9",
  textColor: "black",
  buttonColor: ButtonDefs.color,
  buttonTextColor: ButtonDefs.textColor
}

export const NavbarDefs: NavbarStyleProps = {
  underlineColor: "#0ea0b9",
  textColor: "black",
  backColor: "#f8f9fa"
}