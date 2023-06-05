const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardItemsSchema = new Schema(
    {
        name:{
            type:String
        },
        category:{
            type:String
        },
        price:{
            type:Number
        },
        currency:{
            type:String
        },
        image:{
            src:{
                type:String
            }
        },
        bestseller:{
            type:Boolean
        },
        featured:{
            type:Boolean
        },
        details:{
            height:{
                type:Number,
            },
            width:{
                type:Number
            }
        },
        itemsCount: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("cardItems", cardItemsSchema);