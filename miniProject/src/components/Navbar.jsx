
import { Link } from 'react-router-dom'
import { Link as MuiLink, Typography } from "@mui/material";
function Navbar() {
  return (
   <nav>
     <h1>Tunisia Info App</h1>
     <Typography variant="h6">
      <MuiLink component={Link} to={"/"}>Home</MuiLink> |
      <MuiLink component={Link} to={"/cities"}> Cities </MuiLink>
    </Typography>
   </nav>
  )
}

export default Navbar