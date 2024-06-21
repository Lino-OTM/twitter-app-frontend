import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "../redux/axiosConfig";
import { setToken, setUser } from "../redux/authSlice";

export const Login = () => {
  // const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/tokens", {
        email,
        password,
      });

      if (response.data.token) {
        dispatch(setToken({token: response.data.token,  ...response.data.user})); // Almacenar el token en la store
       
        navigate("/");
      } else {
        console.error("Login failed:", response.data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <main className="main-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-form-wrapper container-fluid d-flex overflow-hidden">
        <aside className="login-form-wrapper__aside-section flex-column justify-content-between container-fluid">
          <svg
            width="56"
            height="51"
            viewBox="0 0 56 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.1033 0H52.6903L33.9302 21.6031L56 51H38.7195L25.1848 33.1709L9.69805 51H1.10583L21.1716 27.8931L0 0H17.7192L29.9534 16.2965L44.1033 0ZM41.0895 45.8215H45.8477L15.1337 4.90646H10.0277L41.0895 45.8215Z"
              fill="white"
            />
          </svg>
          <p className="login-form-wrapper__aside-text text-white">
            Hey! Nice to see you again.
          </p>
        </aside>

        <Form
          method="POST"
          className="login-form-wrapper__login-form bg-white d-flex flex-column container-fluid"
          action="/"
          onSubmit={handleLogin}
        >
          <Form.Group className="login-form-wrapper__login-form-top-section">
            <Form.Text className="login-form-wrapper__login-form-title">
              Login
            </Form.Text>
            <Form.Text className="login-form-wrapper__login-form-subtitle">
              Ready to start using X?
            </Form.Text>
          </Form.Group>

          <Form.Group className="login-form-wrapper__login-form-inputs-wrapper">
            <Form.Control
              className="form-control"
              type="text"
              name="username"
              placeholder="Username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="login-form-wrapper__login-form-bottom-section">
            <Button
              className="login-form-wrapper__form-submit-btn btn text-white w-100"
              type="submit"
            >
              Login
            </Button>
            <Form.Text className="login-form-wrapper__log-in text-center">
              Don't have an account?{" "}
              <Link to={"/registro"} className="text-decoration-none">
                Sign up
              </Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </main>
  );
};

export default Login;
