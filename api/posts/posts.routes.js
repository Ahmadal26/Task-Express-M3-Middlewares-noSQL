const express = require("express");
const router = express.Router();
const uploader = require("../../middlewere/uploader");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchpost,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  try {
    const foundPost = await fetchpost(postId);
    if (!fetchpost) return next({ status: 404, message: "post not found" });
    req.post = foundPost;
  } catch (err) {
    return next(err);
  }
});

router.get("/", postsGet);
router.post("/", uploader.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
