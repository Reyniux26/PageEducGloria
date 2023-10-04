import React from 'react'
import { NavLink } from "react-router-dom";
import { Header } from './Header'

export const Home = () => {
  return (
<p>Holaa
<nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/App.jsx" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/Trayectoria.jsx" class="nav-link link-body-emphasis px-2">Trayectoria</navLink></li>
        <li class="nav-item"><navLinkk to="/PageWebProfGloria/src/Publicaciones.jsx" class="nav-link link-body-emphasis px-2">Publicaciones</navLinkk></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/MaterialExterno.jsx" class="nav-link link-body-emphasis px-2">Materiales Externos</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/Slider.jsx" class="nav-link link-body-emphasis px-2">Contactos</navLink></li>
      </ul>
    </div>
  </nav>
</p>
  )
}