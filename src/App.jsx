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
     <h1>Country's Citywise Population</h1>
     <Router  />
    </div>
  )
}

export default App
