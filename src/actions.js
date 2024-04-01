import { HttpError } from 'wasp/server'

export const createPost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Post.create({
    data: {
      description: args.description,
      image: args.image,
      district: args.district,
      latitude: args.latitude,
      longitude: args.longitude,
      userId: context.user.id
    }
  });
}

export const updatePost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const post = await context.entities.Post.findUnique({
    where: { id: args.id }
  });

  if (post.userId !== context.user.id) { throw new HttpError(403) };

  const dataToUpdate = {};
  if (args.description) { dataToUpdate.description = args.description }
  if (args.image) { dataToUpdate.image = args.image }
  if (args.district) { dataToUpdate.district = args.district }
  if (args.latitude) { dataToUpdate.latitude = args.latitude }
  if (args.longitude) { dataToUpdate.longitude = args.longitude }

  return context.entities.Post.update({
    where: { id: args.id },
    data: dataToUpdate
  });
}

export const deletePost = async ({ postId }, context) => {
  if (!context.user) { throw new HttpError(401) };
  const post = await context.entities.Post.findUnique({
    where: { id: postId }
  });
  if (post.userId !== context.user.id) { throw new HttpError(403) };
  await context.entities.Post.delete({
    where: { id: postId }
  });
}