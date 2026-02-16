import React from 'react'
import {Link as MuiLink} from "@mui/material"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <MuiLink component={Link} to={"/"}>Home</MuiLink>
      <MuiLink component={Link} to={"/cities"}> Cities </MuiLink>
    </div>
  )
}

export default Navbar