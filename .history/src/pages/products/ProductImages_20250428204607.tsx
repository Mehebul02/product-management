import React from 'react';

const ProductImageGallery = ({ images }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="flex flex-col items-center">
        <img
          src={images[0]}
          alt="Product"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="flex mt-4 space-x-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md border border-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
