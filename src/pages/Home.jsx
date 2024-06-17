import React from "react";
import SideBar from "../components/SideBar";
import Tweet from "../components/Tweet";

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
            </div>
            <button className="btn btn-primary">Tweet</button>

            <Tweet />
            <hr />
          </div>
        </div>
        <div className="col-3">
          <div className="card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">What's happening</h5>
              <h6 className="card-subtitle mt-4 mb-2">
                Programming <span>Trending</span>
              </h6>
              <p className="card-text mb-0">#MongoVsSequelize</p>
              <span className="">97.5K Tweets</span>
              <h6 className="mt-3 card-subtitle mb-2">
                Entertainment <span>Trending</span>
              </h6>
              <p className="card-tex mb-0">#StarWars</p>
              <span>97.5K Tweets</span>
              <h6 className=" mt-3 card-subtitle mb-2">
                News <span>Trending</span>
              </h6>
              <p className="card-text mb-0">#LifeInMars</p>
              <span>97.5K Tweets</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
