import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
<div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <NavLink
      to="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4">Dra. Gloria del Jesús Hernández Marín  </span>
    </NavLink>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" aria-current="page">
          Inicio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Trayectoria" className="nav-link">
          Trayectoria
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Publicaciones" className="nav-link">
          Publicaciones
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/MaterialExterno" className="nav-link">
          Material Externo
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Contacto" className="nav-link">
          Contacto
        </NavLink>
      </li>
    </ul>
  </header>
  
</div>
  )
}