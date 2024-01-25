import React from 'react'
import Elementos from '../Componentes/Elementos'
import 'bootstrap/dist/css/bootstrap.min.css';

const Publicaciones = () => {
  return (
<div>
<div className="container px-4 py-5" id="featured-3">
  <h2 className="pb-2 border-bottom">Publicación de capítulos de libros</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#collection" />
        </svg>
      </div>
      <h5 className="fs-2 text-body-emphasis">La inclusión de un estudiante con trastorno del espectro autista en educación superior</h5>
      <p>
      Autores: Silvia Estela Yon Guzmán, Sara Esther Castillo Ortega, Gloria del Jesús Hernández Marín, Mariana Guadalupe Alcocer Castillo, 
      Katherine Rosario Ramírez Gómez
      </p>
      <a target='_blank' href="https://dialnet.unirioja.es/servlet/articulo?codigo=6312424" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#people-circle" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Adquisición de las competencias específicas, mediante una docencia centrada en comunidades profesionales de aprendizaje</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Articulo 3</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>

<br/>
<br/>
<br/>



    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Articulo 4</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>


    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Articulo 5</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Articulo 6</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link">
        Ver...
        <svg className="bi">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>






  </div>
  <br/>
  <h2 className="pb-2 border-bottom">Publicación de Libro</h2>
  <br/>
  <h4>Libro (2014). La Praxis Educativa: Horizontes para una Didáctica por Competencias. Universidad Autónoma del Carmen.</h4>
</div>
</div>
  )
}

export default Publicaciones