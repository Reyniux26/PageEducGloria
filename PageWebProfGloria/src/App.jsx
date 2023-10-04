import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Home'
import { Home } from './Home'
import { Header } from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       
    </>
  )
}

export default App