const products = [
    { id: 1, name: "product1", desc: "This is product1", price: 5000 },
    { id: 2, name: "product2", desc: "This is product2", price: 12000 },
    { id: 3, name: "product3", desc: "This is product3", price: 9000 }
]
const cart = products.map((product) => {
    const obj = {
        ...product,
        quantity: 1
    }
    return obj
})
console.log(cart)