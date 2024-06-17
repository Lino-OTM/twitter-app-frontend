import React from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";

const Profile = () => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-6 text-white">
          <div className="mb-4" id="profile-background-image">
            <img
              id="profile-image"
              className="rounded-circle"
              style={{ width: 50, height: 50 }}
              src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
            />
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="">Nombre</h5>

            <div>
              <span>Following</span> <span>Followers</span>
            </div>
          </div>
          <p>@username</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            veniam!
          </p>
          <div className="mb-4">
            <span className="border-bottom border-info border-3">Tweets</span>
          </div>
          <Tweet />
        </div>
        <div className="col-3">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Profile;
