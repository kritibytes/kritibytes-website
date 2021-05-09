import { Meta } from '@storybook/react'
import Header, { HeaderProps } from '../components/Header'

export default {
  title: "Header",
  component: Header,
  argTypes: {
    htext: { control: 'text' },
    description: { control: 'text' }
  }
} as Meta

const Template: React.FC<HeaderProps> = (args: HeaderProps): JSX.Element => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  htext: "Kritibytes",
  description: "We are creating tech stuff for helping community!"
}