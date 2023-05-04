const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var cateSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
  productID: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Category", cateSchema);
