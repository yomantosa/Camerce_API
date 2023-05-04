const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var SlideshowSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    picDir:{
        type:String,
        required:true,
    },
    detail:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('Slideshow', SlideshowSchema);