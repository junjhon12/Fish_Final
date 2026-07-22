import { useState } from 'react';

interface UpvoteButtonProps {
  initialUpvotes: number;
}

const UpvoteButton = ({ initialUpvotes }: UpvoteButtonProps) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  const handleUpvote = () => {
    setUpvotes(prev => prev + 1);
  };

  return (
    <button
      onClick={handleUpvote}
      className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded hover:bg-blue-200 transition-colors"
    >
      👍 Upvote ({upvotes})
    </button>
  );
};

export default UpvoteButton;