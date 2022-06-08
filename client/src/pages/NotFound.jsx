import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle size="5em" className="text-danger" />
      <p className="lead">I'm afraid! This page does not exist</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;
