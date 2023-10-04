import React from 'react'

export const Header = () => {
  return (
    <nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <div class="nav me-auto">
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/App.jsx" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/Trayectoria.jsx" class="nav-link link-body-emphasis px-2">Trayectoria</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/Publicaciones.jsx" class="nav-link link-body-emphasis px-2">Publicaciones</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/MaterialExterno.jsx" class="nav-link link-body-emphasis px-2">Material Externo</navLink></li>
        <li class="nav-item"><navLink to="/PageWebProfGloria/src/Cards.jsx" class="nav-link link-body-emphasis px-2">Contactos</navLink></li>
      </div>
    </div>
  </nav>
  )
}