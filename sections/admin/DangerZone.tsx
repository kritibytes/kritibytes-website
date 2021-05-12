import Section from "../../components/Section";
import Button,{ TButton } from "../../components/Button";
import { useTheme } from 'react-jss';

const DangerZone: React.FC<{ signOut: any }> = ({ signOut }): JSX.Element => {
  const theme = useTheme()
  return (
    <Section title="Danger Zone" id="danger_zone">
      <Button text="Sign Out" onClick={signOut} color="#e12727" textColor="white" />
    </Section>
  );
}

export default DangerZone;