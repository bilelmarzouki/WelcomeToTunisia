import { useEffect, useState } from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import Stack from '@mui/material/Stack';
function CitiesListPage() {
  const [cities, setCities] =useState(null)
    useEffect(()=>{
       getDate()
    },[])
    const getDate=async()=>{
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/cities`)
        console.log(response.data)
        setCities(response.data)
    }
    if(cities===null){
        return(
            <h3>there is not cities to display</h3>
        )
    }
  return (
    
    <Stack direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md: 4 }}
       x={{ flexWrap: 'wrap' }}
       sx={{height:"100%",width:"100%", display:"flex", alignItems:"stretch"}}
    >
       {cities.map((city)=>{
         return(
              <CityCard key={city.id} {...city}/>
         )
       })}
    </Stack>
  )
}

export default CitiesListPage