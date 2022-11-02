import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ibrahim');
  const [blogFinished, setBLogFinished] = useState(false);
  const goBack = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    setBLogFinished(true);

    const blogMaking = { title, body, author };
    const sendData = () => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogMaking),
      }).then(data => {
        console.log('new added');
        setBLogFinished(false);
      });
      setTitle('');
      setBody('');
      goBack('/');
    };
    sendData();
  };

  return (
    <div className="create-blog">
      <h2>Add new Blog</h2>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Blog title: {title} </label> <br /> <br />
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="">Blog body:</label> <br /> <br />
        <textarea
          required
          name=""
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <br /> <br />
        <label htmlFor="">Author:</label> <br /> <br />
        <select
          name=""
          id=""
          required
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="nijat">nijat</option>
          <option value="ibrahim">ibrahim</option>
        </select>
        <br /> <br />
        <button>{`${
          blogFinished ? 'Adding New Blog...' : 'Add New Blog'
        }`}</button>
      </form>
    </div>
  );
}

export default NewBlog;
