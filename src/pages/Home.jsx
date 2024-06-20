import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";
import { useSelector, useDispatch } from "react-redux";
import { createTweet } from "../redux/tweetSlice";
import axios from "axios";

function Home() {
  const tweets = useSelector((state) => state.tweets);
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  const handleAddTweet = async (e) => {
    e.preventDefault();
    dispatch(createTweet(tweet));
    setTweet("");

    try {
      const response = await axios.post("http://localhost:3000/tweets", {
        text: tweet,
      });

      if (response.status === 201) {
        dispatch(createTweet(response.data)); // Assuming response.data contains the new tweet
        setTweet("");
        console.log("Tweet creado");
      } else {
        console.log("No se pudo registrar el tweet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-7 text-white border">
            <h5>Home</h5>
            <div className="row">
              <div className="col-1">
                {" "}
                <img
                  className="rounded-circle"
                  src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
                />
              </div>
              <div className="col-11">
                {" "}
                <textarea
                  placeholder="What's happening?"
                  className="form-control d-flex text-white border-0 bg-transparent"
                  aria-label="With textarea"
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  autoFocus
                ></textarea>
                <div className="d-flex">
                  <button
                    className="btn btn-primary rounded-pill ms-auto mb-3 mt-3"
                    onClick={handleAddTweet}
                    type="submit"
                  >
                    Tweet
                  </button>
                </div>
              </div>
              <hr />
              <Tweet />
              <hr />
            </div>
          </div>
          <div className="col-3">
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
