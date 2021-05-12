import { useTheme } from 'react-jss';
import { DefaultSession } from "next-auth";
import Navbar from '../Navbar';
import Header from "../Header";
import Projects from '../../sections/admin/Projects'
import DangerZone from '../../sections/admin/DangerZone';
export interface PanelProps {
  user: DefaultSession["user"],
  signOut: any
}

const Panel: React.FC<PanelProps> = ({ user, signOut }) => {
  const theme = useTheme()
  console.log(user)
  return (
    <>
      <Navbar brandName="Kritibytes Admin" navLinks={[
        ['Projects', 'projects'],
        ['Danger Zone', 'danger_zone']
      ]} />
      <Header htext="Kritibytes Admin" description="Admin Panel for Kritibytes" />
      <Projects />
      <DangerZone signOut={signOut}/>
    </>
  );
}

export default Panel;