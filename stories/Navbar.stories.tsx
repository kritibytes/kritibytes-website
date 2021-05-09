import { Meta } from "@storybook/react";
import Navbar, { NavbarProps } from "../components/Navbar";
import { NavbarDefs } from '../styles/styleDefaults';

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    brandName: { control: 'text' },
    underlineColor: { control: 'color' },
    textColor: { control: 'color' },
    backColor: { control: 'color' }
  }
} as Meta

const Template: React.FC<NavbarProps> = (args): JSX.Element => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  brandName: "Kritibytes",
  ...NavbarDefs
}