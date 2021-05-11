import Section from "../../components/Section";
import Project from "../../components/Project";
import ProjectPart from '../../components/ProjectPart';


const Projects: React.FC = (): JSX.Element => {
  return (
    <Section title="Projects" id="projects">
      <ProjectPart>
        <Project
          image="@@kritibytes/flaskmng"
          name="flaskmng"
          details="flaskmng is a tool that manages Flask project. It is designed in MVT architecture."
          buttons={{
            documentation: "https://flaskmng.readthedocs.io/en/latest/",
            github: "https://github.com/kritibytes/flaskmng"
          }}
        />
        <Project
          image="@@kritibytes/readme-py"
          name="readme-py"
          details="Python library to generate perfect READMEs."
          buttons={{
            github: "https://github.com/kritibytes/readme-py"
          }}
        />
      </ProjectPart>
    </Section>
  );
}

export default Projects;