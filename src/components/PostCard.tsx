import { Link } from 'react-router-dom';
import UpvoteButton from './UpvoteButton';

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
      <div className="flex justify-between items-end mt-2">
        <p className="text-gray-500 text-sm">Caught on: {new Date(createdAt).toLocaleDateString()}</p>
        <UpvoteButton id={id} initialUpvotes={upvotes} compact={true} />
      </div>
    </div>
  );
};

export default PostCard;