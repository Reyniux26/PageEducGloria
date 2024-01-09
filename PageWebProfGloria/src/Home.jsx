import React from 'react'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Acerca from './Componentes/Acerca';
import { Header } from './Header'
import Trayectoria from './Componentes/Trayectoria';
import Contacto from './Componentes/Contacto';

export const Home = () => {
  return (
<div>
   {// Esto sí es un comentario JSX <h2 className='HeaderNombre'>Gloria del Jesús Hernández Marín</h2>
  }
  

<div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4">Dra. Gloria del Jesús Hernández Marín  </span>
    </a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          Inicio
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Trayectoria
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Publicaciones
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Material Externo
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Contacto
        </a>
      </li>
    </ul>
  </header>
</div>
<Acerca></Acerca>
<Trayectoria></Trayectoria>
<Contacto></Contacto>

</div>
  )
}