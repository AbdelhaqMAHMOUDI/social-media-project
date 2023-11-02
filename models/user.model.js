const mongoose = require("mongoose");
const { isEmail } = require("validator");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Pleae enter your username"],
    minlength: [3, "Your password must be a t leeast 3 characters long"],
    maxlength: 56,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    // validate: [isEmail, "Please enter a valid email address"],
  },
  // role: {
  //   type: String,
  //   enum: {
  //     values: ["user", "employer"],
  //     message: "Please select your role",
  //   },
  //   //required: [true, 'Please select role that is required'],
  //   default: "user",
  // },
  password: {
    type: String,
    required: [true, "Pleae enter your password"],
    minlength: [6, "Your password must be a t leeast 6 characters long"],
  },
  // firstName: {
  //   type: String,
  //   required: [true, "Pleae enter your firstname"],
  //   trim: true,
  //   maxlength: 50,
  // },
  // lastName: {
  //   type: String,
  //   required: [true, "Pleae enter your lastname"],
  //   trim: true,
  //   maxlength: 50,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// creation du modele User à partir du schema

const User = mongoose.model("user", userSchema);

module.exports = User;
