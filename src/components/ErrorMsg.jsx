import { Link } from "react-router-dom";

function ErrorMsg() {
  return (
    <div className="container d-flex justify-content-center align-items-center error-container">
      <div>
        <p className="text-info text-center">
          Error 404 - Lo sentimos no se ha encontrado la pagina
        </p>
        <img
          className="img-fluid d-block mb-2"
          style={{ width: 800, height: 800 }}
          src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147736514.jpg?t=st=1719163446~exp=1719167046~hmac=2a0868e66aa8d4a81302190cb43063a409f6966748720583b3a2997ebf7b84d1&w=826"
        />
        <Link to={"/"} className="btn btn-primary">
          Volver a la home
        </Link>
      </div>
    </div>
  );
}

export default ErrorMsg;
