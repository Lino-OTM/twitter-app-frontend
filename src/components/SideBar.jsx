import { Link } from "react-router-dom";
function SideBar() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item d-flex">
          <Link to={"/"} className="nav-link text-white" aria-current="page">
            <i className="bi bi-twitter-x"></i>
          </Link>
        </li>
        <li className="nav-item d-flex">
          <Link to={"/"} className="nav-link text-white">
            <i className="bi bi-house-heart"></i> Home
          </Link>
        </li>
        <li className="nav-item d-flex">
          <Link to={"/:username"} className="nav-link text-white">
            <i className="bi bi-person"></i> Profile
          </Link>
        </li>
        <li className="nav-item d-flex">
          <Link to={"/login"} className="nav-link text-white">
            <i className="bi bi-person"></i> Sign in
          </Link>
        </li>
        <li className="nav-item d-flex">
          <Link to={"/registro"} className="nav-link text-white">
            <i className="bi bi-person"></i> Sign Up
          </Link>
        </li>
      </ul>

      <div className="d-flex container flex-column justify-content-between ms-0 sidebarButtons">
        <button className="btn btn-primary rounded-pill mt-2">Tweet</button>
        <button className="btn btn-danger rounded-pill">Logout</button>
      </div>
    </>
  );
}

export default SideBar;
