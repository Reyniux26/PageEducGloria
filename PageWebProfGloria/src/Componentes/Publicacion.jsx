import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Publicacion = () => {
  return (
<div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto">
<br />
<br />
    <h2>Publicaciones</h2>
        <p>The aria-current attribute indicates the element on which it is set, to a value other than false,
         represents the current item within a container or set of related elements. Only mark one element 
         in a set of elements as current with aria-current.</p>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="/img/Piz2.jpg" className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/img/Piz2.jpg" className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="/img/Piz2.jpg" className="d-block w-100" alt="Slide 3" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Publicacion