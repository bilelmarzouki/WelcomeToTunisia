

import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [file, setFile] = useState(null); // Keep for upload state
  const [url, setUrl]=useState("")
   //dy9upslic
  //bilelmrz
  const uploadImage = async () => {
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bilelmrz');

    try {
      const response =await axios.post('https://api.cloudinary.com/v1_1/dy9upslic/upload', form);
      //console.log(response.data)
      setUrl(response.data.secure_url)
      console.log('Upload success!');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} // No value prop
      />
      <button onClick={uploadImage}>Upload!</button>
      <img src={url} />
    </div>
  );
}

export default HomePage;
