// index.js
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.route.js"
import listingRouter from "./routes/listing.route.js";
dotenv.config();
const port = process.env.PORT || 6000;
console.log(port)
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());



//  Route middleware
app.use("/api/auth", authRouter);
app.use("/api/user",userRouter);
app.use("/api/listing",listingRouter)

app.listen(port, () => {
  connectDb();
  console.log(`Server started on port ${port}`);
});
