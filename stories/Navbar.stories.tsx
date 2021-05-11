import { Meta } from "@storybook/react";
import Navbar, { NavbarProps } from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    brandName: { control: 'text' },
  }
} as Meta

const Template: React.FC<NavbarProps> = (args): JSX.Element => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  brandName: "Kritibytes",
}