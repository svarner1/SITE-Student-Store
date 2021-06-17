const {storage} = require("../data/storage")

class Store {
    static async getProducts(){
        const productItems = storage.get("products").value()
        return productItems
    }
}

module.exports = Store