import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Spinner,
  ClientInfo,
  DeleteProjectBtn,
  EditProjectForm,
} from "../components";
import { GET_PROJECT } from "../queries/project.queries";

const SingleProject = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  const { id: projectId, name, description, client, status } = data.project;

  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
        Back
      </Link>

      <h1>{name}</h1>
      <p>{description}</p>
      <div className="d-flex">
        <h5 className="lh-0">Project Status:</h5>
        <p className="lead ms-3">{status}</p>
      </div>

      <ClientInfo client={client} />

      <EditProjectForm project={data.project} />

      <DeleteProjectBtn projectId={projectId} />
    </div>
  );
};
export default SingleProject;
