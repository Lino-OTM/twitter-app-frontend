import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTweet, storeTweets } from "../redux/tweetSlice";
import axios from "axios";
// Components
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";

function Home() {
  const allTweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.auth);

  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/tweets`
        );
        dispatch(storeTweets(response.data));
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    getTweets();
  }, []);

  const handleAddTweet = async (e) => {
    e.preventDefault();
    setTweet("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/tweets`,
        {
          text: tweet,
        }
      );

      if (response.status === 200) {
        dispatch(createTweet({ ...response.data }));
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
                <img className="rounded-circle" src={user.image} />
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
              {allTweets.map((tweet) => (
                <Tweet key={tweet._id} tweet={tweet} />
              ))}
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
