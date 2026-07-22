import Navbar from './components/NavBar'
import HomeFeed from './pages/HomeFeed'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
