import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getPosts } from 'wasp/client/operations';

const MapPage = () => {
  const { data: posts, isLoading, error } = useQuery(getPosts);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <div className='h-screen w-full bg-gray-200'>
        {posts.map((post) => (
          <div key={post.id} className='absolute top-0 left-0 z-10 p-4'>
            <img src={post.image} alt={post.description} />
            <p>{post.description}</p>
            <p>{post.district}</p>
            <Link to={`/post/${post.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapPage;