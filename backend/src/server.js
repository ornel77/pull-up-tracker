import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import connectDB from "./db/connectDB.js";

import healthRoutes from "./routes/healthRoutes.js";

const app = express();

// Security middleware
app.use(helmet());

// Cors configuration
app.use(
  cors({
    origin: env.clientUrl,
  }),
);

// Parse JSON request bodies
app.use(express.json({ limit: "10kb" }));

// API Routes
app.use("/api/health", healthRoutes);

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`Server running in ${env.nodeEnv} mode on port ${env.port}`);
    });
  } catch (error) {
    console.error("Server startup error: ", error.message);
    process.exit(1);
  }
};

startServer();
