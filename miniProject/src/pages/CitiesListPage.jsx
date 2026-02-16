import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
function CitiesListPage() {
  const [cities, setCities] =useState(null)
    useEffect(()=>{
       getDate()
    },[])
    const getDate=async()=>{
        const response = await axios.get(`http://localhost:5005/cities`)
        console.log(response.data)
        setCities(response.data)
    }
    if(cities===null){
        return(
            <h3>there is not cities to display</h3>
        )
    }
  return (
    <div>
       {cities.map((city)=>{
         return(
            <div>
              <CityCard key={city.id} {...city}/>
            </div>
           
         )
       })}
    </div>
  )
}

export default CitiesListPage