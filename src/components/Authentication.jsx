import axios from "axios";
import { useState } from "react";

function Authentication() {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjcxYTVmODYzN2UzMzA2YWY3Y2I5MmYiLCJpYXQiOjE3MTg3MjU0ODF9.q7Gvva6w4D-C5d0BVrdaGL9fJBl9OEES4-_il_jMGJY";
  const apiUrl = "http://localhost:3000";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const response = await authAxios.get("/tweets");

    setTweets(response.data);
    console.log(response.data);
  };

  return (
    <>
      <button onClick={() => getTweets()} className="btn btn-primary">
        Get Tweets
      </button>
      {tweets.map((tweet) => (
        <li key={tweet._id}>{tweet.text}</li>
      ))}
    </>
  );
}

export default Authentication;