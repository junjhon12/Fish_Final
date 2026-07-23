import { Link } from 'react-router-dom';

interface NavBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const NavBar = ({ searchQuery, setSearchQuery, sortOption, setSortOption }: NavBarProps) => {
  return (
    <nav className="bg-blue-600 p-5 text-white shadow-2xl border-b-4 border-blue-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-3xl font-black tracking-widest drop-shadow-lg">
          🎣 Catch Tracker
        </Link>
        
        <div className="flex gap-4 w-full md:w-auto font-bold shadow-sm">
          <input 
            type="text" 
            placeholder="Search catches by title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-3 rounded-md text-black grow outline-none ring-4 ring-blue-300 placeholder-gray-500 font-semibold"
          />
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-3 rounded-md text-black outline-none ring-4 ring-blue-300 font-bold bg-white"
          >
            <option value="created_at">Sort by Newest</option>
            <option value="upvotes">Sort by Upvotes</option>
          </select>
        </div>

        <div className="flex gap-4 items-center text-lg font-extrabold drop-shadow-md">
          <Link to="/" className="hover:text-blue-200 transition-colors uppercase tracking-wider">
            HomeFeed
          </Link>
          <Link 
            to="/create" 
            className="bg-white text-blue-800 px-6 py-3 rounded-md font-black hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl uppercase tracking-wider"
          >
            Log a Catch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;