import { useState } from "react";
import { Box, Button, CircularProgress, Modal } from "@mui/material";
import axios from "axios";
function UploadImage({setCoverImageUrl}) {
  const [file, setFile] = useState(""); // Keep for upload state
  const [upload, setUpload] = useState(false);
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const uploadImage = async () => {
    if (!file) return;
    setUpload(true)
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
      setUpload(false)
      setCoverImageUrl(response.data.secure_url);
      console.log("Upload success!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  return (
    <>
      <Button onClick={handleOpen}>click me to upload an Image of the place</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: "10px" }}
          />
          
          <Button onClick={uploadImage} disabled={!file || upload}
           startIcon={upload? <CircularProgress size={30} />:null}
          >
            {upload ? "uploading ..." : "Upload"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default UploadImage;
