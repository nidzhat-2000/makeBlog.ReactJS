import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import Home from './Home';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
