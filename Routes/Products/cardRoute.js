const router  = require("express").Router()
const products = require('../../Schemas/productSchema')
const cardItems= require('../../Schemas/cardSchema')
router.post("/", async(req, res)=>{
    let id = req.body.id
    const productsList = await  products.findById(id)
    const items =     new cardItems({
      name:productsList.name,
      category:productsList.category,
      price:productsList.price,
      currency:productsList.currency,
      image:productsList.image,
      bestseller:productsList.bestseller,
      featured:productsList.featured,
      details:productsList.details,
    })
    const i = await items.save()
    res.send(i)
})

router.get("/",async(req, res)=>{
       const cardItemsList = await cardItems.find()
       if(cardItemsList) {
        res.send(cardItemsList)
       }

})

router.delete("/", async(req, res)=>{
    const cardItemsList = await cardItems.deleteMany({})
    if(cardItemsList){
        res.status(200).send("Success")
    }
})
module.exports = router