import Section from "../../components/Section";
import db from '../../services/db'
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import Projects_create, { Projects_createInputs } from "./Projects_create";
import Modal from '../../components/Modal';
import { TButton } from '../../components/Button';
import { useTheme } from 'react-jss';


const Projects: React.FC = (): JSX.Element => {
  const theme = useTheme()

  const [createFormOpen, setCreateFormOpen] = useState(false)
  const [projectsLoading, setProjectsLoading] = useState(false)

  const createSubmit: SubmitHandler<Projects_createInputs> = (data) => {
    setProjectsLoading(true)
    axios.post('/api/projects/create', data).then((res) => {
      console.log(res)
      setProjectsLoading(false)
    })
  };

  const updateSubmit: SubmitHandler<any> = ({ id, ...data }) => {
    setProjectsLoading(true)
    axios.post(`/api/projects/${id}/update`, data).then((res) => {
      console.log(res)
      setProjectsLoading(false)
    })
  };

  const deleteSubmit: SubmitHandler<any> = ({ id }) => {
    setProjectsLoading(true)
    axios.get(`/api/projects/${id}/delete`).then((res) => {
      console.log(res)
      setProjectsLoading(false)
    })
  };

  return (
    <Section title="Projects" id="projects">
      <TButton text="Create" theme={theme} onClick={() => { setCreateFormOpen(true) }} />
      <Modal isOpen={createFormOpen} setIsOpen={setCreateFormOpen}>
        <Projects_create onSubmit={createSubmit} loading={projectsLoading} />
      </Modal>
    </Section>
  );
}

export default Projects;