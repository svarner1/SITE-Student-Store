const express = require("express")
const Store = require("../models/products")
const router = express.Router()



router.get("/products", async (req, res, next) => {
    console.log("Hello")
    try{
        const products = await Store.getProducts()
        res.status(200).json({products})
    } catch(err){
        next(err)
    }
})

module.exports = router