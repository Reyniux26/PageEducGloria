import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Home'
import { Home } from './Home'
import PagTrayec from './Pages/PagTrayec';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import RoutersIndex from './Routers/RoutersIndex';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header/>
      <RoutersIndex/>
    </BrowserRouter>
    </>
  )
}


export default App