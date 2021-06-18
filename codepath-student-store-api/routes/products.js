const express = require("express")
const Store = require("../models/products")
const router = express.Router()

router.get("/", async (req, res, next) => {
    console.log("Hello")
    try{
        const products = await Store.getProducts()
        res.status(200).json({products})
    } catch(err){
        next(err)
    }
})

router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        res.status(200).json({ product })
    } catch (err) {
        next(err)
    }
})


module.exports = router 