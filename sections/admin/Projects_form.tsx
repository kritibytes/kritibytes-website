import { useForm, SubmitHandler } from "react-hook-form";
import { TButton } from '../../components/Button';
import { useTheme } from 'react-jss';
import Heading from '../../components/Heading';


export type Projects_createInputs = {
  name: string;
  details: string;
  image: string;
  documentation: string;
  github: string;
};


const Projects_create: React.FC<any> = ({ onSubmit, loading, defaultValues = {}, title, id = "" }) => {
  const theme = useTheme()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Projects_createInputs>({
    defaultValues
  });
  return (
    <form onSubmit={handleSubmit((data) => { onSubmit({ id, ...data }) })} className="col-md-12 row mt-4">
      <div className="col-md-12">
        <Heading size={3} text={title} />
      </div>
      <div className="form-group col-md-6">
        <label>Name</label>
        <input className="form-control" {...register("name", { required: true })} />
      </div>
      <div className="form-group col-md-6">
        <label>Image</label>
        <input className="form-control" {...register("image", { required: true })} />
      </div>
      <div className="form-group col-md-12">
        <label>Details</label>
        <input className="form-control" {...register("details", { required: true })} />
      </div>
      <div className="form-group col-md-6">
        <label>Documentation</label>
        <input className="form-control" defaultValue="" {...register("documentation")} />
      </div>
      <div className="form-group col-md-6">
        <label>Github</label>
        <input className="form-control" defaultValue="" {...register("github")} />
      </div>
      <div className="form-group col-md-12 float-left">
        <TButton type="submit" text={loading[0] ? loading[1] : "Submit"} theme={theme} />
      </div>
    </form>
  );
}

export default Projects_create;