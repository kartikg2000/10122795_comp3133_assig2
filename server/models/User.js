const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Enter your name'],
    trim: true,
    lowercase: true,

  },
  useremail: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  password: {
    type: String,
    required: [true],
  }
  
});

const User = mongoose.model("User", UserSchema);
module.exports = User;


