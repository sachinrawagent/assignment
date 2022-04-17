import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getCities } from '../Redux/action'
import ShowCities from './ShowCities'
const AddCity = () => {
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
useEffect(()=>{
    getData()
        },[])
        const getData=()=>{
            axios.get('https://counrtywisepopulation.herokuapp.com/add-city')
            .then(function (response) {
              // handle success
              console.log(response);
             // setShow(response.data);
    dispatch(getCities(response.data))
    
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
    
        }

const handleSubmit = (e)=>{
e.preventDefault()

axios.post('https://counrtywisepopulation.herokuapp.com/add-city', formData)
  .then(function (response) {
    console.log("ok",response);
   dispatch(getCities(response.data));
  }).then(()=> getData())
 
}
    const {country,population, city} = formData
  return (
    <div>

        <form onSubmit={handleSubmit}>
  <input onChange={handleChange} value={country} placeholder="add-country" className="country" type="text"/>
  <input onChange={handleChange} value={city} placeholder="add-city" className="city" type="text" />
  <input onChange={handleChange} value={population} placeholder="population" className="population" type="text" />

<input className="btn btn-danger" type="submit" value="Add"  />

        </form>
        <ShowCities />
    </div>
  )
}

export default AddCity