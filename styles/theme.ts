import { Jss } from "jss"

export interface ITheme extends Jss.Theme {
  primary: string,
  background: string,
  alternativeBackground: string,
  text: string,
  alternativeText: string
}

export const lightTheme: ITheme = {
  primary: "red",
  background: "#ffffff",
  alternativeBackground: "#f8f8f8ff",
  text: "#000000",
  alternativeText: "#000000"
}

export const darkTheme: ITheme = {
  primary:"green",
  text: "#eeeeee",
  alternativeText:"#eeeeee",
  background: "#111111",
  alternativeBackground: "#333333",  
}
