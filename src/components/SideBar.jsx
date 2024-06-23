import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/authSlice";

function SideBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
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
        <div className="d-flex container flex-column justify-content-between ms-0 sidebarButtons">
          <button className="btn btn-primary rounded-pill mt-2">Tweet</button>
          <button
            onClick={handleLogout}
            className="btn btn-danger rounded-pill"
          >
            Logout
          </button>
        </div>
      </ul>
    </>
  );
}

export default SideBar;
