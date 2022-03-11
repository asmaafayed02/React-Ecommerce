import React from 'react'

const SignForm = () => {
  return (
    <>
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInput"
            aria-describedby="nameHelp"
            required
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck"
          />
          <label className="form-check-label" htmlFor="exampleCheck">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-dark w-100">
          Register
        </button>
      </form>
      <button className="btn btn-dark me-2 my-2 w-100">
        <i className="fa fa-google me-2"></i>Sign up with Google
      </button>
      <button className="btn btn-dark me-2 my-2 w-100">
        <i className="fa fa-facebook me-2"></i>Sign up with Facebook
      </button>
    </>
  )
}

export default SignForm