import { Link, useParams } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { useGetSingleProductQuery } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import ProductReviews from "./Review";
import ProductImage from "./ProductImages";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

 if(isLoading){
        return <div className="flex justify-center items-center  h-screen">
            <AiOutlineLoading3Quarters className="animate-spin text-7xl"/>
        </div>
    }

  return (
    <Container className="py-12">
      {/* Product Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <ProductImage images={product?.images} />

        {/* Product Information */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800">{product?.title}</h1>

          {/* Rating and Views */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {/* Rating Stars */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MdStar
                    key={index}
                    className={`w-5 h-5 ${index + 1 <= Math.round(product?.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product?.rating?.toFixed(1)} Rating
              </span>
            </div>

            {/* Viewers */}
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegEye className="mr-2" /> 250+ people are viewing this right now
            </div>
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-sky-600">${product?.price}</span>
            <span className="text-green-600 font-semibold text-sm">
              Save {product?.discountPercentage}%!
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product?.description}</p>

          {/* Extra Details */}
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Brand:</strong> {product?.brand}</p>
            <p><strong>Category:</strong> {product?.category}</p>
            <p><strong>Tags:</strong> {product?.tags?.join(', ')}</p>
            <p><strong>Warranty:</strong> {product?.warrantyInformation}</p>
            <p><strong>Shipping Info:</strong> {product?.shippingInformation}</p>
            <p><strong>Availability:</strong> {product?.availabilityStatus}</p>
            <p><strong>Return Policy:</strong> {product?.returnPolicy}</p>
            <p><strong>Minimum Order:</strong> {product?.minimumOrderQuantity} pcs</p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 space-x-10">
          <button className="bg-[#2FB24E] cursor-pointer text-white py-3 px-8 rounded-full text-sm uppercase font-semibold hover:bg-sky-700 transition">
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`}>
            <button className="bg-[#11405A] cursor-pointer text-white py-3 px-8 rounded-full text-sm uppercase font-semibold hover:bg-sky-700 transition">
             Edit Product
            </button>
            </Link>
          </div>

          {/* Payment Safety Note */}
          <div className="bg-gray-100 p-4 rounded-md text-center mt-6">
            <p className="text-gray-600 font-medium">Guaranteed Safe & Secure Checkout</p>
          </div>
        </div>
      </div>

      {/* Product Reviews Section */}
      <div className="mt-16">
        <ProductReviews reviews={product?.reviews} />
      </div>
    </Container>
  );
};

export default ProductDetails;