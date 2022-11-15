import { v4 as uuid } from "uuid";
var users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  res.send(users);
};

export const updateUser = (req, res) => {
  const user = users.find((obj) => obj.id === req.params.id);
  req.body.name && (user.name = req.body.name);
  req.body.email && (user.email = req.body.email);
  req.body.phoneNumber && (user.phoneNumber = req.body.phoneNumber);
  req.body.gender && (user.gender = req.body.gender);
  req.body.isEligible && (user.isEligible = req.body.isEligible);

  res.send("update Users");
};

export const deleteUser = (req, res) => {
  users = users.filter((obj) => obj.id !== req.params.id);
  res.send("delete successfully");
};

export const postUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("added susscefully");
};
