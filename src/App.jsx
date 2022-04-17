import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddCity from './Components/AddCity'
import ShowCities from './Components/ShowCities'
import Router from '../Router/Router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <Router  />
    </div>
  )
}

export default App
