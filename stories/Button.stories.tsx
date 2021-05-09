import { Meta } from '@storybook/react'
import Button, { ButtonProps } from '../components/Button'

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' }
  },
} as Meta

const Template: React.FC<ButtonProps> = (args: ButtonProps): JSX.Element => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default',
  color: 'black'
}