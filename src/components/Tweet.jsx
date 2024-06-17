import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Tweet() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        url: ` http://localhost:3000/users`,
        method: "get",
      });
      setTweets(response.data);
    };
    getTweets();
  }, []);
  return (
    <div className="row">
      {tweets.map((tweet) => (
        <div className="d-flex mt-4">
          <div className="col-2">
            <img
              className="rounded-circle"
              style={{ width: 50, height: 50 }}
              src={tweet.image}
            />
          </div>
          <div className="col-10">
            <div key={tweet._id}>
              <h6 className="d-inline">
                {tweet.firstname} {tweet.lastname}
              </h6>
              <span className="ms-2 fw-light">@{tweet.username}</span>
              <span className="ms-2 fw-light">6h</span>
              <p>{tweet.tweets[0].text}</p>
              <p>
                <i className="bi bi-suit-heart"></i> cantidad de likes
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tweet;

{
  /* <article>
    <header>
        <img src="" alt="" />
        <div>
            <strong></strong>
            <span> </span>
        </div>
    </header><button>Seguir</button>
    <aside>

    </aside>
</article> */
}
