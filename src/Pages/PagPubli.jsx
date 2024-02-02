import React from 'react'
import Elementos from '../Componentes/Elementos'
import 'bootstrap/dist/css/bootstrap.min.css';

const Publicaciones = () => {
  return (
<div>
  <h2 className='Acces'>Artículos</h2>
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
        Francisco Vera, Leticia Gómez, Sergio Izquierdo, Gloria Marín, Hernández-Marín
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
        Gloria del Jesús Hernández-Marín, Sara E Castillo Ortega
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
        Silvia Estela Yon Guzmán, Gloria del Jesús Hernández Marín
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
        Paula María Cárdenas Mass, Gloria del Jesús Hernández Marín, Erick Cajigal Molina
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
        Erick Cajigal, Gloria J Hernández-Marín, Silvia E Yon, Leticia Arias
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
        Gloria del Jesús Hernández Marín, Leticia Arias Gómez, Silvia Estela Yon Guzmán
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
        Gloria del Jesús Hernández Marín
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
        Gloria del Jesús Hernández-Marín, Leticia Arias Gómez, Silvia Esthela Yon Guzmán, Erick Cajigal Molina
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
        Gloria del Jesús Hernández Marín, Sara Esther Castillo Ortega, Leticia Arias Gómez
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
        Gloria del Jesús Hernández-Marín, Silvia Estela Yon Guzmán, Leticia Arias Gómez, Erick Cajigal Molina
        </p>
        <a target='_blank' href="#" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Acquisition of specific skills, through teaching focused on communities learning professionals</h5>
        <p className="card-text">
        Gloria del Jesús Hernández-Marín, Sara E Castillo Ortega
        </p>
        <a target='_blank' href="https://www.scielo.org.mx/scielo.php?pid=S2007-74672017000200155&script=sci_abstract&tlng=en" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>

    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Estrategias de aprendizaje para atender la diversidad en estudiantes universitarios</h5>
        <p className="card-text">
        Anayely Cruz Barahona, Gloria del Jesús Hernández-Marín, Leticia Arias Gómez
        </p>
        <a target='_blank' href="https://revistavarela.uclv.edu.cu/index.php/rv/article/view/139" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Alcances y limitaciones del programa de tutoría en el nivel superior</h5>
        <p className="card-text">
        Gloria del Jesús Hernández Marín, Silvia Estela Yon Guzmán, Leticia Arias Gómez
        </p>
        <a target='_blank' href="https://dialnet.unirioja.es/servlet/articulo?codigo=6145634" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Capital cultural: su relación con la trayectoria escolar en estudiantes de la UNACAR</h5>
        <p className="card-text">
        Erick Cajigal-Molina, Silvia Estela Yon-Guzmán, Gloria del Jesús Hernández-Marín, Leticia Arias-Gómez
        </p>
        <a target='_blank' href="https://www.eduscientia.com/index.php/journal/article/view/224" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Traslado de la vida laboral, del aula al hogar; docentes en tiempo de pandemia</h5>
        <p className="card-text">
        Wendy Guadalupe Palma-Herrera, Gloria del Jesús Hernández-Marín, Leticia Arias-Gómez
        </p>
        <a target='_blank' href="https://revistaredca.uaemex.mx/article/view/20743" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Asociación del rendimiento académico y el aprendizaje social de universitarios en Ciudad del Carmen, Campeche</h5>
        <p className="card-text">
        Erick Cajigal Molina, Silvia Estela Yon Guzmán, Gloria del Jesús Hernández Marín, Juan José Díaz Perera
        </p>
        <a target='_blank' href="https://dialnet.unirioja.es/servlet/articulo?codigo=9119647" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>
    {/*<!-- Card 4 -->*/}
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">Autoevaluación del Liderazgo Pedagógico de los directores de secundarias, como apoyo a la mejora educativa</h5>
        <p className="card-text">
        Gloria del Jesús Hernández-Marín, Katherine Rosario Ramírez Gómez, Mayra Alejandra Hernández Cahuich
        </p>
        <a target='_blank' href="https://rppoblacion.uaemex.mx/index.php/revistaredca/article/view/11794" className="btn btn-primary">
          Ver...
        </a>
      </div>
    </div>





  </div>
</div>



</div>

  )
}

export default Publicaciones