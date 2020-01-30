const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true, validate: [password => password.length > 6, "password length must be at least 6 characters"] },
  email: { type: String, unique: true, match: [/.+@.+\..+/, "enter a valid e-mail address"] },
  userCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
