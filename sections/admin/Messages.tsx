import MessagesTable from '../../components/MessagesTable'
import Section from "../../components/Section";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
import ReactLoading from 'react-loading';
import { useTheme } from 'react-jss';
import { ITheme } from '../../styles/theme';
import Heading from '../../components/Heading';
import { ContactFormFields } from '../../components/ContactForm';

const Messages: React.FC = () => {
  const theme: ITheme = useTheme()
  const [messageList, setMessageList] = useState([])
  const [activeMessage, setActiveMessage] = useState({} as ContactFormFields)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    axios.get('/api/messages').then((res) => {
      setMessageList(res.data)
    })
  }, [])

  const viewMessageHandler = (messageId) => {
    var message = messageList.find(x => x.id == messageId)
    setActiveMessage(message)
    setModalOpen(true)
  }

  return (
    <Section title="Messages" id="messages">
      {
        messageList.length > 0
          ?
          <>
            <MessagesTable
              columns={[
                { Header: "Id", accessor: "id" },
                { Header: "Name", accessor: "name" },
                { Header: "E-mail", accessor: "email" },
                { Header: "Title", accessor: "title" },
              ]}
              data={messageList}
              viewMessageHandler={viewMessageHandler}
            />
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
              <Heading size={2} text={activeMessage.title}/><br/>
              <div className="ck-content" dangerouslySetInnerHTML={{ __html: activeMessage.body }}></div>
            </Modal>
          </>
          : <ReactLoading type="bubbles" color={theme.primary} />
      }
    </Section>
  );
}

export default Messages;