import { Meta } from "@storybook/react";
import Project, { ProjectProps } from "../components/Project";

export default {
  title: "Project",
  component: Project,

} as Meta

const Template: React.FC<ProjectProps> = (args): JSX.Element => <Project {...args} />

export const Default = Template.bind({})
