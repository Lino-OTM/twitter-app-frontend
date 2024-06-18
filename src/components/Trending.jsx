function Trending() {
  return (
    <div className="card bg-transparent text-white">
      <div className="card-body bg-dark w-75">
        <h5 className="card-title">What's happening</h5>
        <h6 className="card-subtitle mt-4 mb-2 text-secondary">
          Programming · <span>Trending</span>
        </h6>
        <p className="card-text mb-0 fw-bold">#MongoVsSequelize</p>
        <span className="text-secondary">97.5K Tweets</span>
        <h6 className="mt-3 card-subtitle mb-2 text-secondary">
          Entertainment · <span>Trending</span>
        </h6>
        <p className="card-text fw-bold mb-0">#StarWars</p>
        <span className="text-secondary">97.5K Tweets</span>
        <h6 className=" mt-3 card-subtitle text-secondary mb-2">
          News · <span>Trending</span>
        </h6>
        <p className="card-text fw-bold mb-0">#LifeInMars</p>
        <span className="text-secondary">97.5K Tweets</span>
      </div>
    </div>
  );
}

export default Trending;
