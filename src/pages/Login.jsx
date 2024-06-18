import { Link } from "react-router-dom"
import "./Login.css"

export const Login = () => {
  return (
    <main className="main-container d-flex justify-content-center align-items-center vh-100">

    <div className="login-form-wrapper container-fluid d-flex overflow-hidden">
      <aside className="login-form-wrapper__aside-section flex-column justify-content-between container-fluid">
      <svg width="56" height="51" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1033 0H52.6903L33.9302 21.6031L56 51H38.7195L25.1848 33.1709L9.69805 51H1.10583L21.1716 27.8931L0 0H17.7192L29.9534 16.2965L44.1033 0ZM41.0895 45.8215H45.8477L15.1337 4.90646H10.0277L41.0895 45.8215Z" fill="white"/>
      </svg>
      <p className="login-form-wrapper__aside-text text-white">Hey! Nice to see you again.</p>
      </aside>

      <form className="login-form-wrapper__login-form bg-white d-flex flex-column container-fluid" action="">
        <div className="login-form-wrapper__login-form-top-section">
        <h1 className="login-form-wrapper__login-form-title">Login</h1>
        <p className="login-form-wrapper__login-form-subtitle">Ready to start using X?</p>
        </div>

      <div className="login-form-wrapper__login-form-inputs-wrapper">
        <input className="form-control" required type="text" placeholder="Username or email" />

        <input className="form-control" required type="password" placeholder="Password" />
        </div>

        <div className="login-form-wrapper__login-form-bottom-section">
        <button className="login-form-wrapper__form-submit-btn btn text-white w-100"type="submit">Login</button>
        <p className="login-form-wrapper__log-in text-center">Don't have an account? <Link className="text-decoration-none" to="/registro">Sign up</Link></p>
        </div>

      </form>
    </div>
    </main>
  )
}

export default Login