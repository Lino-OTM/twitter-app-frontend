import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import Trending from '../components/Trending';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { storeTweets } from '../redux/tweetSlice';
import Tweet from '../components/Tweet';
import ErrorMsg from '../components/ErrorMsg';

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const allTweets = useSelector((state) => state.tweets);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserTweets = async () => {
      try {
        if (user._id || params.username) {
          const response = await axios({
            url: `${import.meta.env.VITE_API_URL}/users/${params.username}`,
            method: 'get',
          });
          dispatch(storeTweets(response.data.tweets));
          setUser(response.data);
          
        }
        } catch (error) {
          console.error('Error:', error);
        }
    };
    getUserTweets();
  }, []);

  return (
    <>
      {user._id ? (
        <div className="container">
          <div className="row">
            <div className="col-3">
              <SideBar />
            </div>
            <div className="col-6 text-white">
              <div className="mb-5" id="profile-background-image">
                <img
                  id="profile-image"
                  className="rounded-circle img-profile"
                  style={{ width: 90, height: 90 }}
                  src={
                    user.image
                      ? user.image
                      : 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg'
                  }
                />
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="fw-bold mt-3">
                  {user.firstname} {user.lastname}
                </h5>
                <div className="mt-3">
                  <span className="fw-bold">
                    10{' '}
                    <span className="fw-light text-secondary">Following</span>
                  </span>
                  <span className="fw-bold ms-3">20</span>
                  <span className="text-secondary fw-light"> Followers</span>
                </div>
              </div>
              <p className="text-secondary text-lowercase">@{user.username}</p>
              <p className="text-capitalize">
                {user.description
                  ? user.description
                  : 'Agrega una biografia...'}
              </p>
              <div className="mb-4">
                <span className="border-bottom border-info border-3">
                  Tweets
                </span>
              </div>
              {allTweets.map((tweet) => (
                <Tweet key={tweet._id} tweet={tweet} />
              ))}
            </div>
            <div className="col-3">
              <Trending />
            </div>
          </div>
        </div>
      ) : (
        <ErrorMsg />
      )}
    </>
  );
};

export default Profile;
