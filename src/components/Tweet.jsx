import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storeTweets, toggleTweetLike } from "../redux/tweetSlice";

function Tweet({ tweet }) {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLike = () => {
    const response = axios({
      url: `http://localhost:3000/tweets/${tweet._id}/likes`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(toggleTweetLike({ userId: user._id, tweetId: tweet._id }));
  };

  const handleDelete = () => {
    const response = axios({
      url: `http://localhost:3000/tweets/${tweet._id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(removeTweet(tweet._id));
  };

  return (
    <div className="row">
      <div className="d-flex mt-4">
        <div className="col-1">
          <img
            src={tweet.user.image}
            className="rounded-circle"
            alt="imagen de @user"
          />
        </div>
        <div className="col-11">
          <div>
            <h6 className="d-inline fw-bold">
              {tweet.user.firstname} {tweet.user.lastname}
            </h6>
            <span className="ms-2 text-secondary fw-light">
              @{tweet.user.username}
            </span>
            <span className="ms-2 text-secondary fw-light">· 6h</span>
            <p>{tweet.text}</p>
            <p>
              <i
                className={
                  tweet.likes.includes(user._id)
                    ? "bi bi-suit-heart-fill text-danger"
                    : "bi bi-suit-heart-fill text-secondary"
                }
                onClick={handleLike}
              ></i>
              cantidad de likes
              <i className="bi bi-trash" onClick={handleDelete}>
                Borrar
              </i>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
