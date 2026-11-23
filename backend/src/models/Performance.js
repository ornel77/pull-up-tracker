import mongoose from "mongoose";

import {
  MIN_DURATION_SECONDS,
  MAX_COMMENT_LENGTH,
} from "../constants/performance.js";

import { isValidDate } from "../utils/isValidDate.js";

const performanceSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: [true, "Duration is required"],
    min: [
      MIN_DURATION_SECONDS,
      `Duration must be at least ${MIN_DURATION_SECONDS} second`,
    ],
    validate: {
      validator: Number.isInteger,
      message: "Duration must be an integer",
    },
  },

  date: {
    type: String,
    required: [true, "Date is required"],
    trim: true,
    validate: {
      validator: isValidDate,
      message: "Date must be a valid date in YYYY-MM-DD format",
    },
  },

  comment: {
    type: String,
    trim: true,
    maxlength: [
      MAX_COMMENT_LENGTH,
      `Comment cannot exceed ${MAX_COMMENT_LENGTH} characters`,
    ],
    default: "",
  },
}, {timestamps: true});

// une seule performance autorisée par date
performanceSchema.index({date: 1}, {unique: true})

const Performance = mongoose.model("Performance", performanceSchema)

export default Performance