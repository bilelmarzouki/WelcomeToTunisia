import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as MuiLink} from "@mui/material"
import { Link} from 'react-router-dom'
function CityCard({id, name, description, coverImageUrl, region}) {
  return (
     <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={coverImageUrl}
        title="Tunis"
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {region}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiLink component={Link} to={`/cities/${id}`}> <Button size="small">Learn More</Button> </MuiLink>
      </CardActions>
    </Card>
  )
}

export default CityCard