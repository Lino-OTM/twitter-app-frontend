import React from "react";

function SideBar() {
  return (
    <>
      <div className="container">
        <ul className="nav flex-column">
          <li className="nav-item d-flex">
            <a className="nav-link text-white" aria-current="page" href="#">
              <i className="bi bi-twitter-x"></i>
            </a>
          </li>
          <li className="nav-item d-flex">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-house-heart"></i> Home
            </a>
          </li>
          <li className="nav-item d-flex">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-person"></i> Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-column">
        <button className="btn btn-primary rounded-pill mt-2">Tweet</button>
        <button className="btn btn-danger justify-content-end rounded-pill mt-2">
          Logout
        </button>
      </div>
    </>
  );
}

export default SideBar;
