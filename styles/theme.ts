import { Jss } from "jss"

export interface ITheme extends Jss.Theme {
  ready?:boolean,
  primary: string,
  background: string,
  alternativeBackground: string,
  text: string,
  alternativeText: string
}

export const lightTheme: ITheme = {
  primary: "#0ea0b9",
  background: "#ffffff",
  alternativeBackground: "#efefef",
  text: "#000000",
  alternativeText: "#00000080"
}

export const darkTheme: ITheme = {
  ...lightTheme,
  text: "#eeeeee",
  alternativeText:"#ffffff80",
  background: "#343A40",
  alternativeBackground: "#494f57",  
}
