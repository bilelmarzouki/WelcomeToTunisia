import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
function EditPlacePage() {
  const [id, setId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [bestTimeToVisit, setBestTimeToVisit] = useState("");
  const [entryFeeTND, setEntryFeeTND] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const navigate = useNavigate();
  const addPlace = () => {
    try {
      const body={

      }
      axios.post(`http://localhost:5005/places`,body);
      setEntryFeeTND(response.data.entryFeeTND);
      setLongDescription(response.data.longDescription);
      setBestTimeToVisit(response.data.bestTimeToVisit);
      setPlace(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
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
      coverImageUrl
    };
    try {
      axios.post(`http://localhost:5005/places/`, body);
      navigate(`/cities/${cityId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            ✏️ create a new place
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
              fullWidth
              label="place id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="City id"
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
            <TextField
              fullWidth
              label="name of the place"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="short description"
              multiline
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="Description longue"
              multiline
              rows={4}
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="lngitide"
              value={lng}
              onChange={(e) => setLat(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
          
            <TextField
              fullWidth
              label="Best period to visit"
              value={bestTimeToVisit}
              onChange={(e) => setBestTimeToVisit(e.target.value)}
              sx={{ mb: 4 }}
              required
            />
            <TextField
              fullWidth
              label="fee of the entry"
              value={entryFeeTND}
              onChange={(e) => setEntryFeeTND(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
             <TextField
              fullWidth
              label="fee of the entry"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                fontSize: "1.1rem",
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              💾 submit new Place
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default EditPlacePage;
