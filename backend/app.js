import express from "express";
import dotenv from "dotenv";

// Import all routes
import productRoutes from "./routes/product.route.js";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

dotenv.config({ path: "backend/config/config.env" });

// Connection Database
connectDatabase();

app.use(express.json());

app.use("/api/v1", productRoutes);

// Using error middleware
app.use(errorMiddleware);

let server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on the port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err}`);
    console.log('Shutting down server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});
