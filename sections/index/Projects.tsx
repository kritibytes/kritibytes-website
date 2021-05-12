import Section from "../../components/Section";
import Project from "../../components/Project";
import ProjectPart from '../../components/ProjectPart';
import { useState, useEffect } from 'react';
import axios from "axios";


const Projects: React.FC = (): JSX.Element => {
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
          ? "Loading..."
          :
          <ProjectPart>
            {projectsData.map(
              ({id,...d}) => (
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