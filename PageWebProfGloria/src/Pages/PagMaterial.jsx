import React from 'react'
import { Header } from '../Header'

function MaterialExterno() {
  return (
  
  <div>
    <br/>
    <br/>
        <div className="row">
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Publicaciones</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Heading</h2>
    <p>
    Taller Estrategias de enseñanza para el 
    personal docente del Centro de Estudios Superiores, 
    Isla del Carmen, (CESIC), abril-mayo 2016.
    </p>
    <p>
      <navLink  className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal"></h2>
    <p>
    	Curso-Taller Empleo de estrategias Afectivas, cognitivas y ambientales para el desarrollo de 
      las Tutorías Grupales (2016) Dirigido a docentes y estudiantes tutores: Universidad Autónoma Benito 
      Juárez de Oaxaca. (6 y 7 de septiembre).
    </p>
    <p>
      <navLink className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Heading</h2>
    <p>
      And lastly this, the third column of representative placeholder content.
    </p>
    <p>
      <navLink className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
</div>

    </div>
    
    
  )
}

export default MaterialExterno