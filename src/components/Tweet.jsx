import React from "react";

function Tweet() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle"
            style={{ width: 50, height: 50 }}
            src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
          />
        </div>
        <div className="col-10">
          <h6 className="d-inline">pepe</h6>
          <span className="ms-2 fw-light">@username</span>
          <span className="ms-2 fw-light">6h</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos quaerat reiciendis sapiente distinctio aut similique
            maiores earum illum doloremque! Odit dolorum illo voluptatum
            molestias vel. Quam illum maiores reiciendis inventore.
          </p>
          <p>
            <i className="bi bi-suit-heart"></i> cantidad de likes
          </p>
        </div>
      </div>
    </>
  );
}

export default Tweet;


{/* <article>
    <header>
        <img src="" alt="" />
        <div>
            <strong></strong>
            <span> </span>
        </div>
    </header><button>Seguir</button>
    <aside>

    </aside>
</article> */}