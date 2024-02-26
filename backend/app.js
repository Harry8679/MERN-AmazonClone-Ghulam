import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "backend/config/config.env" });

// Import all routes
import productRoutes from "./routes/product.route.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on the port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
