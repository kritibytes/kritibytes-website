import { Meta } from '@storybook/react'
import Button, { ButtonProps } from '../components/Button'
import { ButtonDefs } from '../styles/styleDefaults'

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    textColor: { control: 'color' }
  },
} as Meta

const Template: React.FC<ButtonProps> = (args: ButtonProps): JSX.Element => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default',
  ...ButtonDefs
}