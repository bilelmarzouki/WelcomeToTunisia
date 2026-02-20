
import { Link } from 'react-router-dom'
import { Link as MuiLink, Typography } from "@mui/material";
function Navbar() {
  return (
   <nav>
     <h1>Tunisia Tourism Map</h1>
     <Typography variant="h6">
      <MuiLink component={Link} to={"/"} style={{color:"white"}}>Home</MuiLink> |
      <MuiLink component={Link} to={"/cities"} style={{color:"white"}}> Cities </MuiLink>
    </Typography>
   </nav>
  )
}

export default Navbar