import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    minLength: 5,
    required: true,
    lowercase: true,
  },
  //   password: {
  //     type: String,
  //     minLength: 8,
  //     required: true,
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: () => Date.now(),
  //     immutable: true,
  //   },
  //   updatedAt: Date,
});

export const User = model("User", userSchema);
