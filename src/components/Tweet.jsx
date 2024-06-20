import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storeTweets } from "../redux/tweetSlice";

function Tweet() {
  const tweetList = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        url: `http://localhost:3000/users`,
        method: "get",
      });
      setTweets(response.data);
      dispatch(storeTweets(response.data));
    };
    getTweets();
  }, []);
  return (
    <div className="row">
      {tweets.map((tweet) => (
        <div key={tweet._id} className="d-flex mt-4">
          <div className="col-1">
            <img className="rounded-circle" src={tweet.image} />
          </div>
          <div className="col-11">
            <div>
              <h6 className="d-inline fw-bold">
                {tweet.firstname} {tweet.lastname}
              </h6>
              <span className="ms-2 text-secondary fw-light">
                @{tweet.username}
              </span>
              <span className="ms-2 text-secondary fw-light">· 6h</span>
              <p>{tweet.tweets[0].text}</p>
              <p>
                <i className="bi bi-suit-heart-fill text-danger"></i> cantidad
                de likes
              </p>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tweet;
