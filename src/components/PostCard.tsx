import { Link } from 'react-router-dom';
import UpvoteButton from './UpvoteButton';

interface PostCardProps {
  id: string;
  title: string;
  createdAt: string;
  upvotes: number;
  flag?: string;
}

const PostCard = ({ id, title, createdAt, upvotes, flag }: PostCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col gap-1">
          <Link to={`/post/${id}`} className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            {title}
          </Link>
          {flag && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md w-max font-medium">
              {flag}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between items-end mt-2">
        <p className="text-gray-500 text-sm">Caught on: {new Date(createdAt).toLocaleDateString()}</p>
        <UpvoteButton id={id} initialUpvotes={upvotes} compact={true} />
      </div>
    </div>
  );
};

export default PostCard;