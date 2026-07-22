import { Link } from 'react-router-dom';

interface PostCardProps {
  id: string;
  title: string;
  createdAt: string;
  upvotes: number;
}

const PostCard = ({ id, title, createdAt, upvotes }: PostCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">
      <div className="flex justify-between items-start">
        <Link to={`/post/${id}`} className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          {title}
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <p className="text-gray-500 text-sm">Caught on: {new Date(createdAt).toLocaleDateString()}</p>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
            👍 {upvotes}
        </span>
      </div>
      
    </div>
  );
};

export default PostCard;