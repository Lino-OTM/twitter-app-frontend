import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Trending from "../components/Trending";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { storeTweets } from "../redux/tweetSlice";
import Tweet from "../components/Tweet";

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const allTweets = useSelector((state) => state.tweets.tweets);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserTweets = async () => {
      const response = await axios({
        url: `http://localhost:3000/users/${params.username}`,
        method: "get",
      });
      dispatch(storeTweets(response.data.tweets));
      setUser(response.data);
    };
    getUserTweets();
  }, []);

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
                user.image
                  ? user.image
                  : "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
              }
            />
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="">{user.firstname}</h5>

            <div>
              <span>Following 10</span> <span>Followers 20</span>
            </div>
          </div>
          <p>@{user.username}</p>
          <p>
            {user.description ? user.description : "Agrega una biografia..."}
          </p>
          <div className="mb-4">
            <span className="border-bottom border-info border-3">Tweets</span>
          </div>
          {allTweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </div>
        <div className="col-3">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Profile;
