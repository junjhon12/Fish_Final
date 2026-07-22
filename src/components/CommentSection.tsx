import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Post
        </button>
      </form>
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200 text-gray-700 shadow-sm">
              {comment}
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic">No comments yet. Be the first to reply!</p>
        )}
      </ul>
    </div>
  );
};

export default CommentSection;