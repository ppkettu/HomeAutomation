const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    name:String,
    id:String,
    type:Number
});

module.exports = mongoose.model("HAItem",Schema);
