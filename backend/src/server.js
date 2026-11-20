import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import connectDB from "./db/connectDB.js";

import healthRoutes from "./routes/healthRoutes.js";

const app = express()

// Security middleware
app.use(helmet())

// API Routes
