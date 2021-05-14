import { useForm, SubmitHandler } from "react-hook-form";
import { useTheme } from 'react-jss';
import { TButton } from './Button'
import ReactLoading from "react-loading";
import { useState, useEffect, useRef } from 'react';
import { ITheme } from "../styles/theme";
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export interface ContactFormProps {

}

export type ContactFormFields = {
  name: string,
  email: string,
  title: string,
  body: string,
}


const ContactForm: React.FC<ContactFormProps> = () => {
  const theme: ITheme = useTheme()
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<ContactFormFields>()
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {} as { CKEditor: null, ClassicEditor: null }

  useEffect(() => {
    register('body');
    
    (editorRef as any).current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  const formHandler: SubmitHandler<ContactFormFields> = (data) => {
    data.body = data.body.replace(/\r\n|\r|\n/g, "<br />")
    setSubmitting(true)
    axios.post('/api/messages/create', data).then((res) => {
      setSubmitting(false)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(formHandler)} className="col-md-6 row mt-4">
        <div className="form-group col-md-12">
          <label>Full Name</label>
          <input className="form-control" {...register("name", { required: true })} />
        </div>
        <div className="form-group col-md-12">
          <label>E-mail</label>
          <input className="form-control" {...register("email", { required: true })} />
        </div>
        <div className="form-group col-md-12">
          <label>Title</label>
          <input className="form-control" {...register("title", { required: true })} />
        </div>
        <div className="form-group col-md-12">
          <label>Message</label>
          {/* <textarea rows={5} className="form-control" {...register("body", { required: true })} /> */}
          {editorLoaded && <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue('body', data);
            }}
          />}
        </div>
        <div className="form-group col-md-12 float-left">
          {submitting ? <ReactLoading type="bubbles" color={theme.primary} /> : <TButton type="submit" text="Submit" theme={theme} />}
        </div>
      </form>
    </>
  );
}

export default ContactForm;