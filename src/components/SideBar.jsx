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
      <ul className="nav flex-column UlResponsive mb-3">
        <li className="nav-item d-flex mb-2">
          <Link to={"/"} className="nav-link text-white" aria-current="page">
            <i className="bi bi-twitter-x p-0"></i>
          </Link>
        </li>
        <li className="sidebar nav-item d-flex mb-2">
          <Link to={"/"} className="nav-link text-white">
            <i className="bi bi-house-heart"></i>{" "}
            <span className="navbarResponsive"> Home</span>
          </Link>
        </li>
        <li className="nav-item d-flex mb-2">
          <Link to={`/${auth.username}`} className="nav-link text-white">
            <i className="bi bi-person"></i>{" "}
            <span className="navbarResponsive"> Profile</span>
          </Link>
        </li>
      </ul>
      <div className="d-flex container w-100 flex-column justify-content-between ms-0 sidebarButtons UlResponsive">
        <button className="btn btn-primary rounded-pill mt-2 buttonPill py-3">
          Tweet
        </button>
        <svg
          className="buttonRounded"
          width="36"
          height="34"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
            fill="#1D9BF0"
          />
          <path
            d="M22.3218 20.0182H18.5684V16.0462C18.5684 15.5647 18.2165 15.0833 17.6301 15.0833C17.0436 15.0833 16.809 15.5647 16.809 16.0462V20.0182H12.9383C12.4692 20.0182 12 20.3793 12 20.9811C12 21.5829 12.3519 21.944 12.9383 21.944H16.809V25.916C16.809 26.3975 17.1609 26.879 17.7474 26.879C18.3338 26.879 18.6857 26.5179 18.6857 25.916V21.8237H22.5564C23.0256 21.8237 23.4947 21.4626 23.4947 20.8608C23.4947 20.2589 22.9083 20.0182 22.3218 20.0182ZM39.9158 14.1204V14H39.7985C39.6812 14 29.0075 15.4444 22.9083 28.0826C18.4511 37.2303 18.6857 39.9986 19.0376 39.9986C19.3895 40.119 23.0256 32.175 26.8963 28.9251C32.9955 27.6011 34.6376 24.592 34.6376 24.592C34.6376 24.592 32.8782 24.8328 32.1745 24.8328C31.2361 24.8328 30.5324 24.592 30.1805 24.4717C31.7053 23.0273 32.9955 22.6662 34.2857 22.4255C35.3414 22.1848 36.397 21.944 37.8045 20.9811C40.385 19.0553 40.0331 14.3611 39.9158 14.1204Z"
            fill="white"
          />
        </svg>
        <button
          onClick={handleLogout}
          className="btn btn-danger rounded-pill py-3 buttonPill"
        >
          Logout
        </button>
        <svg
          className="buttonRounded"
          width="36"
          height="34"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
            fill="#DC3545"
          />
          <path
            d="M21.125 18.2857C22.0238 18.2857 22.75 17.5516 22.75 16.6429C22.75 15.7342 22.0238 15 21.125 15H17.875C15.1836 15 13 17.2076 13 19.9286V33.0714C13 35.7924 15.1836 38 17.875 38H21.125C22.0238 38 22.75 37.2659 22.75 36.3571C22.75 35.4484 22.0238 34.7143 21.125 34.7143H17.875C16.9762 34.7143 16.25 33.9801 16.25 33.0714V19.9286C16.25 19.0199 16.9762 18.2857 17.875 18.2857H21.125ZM38.6191 27.3933C38.8629 27.1623 39 26.8388 39 26.5C39 26.1612 38.8629 25.8377 38.6191 25.6067L31.3066 18.6246C30.9512 18.2857 30.4332 18.1933 29.9863 18.3884C29.5395 18.5835 29.25 19.0301 29.25 19.5179V23.2143H22.75C21.8512 23.2143 21.125 23.9484 21.125 24.8571V28.1429C21.125 29.0516 21.8512 29.7857 22.75 29.7857H29.25V33.4821C29.25 33.975 29.5395 34.4165 29.9863 34.6116C30.4332 34.8067 30.9512 34.7143 31.3066 34.3754L38.6191 27.3933Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}

export default SideBar;
