// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ItemSchema = new Schema(
  {
    id: Number,
    type: String,
    cost: Number,
    name: String,
    hp: Number,
    speed: Number,
    attack: Number,
    purchased: Boolean
  }
);

// {id: 1, type:'body', cost: 12, name:'steel chassis', hp:5, speed:1, attack: 0, purchased: false}

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", ItemSchema);