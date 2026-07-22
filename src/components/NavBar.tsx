import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🎣 Catch Tracker
        </Link>
        
        <div className="flex gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search catches by title..." 
            className="px-3 py-2 rounded-md text-white grow focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select className="px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option value="created_at">Sort by Newest</option>
            <option value="upvotes">Sort by Upvotes</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            HomeFeed
          </Link>
          <Link 
            to="/create" 
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Log a Catch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;