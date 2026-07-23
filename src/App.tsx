import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeFeed from './pages/HomeFeed';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';

const backgroundImages = [
  'https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630424302756-7PQRTTAFJOPNCL72C8YP/fishing-1-2.jpg',
  'https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630424439040-AC0SMAIKPOHX00UTZGHJ/fishing-21.jpg',
  'https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630425929813-NOL6YRZ09RC9XH2385DM/fishing-extra.jpg',
  'https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630506639252-WEMRGTRN7Y50YK5DO5KN/fishing-6-1.jpg',
  'https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630424701269-KW5QXLK0MHS3N3D3GKYT/fishing-8-1.jpg',
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('created_at');
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      {backgroundImages.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Fishing Background"
          className={`fixed inset-0 w-full h-full object-cover object-center -z-20 transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="fixed inset-0 -z-10 bg-blue-100/5 backdrop-blur-sm" />

      <NavBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />
      <main className="container mx-auto p-4 min-h-screen relative z-10">
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