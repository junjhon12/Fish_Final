import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UpvoteButton from '../components/UpvoteButton';
import CommentSection from '../components/CommentSection';

interface Post {
  id: string;
  title: string;
  content?: string;
  imageUrl?: string;
  flag?: string;
  referenceId?: string;
  createdAt: string;
  upvotes: number;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [referencedPost, setReferencedPost] = useState<Post | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('catchTrackerPosts');
    if (saved) {
      const posts: Post[] = JSON.parse(saved);
      const foundPost = posts.find((p) => p.id === id);
      
      if (foundPost) {
        setPost(foundPost);
        
        if (foundPost.referenceId) {
          const linkedPost = posts.find((p) => p.id === foundPost.referenceId);
          if (linkedPost) {
            setReferencedPost(linkedPost);
          } else {
            setReferencedPost(null);
          }
        } else {
          setReferencedPost(null);
        }
      }
    }
  }, [id]);

  if (!post) {
    return <div className="text-center mt-8 text-gray-500">Loading catch details...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="text-gray-500 text-sm mt-1">Post ID: {post.id}</p>
          {post.flag && (
            <span className="mt-2 inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-medium">
              {post.flag}
            </span>
          )}
        </div>
        <Link 
          to={`/edit/${id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap"
        >
          Edit / Delete
        </Link>
      </div>
      
      <p className="text-gray-500 text-sm mb-4">Caught on: {new Date(post.createdAt).toLocaleDateString()}</p>
      
      {referencedPost && (
        <div className="mb-6 p-5 bg-gray-50 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
          <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">🧵 Threaded Catch</p>
          <Link to={`/post/${referencedPost.id}`} className="text-lg font-bold text-gray-800 hover:text-blue-600 hover:underline transition-colors block mb-1">
            {referencedPost.title}
          </Link>
          <p className="text-sm text-gray-600 line-clamp-2">
            {referencedPost.content || 'No description provided.'}
          </p>
        </div>
      )}

      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-auto rounded-lg mb-6 shadow-sm object-cover max-h-125"
        />
      )}
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </p>
      
      <div className="border-t border-gray-200 pt-6 mb-6">
        <UpvoteButton id={post.id} initialUpvotes={post.upvotes} />
      </div>
      
      <CommentSection />
    </div>
  );
};

export default PostDetail;