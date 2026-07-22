import { useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeFeed from './pages/HomeFeed';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('created_at');

  return (
    <BrowserRouter>
      <NavBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />
      <main className="container mx-auto p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<HomeFeed searchQuery={searchQuery} sortOption={sortOption} />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;