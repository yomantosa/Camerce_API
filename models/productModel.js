const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  category: { type: String, require: true },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  picDir: {
    type: String,
    required: true,
  },
  quantity: {
    default:1,
    type: Number,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Products", productSchema);
