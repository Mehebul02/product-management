import { MdStar } from "react-icons/md";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Product {
  reviews: Review[];
}

export default function ProductReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="space-y-6">
      {reviews?.map((review, idx) => (
        <div key={idx} className="border p-4 rounded-md shadow-sm">
          {/* Stars */}
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index + 1 <= Math.floor(review.rating);
              const halfFilled = index + 1 > Math.floor(review.rating) && index < Math.ceil(review.rating);
              return (
                <MdStar
                  key={index}
                  className={`w-5 h-5 ${filled ? 'text-[#fa8900]' : halfFilled ? 'text-[#f7ca00]' : 'text-gray-400'}`}
                />
              );
            })}
          </div>

          {/* Comment */}
          <p className="text-gray-700 text-sm mb-1">
            "{review.comment}"
          </p>

          {/* Reviewer Name */}
          <p className="text-xs text-gray-500">
            - {review.reviewerName}
          </p>
        </div>
      ))}
    </div>
  );
}
