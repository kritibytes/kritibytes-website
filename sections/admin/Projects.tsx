import Section from "../../components/Section";
import db from '../../services/db'
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import Projects_form, { Projects_createInputs } from "./Projects_form";
import Modal from '../../components/Modal';
import { TButton } from '../../components/Button';
import { useTheme } from 'react-jss';
import Table from '../../components/Table';


const Projects: React.FC = (): JSX.Element => {
  const theme = useTheme()
  const [projectList, setProjectList] = useState([])
  const [createFormOpen, setCreateFormOpen] = useState(false)
  const [updateFormOpen, setUpdateFormOpen] = useState(false)
  const [projectsLoading, setProjectsLoading] = useState(false)
  const [updateFormDefs, setUpdateFormDefs] = useState({})
  const [updateFormId, setUpdateFormId] = useState("")

  useEffect(() => {
    axios.get('/api/projects').then((res) => {
      setProjectList(res.data)
    })
  }, [])

  const createSubmit: SubmitHandler<any> = (data) => {
    setProjectsLoading(true)
    delete data.id
    axios.post('/api/projects/create', data).then((res) => {
      setProjectsLoading(false)
      setCreateFormOpen(false)
    })
  };

  const openUpdateForm = (objectId: string) => {
    var obj_data = projectList.find(x => x.id == objectId)
    const { github, documentation } = obj_data.buttons
    obj_data = { ...obj_data, github, documentation }
    delete obj_data.buttons
    setUpdateFormDefs(obj_data)
    setUpdateFormId(obj_data.id)
    setUpdateFormOpen(true)
  }

  const updateSubmit: SubmitHandler<any> = ({ id, ...data }) => {
    setProjectsLoading(true)
    axios.post(`/api/projects/${id}/update`, data).then((res) => {
      setProjectsLoading(false)
      setUpdateFormOpen(false)
    })
  };

  const deleteSubmit: SubmitHandler<any> = (id) => {
    setProjectsLoading(true)
    axios.get(`/api/projects/${id}/delete`).then((res) => {
      console.log(res)
      setProjectsLoading(false)
    })
  };

  return (
    <Section title="Projects" id="projects">
      {projectList.length > 0
        ? <Table columns={[
          { Header: "Id", accessor: "id" },
          { Header: "Name", accessor: "name" },
        ]} data={projectList} updateBtnHandler={openUpdateForm} deleteBtnHandler={deleteSubmit} />
        : null}
      <TButton text="Create" theme={theme} onClick={() => { setCreateFormOpen(true) }} />
      <Modal isOpen={createFormOpen} setIsOpen={setCreateFormOpen}>
        <Projects_form title="Create" onSubmit={createSubmit} loading={[projectsLoading, "Creating..."]} />
      </Modal>
      <Modal isOpen={updateFormOpen} setIsOpen={setUpdateFormOpen}>
        <Projects_form id={updateFormId} title="Update" defaultValues={updateFormDefs} onSubmit={updateSubmit} loading={[projectsLoading, "Updating..."]} />
      </Modal>
    </Section>
  );
}

export default Projects;