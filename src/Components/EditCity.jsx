
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getCities } from '../Redux/action'
import ShowCities from './ShowCities'
import { useNavigate, useParams } from 'react-router-dom'
const EditCity = () => {
    //const {id} = useParams()
   const navigate = useNavigate()
    const dispatch = useDispatch()
      const [formData,setFormData] = useState({
           country:"",
        city:"",
        population:"",
         })

const handleChange=(e)=>{
    let {className,value} = e.target

    setFormData({
        ...formData,
        [className]:value
    })
}
let id =localStorage.getItem("id")
const handleSubmit = (e)=>{
e.preventDefault()

axios.patch(`https://counrtywisepopulation.herokuapp.com/add-city/${id}`, formData)
  .then(function (response) {
    console.log("ok",response);
   dispatch(getCities(response.data));
navigate("/")
  })
  .catch(function (error) {
    console.log(error);
  });
}
const {country,population, city} = formData
  return (
    <div>

<form onSubmit={handleSubmit}>
  <input onChange={handleChange} value={country} className="country" type="text"/>
  <input onChange={handleChange} value={city} className="city" type="text" />
  <input onChange={handleChange} value={population} className="population" type="text" />

<input type="submit" value="Add"  />

        </form>

    </div>
  )
}

export default EditCity