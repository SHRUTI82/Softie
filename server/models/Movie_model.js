const mongoose = require("mongoose");

const Movie_schema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        // title: {type:String, unique:true},
        desc: { type: String },
        img: { type: String },
        imgTitle: { type: String },
        imgSm: { type: String },
        trailer: { type: String },
        video: { type: String },
        year: { type: String },
        limit: { type: Number },
        genre: { type: String },
        isSeries: { type: Boolean, default: false },
        hour:{type: String},
        min:{type:String},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", Movie_schema);