import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SideBar() {
  const auth = useSelector((state) => state.auth.id);
  return (
    <>
      <ul className="nav flex-column position-fixed">
        <li className="nav-item d-flex">
          <Link to={"/"} className="nav-link text-white" aria-current="page">
            <i className="bi bi-twitter-x p-0"></i>
          </Link>
        </li>

        <li className="sidebar nav-item d-flex">
          <Link to={"/"} className="nav-link text-white">
            <i className="bi bi-house-heart"></i> Home
          </Link>
        </li>

        <li className="nav-item d-flex">
          <Link to={`/${auth.username}`} className="nav-link text-white">
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

        <div className="d-flex container flex-column justify-content-between ms-0 sidebarButtons">
          <button className="btn btn-primary rounded-pill mt-2">Tweet</button>
          <button className="btn btn-danger rounded-pill">Logout</button>
        </div>
      </ul>
    </>
  );
}

export default SideBar;
