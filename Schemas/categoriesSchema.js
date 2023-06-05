const {Schema, model} = require('mongoose')

const CategoriesSchema = new Schema({
     categories: [{
         name:{
             type:String}}
     ]
        },
     { timestamps:true}
)

module.exports=  model("categories", CategoriesSchema)

