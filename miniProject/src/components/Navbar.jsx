
import { Link } from 'react-router-dom'
import { Link as MuiLink, Typography } from "@mui/material";
function Navbar() {
  return (
   <Typography variant="h6">
      <MuiLink component={Link} to={"/"}>Home</MuiLink>
      <MuiLink component={Link} to={"/cities"}> Cities </MuiLink>
    </Typography>
  )
}

export default Navbar