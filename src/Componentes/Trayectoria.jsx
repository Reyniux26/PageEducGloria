import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Trayectoria = () => {
  return (


<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Preparación académica</h4>
          <div id="content">
            <ul className="timeline">
              <li className="event" data-date="1997 Julio">
                <h3>Licenciatura en Pedagogía</h3>
                <p>
                  <ul>Área: Docencia, investigación y administración educativa</ul>
                  <ul>Titulación: Especialidad en Métodos de Investigación. (1999).</ul>

                </p>
              </li>
              <li className="event" data-date="1999">
                <h3>Especialidad</h3>
                <p>
                <ul>Especialidad en Métodos de Investigación: 180 horas, 24 créditos.</ul>
                </p>
              </li>
              <li className="event" data-date="18 de Mayo 2007">
                <h3>Maestría</h3>
                <p>
                <ul>Maestría en Ciencias en Metodología de la Investigación</ul>
                <ul>Universidad Autónoma del Carmen </ul>
                <ul>Área:	Metodología de la Investigación</ul>
                <ul>Tesis: criterios e instrumentos de evaluación del aprendizaje que se emplean en el Programa de Educación de la DES: Educación y Humanidades (2007).</ul>
                </p>
              </li>
              <li className="event" data-date="31 Diciembre 2015">
                <h3>Doctorado</h3>
                <p>
                <ul>Doctor en Educación por la NOVA SouthesternUniverity of Miami, Florida.  </ul>
                <ul>FischelerCollege of Education& Human Services. Termino: 31/diciembre/2015). </ul>
                <ul>Concentración: Liderazgo en Educación superior y currículo </ul>
                <ul>Universidad Autónoma del Carmen </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Trayectoria