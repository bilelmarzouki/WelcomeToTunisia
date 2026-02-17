import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PlaceCard from '../components/PlaceCard'
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Typography from '@mui/material/Typography';
function CityDetailsPage() {
  const [city, setCity] =useState(null)
  const params=useParams()
  useEffect(()=>{
    getCity()
  },[])
   const getCity=async()=>{
        try {
          const response = await axios.get(`http://localhost:5005/cities/${params.cityId}?_embed=places`)
          console.log(response.data)
          setCity(response.data)
        } catch (error) {
          console.log(error)
        }
    }
    if(city===null){
        return(
            <h3>there is not cities to display</h3>
        )
    }
  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <Link to="/cities/create">
        <button>Create a Place</button>
      </Link> 
       <div >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ mt: 4, mb: 4 }}
          >
            {city.name}
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ mt: 4, mb: 4 }}
          >
            {city.description}
          </Typography>
        </div>
        <Stack direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md: 4 }}
       x={{ flexWrap: 'wrap' }}
       sx={{height:"100%",width:"100%", display:"flex", alignItems:"stretch"}}
    >  
        
        {city.places.map((place)=>{
          return(
                <PlaceCard  key={place.id} {...place}/>
          )
        })}
    </Stack>
    </div>
  )
}

export default CityDetailsPage