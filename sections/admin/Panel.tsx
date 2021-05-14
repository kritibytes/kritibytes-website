import { useTheme } from 'react-jss';
import { DefaultSession } from "next-auth";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Projects from './Projects'
import DangerZone from './DangerZone';
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