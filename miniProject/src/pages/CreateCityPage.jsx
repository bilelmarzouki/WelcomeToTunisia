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
import UploadImage from "../components/UploadImage";
function EditPlacePage() {
  const [cityId, setCityId] = useState("");
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
  const params=useParams()

   useEffect(() => {
    if (params.cityId) {
      const cityIdNum = parseInt(params.cityId, 10);  // Convert string → number
      setCityId(cityIdNum); 
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      cityId,
      name,
      category,
      shortDescription,
      longDescription,
      address,
      lat,
      lng,
      bestTimeToVisit,
      entryFeeTND:parseFloat(entryFeeTND),
      coverImageUrl,
    };
    try {
      const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/places/`, body); // add to the db.json plcaes collection, we should await before navigate
      console.log("Server response:", response.data); 
      navigate(`/cities/${cityId}`);
      console.log("create sucessfully")
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
              label="City id"
              value={cityId}
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
              type="number"
              onChange={(e) => {
                  setLat(e.target.value);
              }}
              sx={{ mb: 3 }}
              required
            />
            <TextField
              fullWidth
              label="longitude"
              value={lng}
              type="number"
              onChange={(e) => {
                  setLng(e.target.value);
              }}
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
              type="number"
              onChange={(e) => {
                  setEntryFeeTND(e.target.value);

              }}
              sx={{ mb: 3 }}
              required
            />
            <Box sx={{ mb: 3 }}>
              {!coverImageUrl && <UploadImage setCoverImageUrl={(url)=>{setCoverImageUrl(url)}}/>}
            
              {coverImageUrl && (
                <TextField
                  fullWidth
                  label="Auto-filled-Image-Url"
                  value={coverImageUrl}
                  sx={{ mt: 2 }}
                 />
              )}
            </Box>
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
