import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
function PlaceCard({
  id,
  cityId,
  name,
  category,
  shortDescription,
  longDescription,
  address,
  lat,
  lng,
  bestTimeToVisit,
  entryFeeTND,
  coverImageUrl,
}) {
  const [clicked, setClicked]=useState(false)
  const navigate=useNavigate()
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia sx={{ height: 140 }} image={coverImageUrl} title="Tunis" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Short Description:</span>
          {shortDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Long Description:</span>
          {longDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Address:</span>
          {address}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Category:</span>
          This place is considered a {category} place.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Visit time:</span>
          Best time to visit is {bestTimeToVisit}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span style={{ color: '#7e3131', fontWeight: 700, fontSize: '1rem', marginRight: 8 }}>Price:</span>
          {entryFeeTND} TND
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', gap: 1 }}>
        <Button
          component={Link}
          to={`/places/${id}`}
          variant="contained"
          size="small"
          sx={{
            px: 1,
            fontSize: "1rem",
          }}
        >
          More Info
        </Button>
        <Button
          component={Link}
          to={`/places/edit/${id}`}
          variant="contained"
          size="small"
          sx={{
            px: 1,
            fontSize: "1rem",
          }}
        >
          Edit Info
        </Button>
        <Button 
          onClick={() => {
            console.log('🚨 PLACE CARD DEBUG:', { lat, lng, id, name });
            if (!lat || !lng) {
              console.error('❌ NO LAT/LNG!', { lat, lng });
              return;
            }
            navigate(`/places/${id}?lat=${lat}&lng=${lng}&address=${encodeURIComponent(address)}`);
          }}
        >
          {<LocationOnIcon sx={{ fontSize: 40 }} />}
       </Button>
      </CardActions>
    </Card>
  );
}

export default PlaceCard;
