function Trending() {
  return (
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
  );
}

export default Trending;
