
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as MuiLink} from "@mui/material"
import { Link} from 'react-router-dom'
function PlaceCard({id, name, category,shortDescription, longDescription, address, lat, lng, bestTimeToVisit, entryFeeTND, coverImageUrl}) {
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
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {shortDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {longDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The address is :{address}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This place is consider as a {category} place.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Best time to visit is in the {bestTimeToVisit}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The entry fee is :{entryFeeTND} TND
        </Typography>
      </CardContent>
      <CardActions>
        <MuiLink component={Link} to={`/places/${id}`}> <Button size="small">see more about  {name} </Button> </MuiLink>
        <MuiLink component={Link} to={`/places/edit/${id}`}> <Button size="small">Edit info about {name} </Button> </MuiLink>
      </CardActions>
    </Card>
  )
}

export default PlaceCard