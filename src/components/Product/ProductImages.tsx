import React, { useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

interface ProductImagesProps {
  imageUrls: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ imageUrls }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(imageUrls[0]);

  return (
    <div className="flex-1 flex flex-col items-center">
      <img src={selectedImage} alt="Selected" className="w-full max-w-lg h-auto mb-4" />
      <div className="flex flex-row  ">
        {imageUrls.map((url, index) => (
          <ImageListItem key={index} onClick={() => setSelectedImage(url)} className="cursor-pointer w-28">
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 md:w-20 md:h-20 mb-2 border-2 ${selectedImage === url ? 'border-yellow-500' : 'border-transparent'}`}
            />
          </ImageListItem>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
