import { z } from "zod";

import {
  MAX_COMMENT_LENGTH,
  MIN_DURATION_SECONDS,
} from "../constants/performance.constants.js";

import { isValidate } from "../utils/isValidate.js";

const dateSchema = z.string().trim().refine(isValidate, {
  message: "Invalid date. Expected a valid date in YYYY-MM-DD format.",
});

// Structure des données d'une performance
export const performanceInputSchema = z.object({
  duration: z
    .number()
    .int("Duration must be an integer")
    .min(
      MIN_DURATION_SECONDS,
      `Duration must be at leat ${MIN_DURATION_SECONDS} seconds`,
    ),
  date: dateSchema,
  comment: z
    .string()
    .trim()
    .max(
      MAX_COMMENT_LENGTH,
      `Comment cannot exceed ${MAX_COMMENT_LENGTH} characters`,
    )
    .default(""),
});

// Validation d'une date passée dans l'URL
export const dateParamSchema = z.object({ date: dateSchema });

// Validation d'un identifiant dans l'URL
export const performanceIdSchema = z.object({
  id: z.string().regex(/^[a-fA-F0-9]{24}$/, {
    message: "Invalid performance ID",
  }),
});

// Validation des filtres de recherche.
export const performanceQuerySchema = z
  .object({
    startDate: dateSchema.optional(),
    endDate: dateSchema.optional(),
  })
  .strict()
  .refine(
    ({ startDate, endDate }) => !startDate || !endDate || startDate <= endDate,
    {
      message: "startDate must be before or equal to endDate",
      path: ["endDate"],
    },
  );
