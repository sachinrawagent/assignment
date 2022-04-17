import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getCities } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
const ShowCities = () => {
    const navigate = useNavigate()
    const data = useSelector((store)=>store.city.city);
    console.log('data:', data)
//const [show,setShow] = useState([])
const [edit,setEdit] = useState({})
const dispatch = useDispatch()
const[text,setText] = useState("")
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
    const handleDelete=(e)=>{
      
        axios.delete(`http://localhost:8080/add-city/${e.id}`).then(()=>{
            getData()
        })

    }
    const handleEdit=(e)=>{
         
    
   localStorage.setItem("id",e.id)
navigate("/edit")
    }
    const sorting =(e)=>{
if(e.target.innerText=="popASC"){
    console.log(e.target.innerText)
    dispatch(getCities([...data.sort((a,b)=>a.population-b.population)]))
}
else if(e.target.innerText=="popDSC"){
   // console.log(e.target.innerText)
    dispatch(getCities([...data.sort((a,b)=>b.population-a.population)]))
}
else if(e.target.innerText=="CountryFilter"){
   // console.log(e.target.className)
    dispatch(getCities([...data.sort((a,b)=>
        {if( a.population>b.population){
            return -1
        }
        return 0
    }
       )]))
}
    }
  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} placeholder="filter country" type="text" />
<div className="sortButtons" onClick={sorting}>

    <button  className="popASC btn btn-danger">popASC</button>
    <button className="popDSC btn btn-danger">popDSC</button>
    <button className="CountryFilter btn btn-danger">CountryFilter</button>
</div>
        <table>
  <thead>
      <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
      </tr>
  </thead>
  <tbody>
{data.length && data.filter((e)=>e.country.includes(text)).map((e)=>{
    
   return  <tr key={e.id} >
         <td>`{e.id}`</td>
         <td>{e.country}</td>
         <td>{e.city}</td>
         <td>{e.population}</td>
         <td onClick={()=>{
             return handleEdit(e)
         }} >`Edit`</td>
         <td onClick={()=>{
          return   handleDelete(e)
         }}>`Delete`</td>
     </tr>
    
        })}
  </tbody>

        </table>
    </div>
  )
}

export default ShowCities