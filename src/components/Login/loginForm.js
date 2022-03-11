import React from "react";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="loginHelp"
            required
          />
          <div id="loginHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-dark w-100">
          Submit
        </button>
      </form>
      <button className="btn btn-dark me-2 my-2 w-100">
        <i className="fa fa-google me-2"></i>Sign up with Google
      </button>
      <button className="btn btn-dark me-2 my-2 w-100">
        <i className="fa fa-facebook me-2"></i>Sign up with Facebook
      </button>
    </>
  );
};

export default LoginForm;
