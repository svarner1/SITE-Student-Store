const {storage} = require("../data/storage")

class Store {
    static async getProducts(){
        const productItems = storage.get("products").value()
        return productItems
    }

    static async fetchProductById(productId) {
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value()
    
        if (product) return product
    
        throw new NotFoundError("No product found with that id.")
      }
}

module.exports = Store