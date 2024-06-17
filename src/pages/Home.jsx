import React from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-6 text-white">
          <h1>Home</h1>
          <div className="row">
            <div className="col-2">
              {" "}
              <img
                className="rounded-circle"
                style={{ width: 50, height: 50 }}
                src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
              />
            </div>
            <div className="col-10">
              {" "}
              <textarea
                className="form-control text-white bg-transparent"
                aria-label="With textarea"
              ></textarea>
            <button className="btn btn-primary w-25">Tweet</button>
            </div>

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
