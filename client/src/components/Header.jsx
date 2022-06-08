import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <figure className="d-flex align-items-center m-2">
            <img src={logo} alt="logo" className="mr-2" />
            <div>MERN GraphQL</div>
          </figure>
        </a>
      </div>
    </nav>
  );
};
export default Header;
