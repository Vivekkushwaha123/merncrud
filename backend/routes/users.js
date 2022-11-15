import express from "express";
import {
  getUser,
  deleteUser,
  getUsers,
  postUser,
  updateUser,
} from "../controller/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", postUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
