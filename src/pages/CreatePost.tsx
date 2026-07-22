import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content, imageUrl });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Log a New Catch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Catch Title (Species)*</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="e.g., Massive Largemouth Bass"
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
            placeholder="Where did you catch it? What bait did you use?"
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
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Catch
        </button>
      </form>
    </div>
  );
};

export default CreatePost;