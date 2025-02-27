const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },          
    },
    { versionKey: false, timestamps: true }
);

const user = mongoose.model("users", userModel);

module.exports = user;