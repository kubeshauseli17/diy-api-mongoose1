import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/partials/NavBar.js';
import Home from './components/routes/Home';
import Blogs from './components/routes/Blogs';
import Blog from './components/routes/Blog';
import EditBlog from './components/routes/EditBlog';
import NewBlog from './components/routes/NewBlog';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/blogs'
            element={<Blogs />}
          />

          <Route 
            path='/blog/new'
            element={<NewBlog />}
          />

          <Route 
            path='/blog/:id'
            element={<Blog />}
          />

          <Route 
            path='/blog/:id/edit'
            element={<EditBlog />}
          />
        </Routes>
      </Router>
    </div>
  );
};



