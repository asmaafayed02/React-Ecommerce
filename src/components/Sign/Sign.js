import React from 'react'
import SignForm from './signForm'

const Sign = () => {
  return (
    <>
    {/* <!-- Button trigger modal --> */}
    <button
      type="button"
      className="btn btn-outline-light fs-5 ms-2"
      data-bs-toggle="modal"
      data-bs-target="#signModel"
    >
      <i className="fa fa-user-plus"></i> Register
    </button>

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="signModel"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign Up
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <SignForm/>
          </div>
       
        </div>
      </div>
    </div>
  </>
  )
}

export default Sign