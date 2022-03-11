import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center py-5">
            <img src="assets/about-image.png" alt="About us" width="85%" />
            </div>
          <div className="col-md-6">
            <h1 className="h1 fw-bold">About Us</h1>
            <p className="lead">
              lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum
              dolor sit amet, consectetur adipisci elit. Lorem convert inter
              dolor. Lorem ipsum dolor sit amet, consect  lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum
              dolor sit amet, consectetur adipisci elit. Lorem convert inter
              dolor. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum
              dolor sit amet, consectetur adipisci elit. Lorem convert inter
              dolor. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum
              dolor sit amet, consectetur adipisci elit. Lorem convert inter
              dolor. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum
              dolor sit amet, consectetur adipisci elit. Lorem convert inter
              dolor. Lorem ipsum dolor sit amet, consect.
            </p>
            <NavLink to='/contact' className='btn btn-dark py-2'>Cantact Us</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
