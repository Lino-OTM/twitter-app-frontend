import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    image: undefined,
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login");

    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/users`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="main-container d-flex justify-content-center align-items-center vh-100">
      <div className="sign-up-form-wrapper container-fluid d-flex overflow-hidden">
        <aside className="sign-up-form-wrapper__aside-section flex-column justify-content-between container-fluid">
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
          <p className="sign-up-form-wrapper__aside-text text-white">
            Hi! Welcome to X Clone.
          </p>
        </aside>

        <form
          className="sign-up-form-wrapper__register-form bg-white d-flex flex-column container-fluid"
          action="/users"
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="sign-up-form-wrapper__register-form-top-section">
            <h1 className="sign-up-form-wrapper__register-form-title">
              Sign up
            </h1>
            <p className="sign-up-form-wrapper__register-form-subtitle">
              Create an account and start using X
            </p>
          </div>

          <div className="sign-up-form-wrapper__register-form-inputs-wrapper">
            <input
              className="form-control"
              type="text"
              name="firstname"
              placeholder="First name"
              required
              value={formData.firstname}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="text"
              name="lastname"
              placeholder="Last name"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="form-control mb-0"
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="formFile" className="form-label"></label>
            <input
              className="form-control"
              onChange={handleFileChange}
              type="file"
              id="formFile"
              name="image"
            />

            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="sign-up-form-wrapper__register-form-bottom-section">
            <button
              className="sign-up-form-wrapper__form-submit-btn text-white w-100"
              type="submit"
            >
              Sign up
            </button>
            <p className="sign-up-form-wrapper__log-in text-center">
              Already have an account?{" "}
              <Link className="text-decoration-none" to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
