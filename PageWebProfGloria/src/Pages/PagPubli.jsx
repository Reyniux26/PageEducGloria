import React from 'react'
import Elementos from '../Componentes/Elementos'
import 'bootstrap/dist/css/bootstrap.min.css';

const Publicaciones = () => {
  return (
<div>
  <h1>Artículos</h1>
  <br/>
<div className='CardGeneral'>
  <div className="card-container">
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">La inclusión de un estudiante con trastorno del espectro autista en educación superior</h5>
        <p className="card-text">
          Autores: Silvia Estela Yon Guzmán, Sara Esther Castillo Ortega, Gloria del Jesús Hernández Marín...
        </p>
        <a target='_black' href="https://dialnet.unirioja.es/servlet/articulo?codigo=6312424" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Repeat the card structure for three more cards -->
    <!-- Card 2 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Habilidades digitales en la educación secundaria y su capacidad tecnológica instalada</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target="_blank" href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:u5HHmVD_uO8C" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 3 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Adquisición de las competencias específicas, mediante una docencia centrada en comunidades profesionales de aprendizaje</h5>
        <p className="card-text">
          Some quick example text to 
        </p>
        <a target="_blank" href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:zYLM7Y9cAGgC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

        {/*<!-- Card 3 -->*/}
        <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Tutoría en la educación superior: análisis de la percepción de profesionales y estudiantes en una universidad pública</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:W7OEmFMy1HYC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 3 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Procrastinación Académica en Estudiantes Universitarios de una Institución Pública</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:aqlVkmm33-oC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

        {/*<!-- Card 3 -->*/}
        <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Resiliencia de tutorados. Un caso de la Facultad de Ciencias Educativas de la Universidad Autónoma del Carmen, México</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:8k81kl-MbHgC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 3 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Proyecto de intervención cognitiva, afectiva y social, para la mejora de los procesos formativos del licenciado en educación</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://revista.redipe.org/index.php/1/article/view/688" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

        {/*<!-- Card 3 -->*/}
        <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">El currículo universitario por el enfoque de competencia, su pertinencia y nivel de exigencia en el contexto nacional y local.</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:qjMakFHDy7sC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 3 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Análisis de los resultados en los exámenes de egreso: referente para evaluar el perfil de egreso de la licenciatura en educación</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:ULOm3_A8WrAC" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

        {/*<!-- Card 3 -->*/}
        <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Construcción de la identidad en el profesional de la educación, a través del curso de filosofía</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="https://scholar.google.com.mx/citations?view_op=view_citation&hl=en&user=GljNotgAAAAJ&citation_for_view=GljNotgAAAAJ:d1gkVwhDpl0C" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

        {/*<!-- Card 3 -->*/}
        <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Didactobiografía para fortalecer la formación del liderazgo pedagógico en las comunidades escolares</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a target='_blank' href="#" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title 4</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
  </div>
</div>



  <br/>
  <h2 className="pb-2 border-bottom">Publicación de Libro</h2>
  <br/>
  <h4>Libro (2014). La Praxis Educativa: Horizontes para una Didáctica por Competencias. Universidad Autónoma del Carmen.</h4>
</div>

  )
}

export default Publicaciones