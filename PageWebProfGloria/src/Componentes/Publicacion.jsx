import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Publicacion = () => {
  return (
<div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto">
<br />
<br />
    <h2 className='Acces'>Publicaciones</h2>
       {/* <p className='lead1'>Participaciones en distintivos eventos academicos internos y externos junto con aliados a la UNACAR Universidad Autonoma del Carmen
          Se prepara en la distinción y colaboracion con prestigiosas universidades que conforman el coloquio de la educación en las distintivas areas
          y carreras que contienen la unión universitaria en la generación universitaria  por la grandeza de México
        </p>*/}
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
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={3}
      aria-label="Slide 4"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={4}
      aria-label="Slide 5"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={5}
      aria-label="Slide 6"
    />

  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="/img/Events/Glo101.png" className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/img/Events/Glo11.png" className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/img/Events/Glo21.png" className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="/img/Events/Glo71.png" className="d-block w-100" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src="/img/Events/Glo91.png" className="d-block w-100" alt="Slide 4" />
    </div>
    <div className="carousel-item">
      <img src="/img/Events/Radio1.png" className="d-block w-100" alt="Slide 5" />
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