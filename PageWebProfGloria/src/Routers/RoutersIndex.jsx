import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import PagTrayec from '../Pages/PagTrayec'
import Publicacion from '../Componentes/Publicacion'
import PagMaterial from '../Pages/PagMaterial'
import Contacto from '../Componentes/Contacto'
import ErrorPage from '../Componentes/ErrorPage'
import PagPublic from '../Pages/PagPubli'
import PagContacto from '../Pages/PagContacto'

const RoutersIndex = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Trayectoria' element={<PagTrayec/>} />
    <Route path='/contacto' element={<PagContacto />} />
    <Route path='/Publicaciones' element={<PagPublic/>} />
    <Route path='/MaterialExterno' element={<PagMaterial/>} />
    <Route path='*' element={<ErrorPage/>} />
  </Routes>
  )
}

export default RoutersIndex