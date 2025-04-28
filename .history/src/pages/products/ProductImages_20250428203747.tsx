import { useState } from "react";

type ProductImageProps = {
    images: string[];
};

const ProductImage = ({ images }: ProductImageProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="flex float-start">
            <div>
                {images?.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt="productimg"
                        width={200}
                        height={200}
                        className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 border border-gray-200 duration-200 mb-1 p-1.5 ${
                            currentImage === item && "border border-gray-500 opacity-100 rounded-md"
                        }`}
                        onClick={() => setCurrentImage(item)}
                    />
                ))}
            </div>
            <div className="bg-gray-100 rounded-md ml-20 w-full max-h-[550px]">
                <img src={currentImage} alt="productImage" width={500} height={500} className="w-full h-full object-contain" />
            </div>
        </div>
    );
};

export default ProductImage;
