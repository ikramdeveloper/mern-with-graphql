import {
  AddClientModal,
  Projects,
  Clients,
  AddProjectModal,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
};
export default Home;
