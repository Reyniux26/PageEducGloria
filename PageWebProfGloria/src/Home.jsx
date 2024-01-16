import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Acerca from './Componentes/Acerca';
import { Header } from './Header'
import Trayectoria from './Componentes/Trayectoria';
import Contacto from './Componentes/Contacto';
import Publicacion from './Componentes/Publicacion';

export const Home = () => {
  return (
<div>
   {// Esto sí es un comentario JSX <h2 className='HeaderNombre'>Gloria del Jesús Hernández Marín</h2>
  }
  
<Header></Header>
<Acerca></Acerca>
<div className='container-fras'>
    <hr/>
    <h2 className='Frase'>"La enseñanza que deja huella no es la que se hace de cabeza a cabeza, si no de corazón a corazón"</h2>
    <h4>Howard G. Hendricks</h4>
    <hr/>
  </div>
<Trayectoria></Trayectoria>
<Publicacion></Publicacion>
<Contacto></Contacto>
<>
 
</>


</div>
  )
}