const express = require("express");

const { users } = require("../data");

const router = express.Router();

router.get("/users", (req, res) => {
  res.send({
    users: users, //users:users both names are same so only users need
  });
});

router.get("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userFound = users.find((user) => user.id === userId);
  res.send({
    message: "user have been retrieved.",
    user: userFound,
  });
});

router.post("/users", (req, res) => {
  const newUser = req.body;
  const latestUserList = [...users, newUser];
  res.send({
    message: "user has been retrieved.",
    users: latestUserList,
  });
});

router.put("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userFound = users.find((user) => user.id === userId);
  const updateUser = { ...userFound, ...req.body };
  res.send({
    message: "user has been updated succesfully.",
    user: updateUser,
  });
});

router.delete("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const updatedUserList = users.filter((user) => user.id !== userId);

  res.send({
    message: "user has been deleted succesfully.",
    users: updatedUserList,
  });
});

module.exports = router;
