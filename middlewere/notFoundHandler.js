exports.notFounderHandler = (req, res, next) => {
  res.status(404).json({ message: "Path not found" });
};
