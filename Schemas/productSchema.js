const {Schema, model} = require('mongoose')

const productsSchema = new Schema({
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
    }

},{
    timestamps:true
})

module.exports=  model("products", productsSchema)

