import mongoose from "mongoose";
const packageSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  version: {type: Array, default: [Number]},
  repository: {type: Array, default: [String]},
});

module.exports = mongoose.model('package', packageSchema);
