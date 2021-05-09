import { Meta } from '@storybook/react'
import Header, { HeaderProps } from '../components/Header'
import { HeaderDefs } from '../styles/styleDefaults'

export default {
  title: "Header",
  component: Header,
  argTypes: {
    htext: { control: 'text' },
    description: { control: 'text' },
    backColor: { control: 'color' },
    lineColor: { control: 'color' },
    textColor: { control: 'color' },
    buttonColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
  }
} as Meta

const Template: React.FC<HeaderProps> = (args): JSX.Element => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  htext: "Kritibytes",
  description: "We are creating tech stuff for helping community!",
  ...HeaderDefs
}