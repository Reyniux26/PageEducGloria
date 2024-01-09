import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import './Home'
import { Home } from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
       
    </>
  )
}

export default App