import React from "react";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-light fs-5"
        data-bs-toggle="modal"
        data-bs-target="#loginModel"
      >
        <i className="fa fa-sign-in"></i> Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModel"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <LoginForm/>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
