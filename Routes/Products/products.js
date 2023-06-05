const router  = require("express").Router()
const products = require('../../Schemas/productSchema')
const categories = require("../../Schemas/categoriesSchema")
const priceRange = require("../../Schemas/priceRangeSchema")



router.get("/",async (req, res)=>{
    const page  = req.query?.page || 0
    const booksPerPage = 6
    const sort = req.query.sort
    const type = req.query.type
    const price = req.query.price
    let products_data
    if(sort ){
        let sortedItem
        if(sort == "price" )
            sortedItem= {
            price:1 ,
        }
        else if(sort == "alphabetical"){
         sortedItem ={
            name:1
         }
        }
        products_data =  await products.find().sort(sortedItem).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
    }
    else{
        products_data = await products.find().skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
    }
    if (type){
        products_data = await products.find({category:type}).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
    }
    if (price == "Lower than $20") {
        products_data = await products.find( { price: { $lt: 20 }}).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
    } else if (price) {
        if (price == "$20-$100") {
            products_data = await products.find( { price: { $gt: 20 }}).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
        } if (price== "$100-$200") {
            products_data = await products.find( { price: { $gt: 100 }}).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
        }
        if (price== "More than $200") {
            products_data = await products.find( { price: { $gt: 200 }}).skip(Math.abs(page * booksPerPage)).limit(booksPerPage)
        }
    }
    res.status(200).send({success:true, msg:"Success", data:products_data})
})

router.get('/list',async(req, res)=>{
    const productsList = await products.find()
    if(productsList){
        res.send(productsList)
    }
})


router.get('/categories', async(req, res)=>{
    const categoriesOfProducts = await  categories.find()
    if(categoriesOfProducts){
        res.send(categoriesOfProducts)
    }
})

router.get("/price_range",async(req, res)=>{
    const priceRangeList =  await priceRange.find()
      if(priceRangeList){
          res.send(priceRangeList)
      }
})


module.exports = router