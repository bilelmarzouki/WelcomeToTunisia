import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from '../components/Map'
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function PlaceDetailsPage() {
  const [place, setPlace] = useState(null);
  const params = useParams();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cols = isXs ? 1 : isSm ? 2 : 3;
  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/places/${params.placeId}?_embed=photos`,
      );
      console.log(response);
      setPlace(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (place === null) {
    return <h3> there is no place</h3>;
  }
 
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Map/>
      <Grid container spacing={2}>
        {place.photos.map((photo) => {
          return (
            <Grid item xs={cols} sm={isSm ? 6 : 4} md={4} key={photo.id}>
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={photo.url}
                  alt={photo.alt}
                  sx={{
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <Box p={2}>
                  <Typography variant="body2" color="text.secondary">
                    {photo.alt}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default PlaceDetailsPage;
