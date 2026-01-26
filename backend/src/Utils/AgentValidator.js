const { z } = require("zod");

const agentSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must not be more than 255 characters" }),

  mobile: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .regex(/^\+\d{1,3}\d{6,14}$/, {
      message: "Phone number must include country code (e.g. +919876543210)",
    }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(20, { message: "Password must not be more than 20 characters" }),
});

module.exports = agentSchema;
