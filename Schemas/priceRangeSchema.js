const {Schema, model} = require("mongoose");
const PriceRangeSchema = new Schema({
        prices: [{
            range:{
                type:String
            }}
        ]
    },
    { timestamps:true}

)

module.exports=  model("priceRange", PriceRangeSchema)