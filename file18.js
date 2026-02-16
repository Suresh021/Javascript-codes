//const products = ["product1", "product2", "product3"]

const products = [
    { id: 1, name: "product1", desc: "This is product1", price: 5000 },
    { id: 2, name: "product2", desc: "This is product2", price: 12000 },
    { id: 3, name: "product3", desc: "This is product3", price: 9000 }
]
let cart = []
products.forEach((product) => {
    // product.quantity = 1
    // product.total = product.price * product.quantity
    //cart.push(product)
    const obj = {
        ...product,
        quantity: 1,
        total: product.price * product.quantity,
    }
    cart = [...cart, product]
})
console.log(cart)
// products.forEach((product) => console.log(product))