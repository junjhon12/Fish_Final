import { useState } from 'react';
import PostCard from '../components/PostCard';

const mockPosts = [
  { id: '1', title: 'Massive Largemouth Bass', createdAt: '2026-07-20T14:30:00Z', upvotes: 12 },
  { id: '2', title: 'First Saltwater Catch - Red Drum', createdAt: '2026-07-21T09:15:00Z', upvotes: 8 },
  { id: '3', title: 'Small Bluegill', createdAt: '2026-07-22T16:00:00Z', upvotes: 2 }
];

const HomeFeed = () => {
  const [posts] = useState(mockPosts);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recent Catches</h1>
      {posts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              createdAt={post.createdAt}
              upvotes={post.upvotes}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8 bg-white rounded-lg shadow">
          No catches logged yet. Be the first to share your catch!
        </p>
      )}
    </div>
  );
};

export default HomeFeed;