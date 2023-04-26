const mongoose = require("mongoose");

const List_schema = new mongoose.Schema(
    {
        title: { type: String },
        type: { type: String },
        content: { type: Array },
        genre: { type: String }
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("List", List_schema);