import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", usersRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is listing on port -- ${port}`);
});
