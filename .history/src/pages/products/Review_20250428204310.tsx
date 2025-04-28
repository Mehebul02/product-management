import { MdStar } from "react-icons/md";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

const ProductReviews = ({ reviews }: { reviews: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
        <p className="text-gray-500 mt-2">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
      <div className="grid gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
          >
            {/* Stars */}
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(review.rating);
                return (
                  <MdStar
                    key={index}
                    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                );
              })}
              <span className="ml-2 text-sm text-gray-500">
                ({review.rating.toFixed(1)})
              </span>
            </div>

            {/* Comment */}
            <p className="text-gray-700 text-base mb-4 italic">"{review.comment}"</p>

            {/* Reviewer Info */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>By {review.reviewerName}</span>
              <span>{new Date(review.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
