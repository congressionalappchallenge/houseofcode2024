import { HttpError } from 'wasp/server'

export const getPost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  const post = await context.entities.Post.findUnique({
    where: { id: args.id },
    include: { user: true }
  });
  if (!post) { throw new HttpError(404, 'Post not found') };
  if (post.userId !== context.user.id) { throw new HttpError(400, 'Post does not belong to the user') };
  return post;
}

export const getPosts = async (args, context) => {
  const posts = await context.entities.Post.findMany();
  return posts;
}

export const getUserPosts = async ({ userId }, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Post.findMany({
    where: { userId }
  })
}