import { useState, useEffect } from 'react';

interface UpvoteButtonProps {
  id: string;
  initialUpvotes: number;
  compact?: boolean;
}

const UpvoteButton = ({ id, initialUpvotes, compact = false }: UpvoteButtonProps) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => {
    const upvotedPosts = JSON.parse(localStorage.getItem('upvotedPosts') || '[]');
    if (upvotedPosts.includes(id)) {
      setHasUpvoted(true);
    }
  }, [id]);

  const handleUpvote = (e: React.MouseEvent) => {
    e.preventDefault();

    const newUpvotes = hasUpvoted ? upvotes - 1 : upvotes + 1;
    setUpvotes(newUpvotes);
    setHasUpvoted(!hasUpvoted);

    let upvotedPosts = JSON.parse(localStorage.getItem('upvotedPosts') || '[]');
    if (hasUpvoted) {
      upvotedPosts = upvotedPosts.filter((postId: string) => postId !== id);
    } else {
      upvotedPosts.push(id);
    }
    localStorage.setItem('upvotedPosts', JSON.stringify(upvotedPosts));

    const saved = localStorage.getItem('catchTrackerPosts');
    if (saved) {
      const posts = JSON.parse(saved);
      const postIndex = posts.findIndex((p: any) => p.id === id);
      if (postIndex !== -1) {
        posts[postIndex].upvotes = newUpvotes;
        localStorage.setItem('catchTrackerPosts', JSON.stringify(posts));
      }
    }
  };

  return (
    <button
      onClick={handleUpvote}
      className={`font-semibold rounded transition-colors ${
        compact ? 'text-sm px-2.5 py-0.5' : 'px-4 py-2'
      } ${
        hasUpvoted 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      }`}
    >
      👍 {compact ? upvotes : `Upvote (${upvotes})`}
    </button>
  );
};

export default UpvoteButton;