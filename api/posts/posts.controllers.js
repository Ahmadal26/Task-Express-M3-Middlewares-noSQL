const Post = require("../../models/Post");

exports.fetchpost = async (postId, next) => {
  try {
    const foundPost = await Post.findById(postId);
    return foundPost;
  } catch (error) {
    return next(error);
  }
};
exports.postsCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  try {
    await req.Post.deleteOne();
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    await req.post.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    return next(error);
  }
};
