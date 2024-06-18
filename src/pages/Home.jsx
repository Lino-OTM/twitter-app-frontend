import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const home = useSelector((state) => state.home);
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  const handleTweetPost = async (event) => {
    const value = event.target.value;
    setTweet(value);
  };

  return (
    <>
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
                onChange={handleTweetPost}
                autoFocus
              ></textarea>
              <div className="d-flex">
                <button
                  className="btn btn-primary rounded-pill ms-auto mb-3 mt-3"
                  onClick={() => dispatch(createTweet({ text: tweet }))}
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
    </>
  );
}

export default Home;
