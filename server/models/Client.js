const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: String,
});

ClientSchema.plugin(validator);
module.exports = mongoose.model("Client", ClientSchema);
