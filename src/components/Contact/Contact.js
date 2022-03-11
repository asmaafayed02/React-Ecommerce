import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-12 text-center ">
            <h1>Have any Question?</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/contact.png"
              alt="contact us"
              width="85%"
              
            />
          </div>
          <div className="col-md-6">
            <form>
            <div className="mb-3">
                <label for="exampleFormControl" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControl"
                  placeholder="jhon smilga"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-outline-dark py-2">Send Message</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
