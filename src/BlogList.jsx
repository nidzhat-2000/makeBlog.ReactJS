import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {
  return (
    <div className="bloglist">
      <h2>{title}</h2>

      {blogs.map((eachBlog, i) => {
        const { title, author, id } = eachBlog;
        return (
          <div className="blog-list" key={i}>
            <Link to={`blogs/${id}`}>
              <h3>{title}</h3>
              <p>Written by: {author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
