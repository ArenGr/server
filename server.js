require('dotenv').config()
const express  =require('express')
const cors = require("cors")
const app  =express()
const productsRoute = require("./Routes/Products/products")
const cardRoute =  require("./Routes/Products/cardRoute")
const mongoose = require("mongoose");
const port = process.env.PORT

app.use(express.json())
app.use(cors({ origin:"http://localhost:3000",
    methods:"GET,POST, DELETE",
    credentials:true}))
app.use("/api/products" ,productsRoute)
app.use("/api/card", cardRoute )


const connection =async ()=>{
    const params  = {
        useNewUrlParser:true
    }
    const isConnected  = await mongoose.connect(process.env.DB, params)
    if(isConnected){
     app.listen(port, ()=>{
         console.log( `${port} is running`)
     })
 }

}
connection()

