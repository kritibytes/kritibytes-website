import Section from "../../components/Section";
import Project from "../../components/Project";
import ProjectPart from '../../components/ProjectPart';

export interface AboutProps {

}

const About: React.FC<AboutProps> = ({ }: AboutProps): JSX.Element => {
  return (
    <Section title="About" id="about">
      <ProjectPart>
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectPart>
    </Section>
  );
}

export default About;