import Section from "../../components/Section";
import Project from "../../components/Project";
import ProjectPart from '../../components/ProjectPart';
import ReactLoading from "react-loading";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useTheme } from 'react-jss';
import { ITheme } from "../../styles/theme";


const Projects: React.FC = (): JSX.Element => {
  const theme: ITheme = useTheme()
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    axios.get('/api/projects').then(resp => {
      setProjectsData(resp.data)
    })
  }, [])

  return (
    <Section title="Projects" id="projects">
      {
        projectsData.length == 0
          ? <ReactLoading type="bubbles" color={theme.primary} />
          :
          <ProjectPart>
            {projectsData.map(
              ({ id, ...d }) => (
                <Project
                  key={id}
                  {...d}
                />
              )
            )}
          </ProjectPart>
      }

    </Section>
  );
}

export default Projects;