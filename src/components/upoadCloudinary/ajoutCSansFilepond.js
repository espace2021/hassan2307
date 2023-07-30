import React, { useState } from 'react';
import { Image } from 'cloudinary-react';

const ImageUploader = () => {
  const [image, setImage] = useState('');

  const handleUpload = async (e) => { 
    const file = e.target.files[0]; console.log(e)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Ecommerce_cloudinary'); 

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/iset-sfax/image/upload', 
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url);
    } catch (err) {
      console.error('Error uploading image: ', err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && <Image cloudName="iset-sfax" publicId={image} width="150" height="150" />} 
     </div>
  );
};

export default ImageUploader;
