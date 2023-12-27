import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./databse.js";
import courseRouter from "./routes/courses.js";
import usersRouter from "./routes/users.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/courses", courseRouter);
app.use("/api/users", usersRouter);

connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
