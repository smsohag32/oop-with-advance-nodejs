import express from "express";
import cors from "cors";
import userRoute from "./core/api/controllers/userController";
import { connectToDatabase } from "./config/dbConnect";
import { errorHandler } from "./exceptions/globalException";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
   origin: "*",
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   preflightContinue: false,
   optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(userRoute);
// Error Handler Middleware (MUST be after all routes)
app.use(errorHandler);
connectToDatabase();

// room api
app.get("/", (req, res) => {
   res.json({
      message: "Welcome to the OOP Node.js",
   });
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
