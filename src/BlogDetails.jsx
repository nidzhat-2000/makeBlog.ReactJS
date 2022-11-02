import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from './useFetchData';

function BlogDetails() {
  const { id } = useParams();
  const goBack = useNavigate();
  console.log(id);

  const {
    blogs: blog,
    fetched,
    error,
  } = useFetchData('http://localhost:8000/blogs/' + id);

  const deleteData = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'Delete',
    }).then(() => {
      console.log('deleted ');
      goBack('/');
    });
  };

  return (
    <div>
      {error && { error }}
      {!fetched && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <span>writeen by {blog.author}</span> <br /> <br />
          <button onClick={deleteData}>delete blog</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
