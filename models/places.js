const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines:{ type: String, required: true },
    city: { type: String, default: 'Anytown' }, // default value for city is 'Anytown
    state: { type: String, default : 'USA' }, // default value for state is 'Anystate'
    founded: Number,
});

module.exports = model("Place", placeSchema);