import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useAction, getPost, updatePost } from 'wasp/client/operations';

const PostPage = () => {
  const { postId } = useParams();
  const { data: post, isLoading, error } = useQuery(getPost, { id: parseInt(postId) });
  const updatePostFn = useAction(updatePost);
  const [newDescription, setNewDescription] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdatePost = () => {
    updatePostFn({ id: parseInt(postId), description: newDescription });
    setNewDescription('');
  };

  return (
    <div className='p-4'>
      <img src={post.image} alt='Post Image' className='rounded-lg mb-4' />
      <p className='text-xl font-bold mb-2'>{post.district}</p>
      <p className='mb-4'>{post.description}</p>
      <input
        type='text'
        placeholder='Update Description'
        className='px-1 py-2 border rounded text-lg mb-2'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        onClick={handleUpdatePost}
        className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
      >
        Update Post
      </button>
    </div>
  );
}

export default PostPage;