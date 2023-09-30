import mongoose from "mongoose";

const user_schema = mongoose.Schema({
  Firstname: {
    type: "string",
    required: true,
    trim: true,
    min: 1,
    max: 20,
  },
  Lastname: {
    type: "string",
    required: true,
    trim: true,
    min: 1,
    max: 20,
    capitalize: true,
  },

  Username: {
    type: "string",
    required: true,
    trim: true,
    min: 1,
    max: 20,
    index: true,
    unique: true,
    lowercase: true,
  },

  Email: {
    type: "string",
    required: true,
    trim: true,
    unique: true,
  },

  Password: {
    type: "string",
    required: true,
  },

  Phone: {
    type: Number,
  },
});

const User = new mongoose.model("user", user_schema);
export default User;
