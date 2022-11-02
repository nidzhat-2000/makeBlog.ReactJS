import { useEffect, useState } from 'react';

function useFetchData(url) {
  const [blogs, setBlogs] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async url => {
      try {
        const res = await fetch(url);
        const blogs = await res.json();
        if (!res.ok) throw new Error('Something went wrong');
        if (blogs) {
          setFetched(true);
          setBlogs(blogs);
          setError(null);
          // console.log(blogs)  
        }
      } catch (err) {
        setError(err.message);
        setFetched(true);
      }
    };
    getData(url);
  }, []);

  return { blogs, fetched, error };
}

export default useFetchData;
