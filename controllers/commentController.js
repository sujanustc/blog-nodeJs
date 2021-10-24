const Comment = require("../models").comments;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { findUserByToken, findPostById } = require("../utils/utils");

const addComment = async (req, res) => {
  const { token, postId, userId, message } = req.query;

  if (!token || !postId || !message)
    return res.json({ status: false, message: "Missing Fields!" });

  if (message.length <= 3)
    return res.json({
      status: false,
      message: "Message Length Must be three Charactar long!",
    });

  if (!(await findPostById(postId)))
    return res.json({
      status: false,
      message: "Post with this id is not found!",
    });
  let user = await findUserByToken(token);
  if (!user) return res.json({ status: false, message: "User Not Found!" });

  const comment = await Comment.create({
    postId: postId,
    userId: user.id,
    message: message,
  });

  res.json({ status: true, comment: comment });
};

module.exports = { addComment };
