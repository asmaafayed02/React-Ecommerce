import React from 'react'

const header = () => {
  return (
    <header  >
    <div className="card bg-dark text-dark border-0 text-uppercase" >
      <img
        src="assets/pexels.jpg"
        className="card-img"
        style={{height: 100+'vh'}}
        alt="Background"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
          <h5 className="card-title display-3 fw-bold">
            New seseon arrival
          </h5>
          <p className="card-text lead fs-2">check out all the trends</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default header