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
  return (
    <>
      <Navbar brandName="Kritibytes Admin" navLinks={[
        ['Projects', 'projects'],
        ['Danger Zone', 'danger_zone']
      ]} />
      <Header showBtn={false} htext="Kritibytes Admin" description="Admin Panel for Kritibytes" />
      <Projects />
      <DangerZone signOut={signOut} />
    </>
  );
}

export default Panel;