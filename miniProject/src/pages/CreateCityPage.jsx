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
  /*const [file, setFile] = useState(""); // Keep for upload state
  const [upload, setUpload] = useState(false);*/
  const navigate = useNavigate();
  const params=useParams()

   useEffect(() => {
    if (params.cityId) {
      setCityId(params.cityId); // Fills field immediately!
    }
  }, []);
  /*const uploadImage = async () => {
    if (!file) return;
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "bilelmrz");
    //dy9upslic
    //bilelmrz
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dy9upslic/upload`,
        form,
      );
      console.log(response.data);
      setCoverImageUrl(response.data.secure_url);
      console.log("Upload success!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };*/


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
      coverImageUrl,
    };
    try {
      axios.post(`${import.meta.env.VITE_SERVER_URL}/places/`, body);
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
              onChange={(e) => {
                const numValue = parseInt(e.target.value);
                if (!isNaN(numValue)) {
                  setLat(numValue);
                }
              }}
              sx={{ mb: 3 }}
              required
            />
            <TextField
              fullWidth
              label="lngitide"
              value={lng}
              onChange={(e) => {
                const numValue = parseInt(e.target.value);
                if (!isNaN(numValue)) {
                  setLng(numValue);
                }
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
              onChange={(e) => {
                const numValue = parseInt(e.target.value);
                if (!isNaN(numValue)) {
                  setEntryFeeTND(numValue);
                }
              }}
              sx={{ mb: 3 }}
              required
            />
            <Box sx={{ mb: 3 }}>
              {!coverImageUrl && <UploadImage setCoverImageUrl={(url)=>{setCoverImageUrl(url)}}/>}
               {/*<>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ marginBottom: "10px" }}
                  />
                  <Button onClick={uploadImage} disabled={!file || upload}>
                    {upload ? "uploading ..." : "Uploaded"}
                  </Button>
                </> */} 
             
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
