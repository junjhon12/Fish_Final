import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setTitle('Massive Largemouth Bass');
    setContent('Caught this beauty using a plastic worm near the lily pads. Weighed in at just over 6 pounds!');
    setImageUrl('https://images.unsplash.com/photo-1599818815161-536488ff1ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ id, title, content, imageUrl, action: 'UPDATE' });
    navigate(`/post/${id}`);
  };

  const handleDelete = () => {
    console.log({ id, action: 'DELETE' });
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">Edit Catch</h2>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors"
        >
          Delete Catch
        </button>
      </div>
      
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Catch Title (Species)*</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Catch Details & Location</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-gray-700 font-semibold mb-2">External Image URL</label>
          <input
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="grow bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate(`/post/${id}`)}
            className="grow bg-gray-200 text-gray-800 font-bold py-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;