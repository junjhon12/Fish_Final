import { useParams, Link } from 'react-router-dom';
import UpvoteButton from '../components/UpvoteButton';
import CommentSection from '../components/CommentSection';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  const mockPost = {
    id,
    title: 'Massive Largemouth Bass',
    content: 'Caught this beauty using a plastic worm near the lily pads. Weighed in at just over 6 pounds!',
    imageUrl: 'https://images.unsplash.com/photo-1599818815161-536488ff1ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-07-20T14:30:00Z',
    upvotes: 12
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{mockPost.title}</h1>
        <Link 
          to={`/edit/${id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap"
        >
          Edit / Delete
        </Link>
      </div>
      
      <p className="text-gray-500 text-sm mb-4">Caught on: {new Date(mockPost.createdAt).toLocaleDateString()}</p>
      
      {mockPost.imageUrl && (
        <img 
          src={mockPost.imageUrl} 
          alt={mockPost.title} 
          className="w-full h-auto rounded-lg mb-6 shadow-sm object-cover max-h-125"
        />
      )}
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
        {mockPost.content}
      </p>
      
      <div className="border-t border-gray-200 pt-6 mb-6">
        <UpvoteButton initialUpvotes={mockPost.upvotes} />
      </div>
      
      <CommentSection />
    </div>
  );
};

export default PostDetail;