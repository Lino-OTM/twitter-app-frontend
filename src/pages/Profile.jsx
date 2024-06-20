import React from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.auth.id);
  

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
              src={
                auth.image
                  ? auth.image
                  : "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
              }
            />
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="">{auth.firstname}</h5>

            <div>
              <span>Following 10</span> <span>Followers 20</span>
            </div>
          </div>
          <p>@{auth.username}</p>
          <p>
            {auth.description
              ? auth.description
              : "No tengo una biografia pa ksyo"}
          </p>
          <div className="mb-4">
            <span className="border-bottom border-info border-3">Tweets</span>
          </div>
        </div>
        <div className="col-3">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Profile;
