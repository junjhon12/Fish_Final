import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

interface Post {
  id: string;
  title: string;
  content?: string;
  imageUrl?: string;
  flag?: string;
  createdAt: string;
  upvotes: number;
}

const mockPosts: Post[] = [
  { id: '1', title: 'Massive Largemouth Bass', flag: 'Freshwater', createdAt: '2026-07-20T14:30:00Z', upvotes: 12 },
  { id: '2', title: 'First Saltwater Catch - Red Drum', flag: 'Saltwater', createdAt: '2026-07-21T09:15:00Z', upvotes: 8 },
  { id: '3', title: 'Small Bluegill', flag: 'Question', createdAt: '2026-07-22T16:00:00Z', upvotes: 2 }
];

const HomeFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filterFlag, setFilterFlag] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('catchTrackerPosts');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(mockPosts);
      localStorage.setItem('catchTrackerPosts', JSON.stringify(mockPosts));
    }
  }, []);

  const displayedPosts = filterFlag 
    ? posts.filter((post) => post.flag === filterFlag)
    : posts;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Recent Catches</h1>
        <select
          value={filterFlag}
          onChange={(e) => setFilterFlag(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">All Categories</option>
          <option value="Saltwater">Saltwater</option>
          <option value="Freshwater">Freshwater</option>
          <option value="Question">Question</option>
        </select>
      </div>

      {displayedPosts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {displayedPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              createdAt={post.createdAt}
              upvotes={post.upvotes}
              flag={post.flag}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8 bg-white rounded-lg shadow">
          No catches found matching this category.
        </p>
      )}
    </div>
  );
};

export default HomeFeed;