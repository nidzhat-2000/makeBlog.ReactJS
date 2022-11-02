import React from 'react';
import BlogList from './BlogList';
import useFetchData from './useFetchData';

function Home() {
  const { blogs, fetched, error } = useFetchData('http://localhost:8000/blogs');
  console.log(blogs);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {!fetched && <span>Loading...</span>}

      {blogs.length !== 0 && <BlogList blogs={blogs} title={'All Blogs'} />}
    </div>
  );
}

export default Home;
