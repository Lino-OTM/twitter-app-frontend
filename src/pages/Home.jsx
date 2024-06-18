import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";
import { useSelector, useDispatch } from "react-redux";
import { createTweet } from "../redux/HomeSlice";
import axios from "axios";

function Home() {
  const home = useSelector((state) => state.home);
  const [tweet, setTweet] = useState("");
  const [addTweet, setAddTweet] = useState([]);
  const dispatch = useDispatch();

  const handleTweetPost = async (event) => {
    event.preventDefault();
    dispatch(createTweet({ text: "pedrito" }));

    try {
      useEffect(() => {
        const addTweets = async () => {
          const response = await axios({
            url: ` http://localhost:3000/tweets`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addTweet),
          });
          setAddTweet(response.data);
        };
        addTweets();
      }, []);

      if (response.ok) {
        console.log("Usuario registrado");
      } else {
        console.log("No se pudo registrar el usuario");
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
                <form method="post" onSubmit={handleTweetPost}>
                  <textarea
                    placeholder="What's happening?"
                    className="form-control d-flex text-white border-0 bg-transparent"
                    aria-label="With textarea"
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    autoFocus
                  ></textarea>
                </form>
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
      </div>
    </>
  );
}

export default Home;
