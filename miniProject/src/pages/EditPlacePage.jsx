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
  Modal,
} from "@mui/material";
import axios from "axios";
function EditPlacePage() {
  const [entryFeeTND, setEntryFeeTND] = useState(0); // these are to edit the place
  const [longDescription, setLongDescription] = useState(""); // these are to edit the place
  const [bestTimeToVisit, setBestTimeToVisit] = useState(""); // these are to edit the place
  const [place, setPlace] = useState(null); //this is to show the place info
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    editForm();
  }, []);
  const editForm = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/places/${params.placeId}`,
      );
      setEntryFeeTND(response.data.entryFeeTND);
      setLongDescription(response.data.longDescription);
      setBestTimeToVisit(response.data.bestTimeToVisit);
      setPlace(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      entryFeeTND,
      longDescription,
      bestTimeToVisit,
    };
    try {
      await axios.patch(`http://localhost:5005/places/${params.placeId}`, body);
      navigate(`/cities/${place.cityId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            ✏️ change place's information
          </Typography>
          <Button onClick={handleOpen}>Click me to know What Can you Edit?</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4, 
                borderRadius: 2,
                outline: "none", 
                color: 'black !important',        // ✅ FORCE BLACK TEXT
                backgroundColor: 'white !important' // ✅ FORCE WHITE BACKGROUND
              }}
            >
              <Typography id="parent-modal-title" variant="h6" component="h2" color="red">
                Info:
              </Typography>
              <Typography sx={{ mt: 2 }}>
                This place has lots of properties, but only a few can be edited which are: fee of the entry, the Description, and Best time to visit.
              </Typography>
            </Box>
          </Modal>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
              label="  long Description"
              multiline
              rows={4}
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="best Time to Visit"
              value={bestTimeToVisit}
              onChange={(e) => setBestTimeToVisit(e.target.value)}
              sx={{ mb: 4 }}
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
              💾 Update
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default EditPlacePage;
