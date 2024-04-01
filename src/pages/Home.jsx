import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getPosts, getUserPosts } from 'wasp/client/operations';

const HomePage = () => {
  const { data: posts, isLoading, error } = useQuery(getPosts);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    if(posts && posts.length > 0) {
      const interval = setInterval(() => {
        setCurrentPostIndex((prevIndex) => (prevIndex + 1) % (posts.length || 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [posts]);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className=''>
      {posts.map((post, index) => (
        <div key={post.id} className={`carousel-item ${index === currentPostIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${post.image})` }}>
          <div className='carousel-text'>
            <h3>{post.description}</h3>
            <p>{post.district}</p>
            <Link to={`/post/${post.id}`} className='text-blue-500 hover:underline'>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;