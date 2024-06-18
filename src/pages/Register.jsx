import "./Register.css"

export const Register = () => {
  return (
    <main className="main-container d-flex justify-content-center align-items-center vh-100">

    <div className="sign-up-form-wrapper container-fluid d-flex overflow-hidden">
      <aside className="sign-up-form-wrapper__aside-section flex-column justify-content-between container-fluid">
      <svg width="56" height="51" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1033 0H52.6903L33.9302 21.6031L56 51H38.7195L25.1848 33.1709L9.69805 51H1.10583L21.1716 27.8931L0 0H17.7192L29.9534 16.2965L44.1033 0ZM41.0895 45.8215H45.8477L15.1337 4.90646H10.0277L41.0895 45.8215Z" fill="white"/>
      </svg>
      <p className="sign-up-form-wrapper__aside-text text-white">Hi! Welcome to X Clone.</p>
      </aside>

      <form className="sign-up-form-wrapper__register-form bg-white d-flex flex-column container-fluid" action="">
        <div className="sign-up-form-wrapper__register-form-top-section">
        <h1 className="sign-up-form-wrapper__register-form-title">Sign up</h1>
        <p className="sign-up-form-wrapper__register-form-subtitle">Create an account and start using X</p>
        </div>

      <div className="sign-up-form-wrapper__register-form-inputs-wrapper">
        <input className="form-control" type="text" placeholder="First name" />
        <input className="form-control" type="text" placeholder="Last name" />
        <input className="form-control" type="text" placeholder="Email" />
        <input className="form-control" type="text" placeholder="Username" />

        <div className="sign-up-form-wrapper__register-form-select-file-wrapper d-flex align-items-center">
        <input type="file" id="files" className="sign-up-form-wrapper__register-form-select-file-input"/>
        <label className="sign-up-form-wrapper__register-form-select-file-label" for="files">Choose file</label>
        <p className="sign-up-form-wrapper__register-form-selected-file">No file choosen</p>
        </div>

        <input className="form-control" type="password" placeholder="Password" />
        </div>

        <div className="sign-up-form-wrapper__register-form-bottom-section">
        <button className="sign-up-form-wrapper__form-submit-btn btn text-white w-100"type="submit">Sign up</button>
        <p className="sign-up-form-wrapper__log-in text-center">Already have an account? <a className="text-decoration-none" href="#">Sign in</a></p>
        </div>

      </form>
    </div>
    </main>
  )
}

export default Register