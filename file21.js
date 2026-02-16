const products = [
    { id: 1, name: "product1", desc: "This is product1", price: 5000, category: "Laptop" },
    { id: 2, name: "product2", desc: "This is product2", price: 12000, category: "Desktop" },
    { id: 3, name: "product3", desc: "This is product3", price: 9000, category: "Laptop" },
    { id: 4, name: "product4", desc: "This is product4", price: 6000, category: "Desktop" },
    { id: 5, name: "product5", desc: "This is product5", price: 13000, category: "Laptop" },
    { id: 6, name: "product6", desc: "This is product6", price: 8000, category: "Desktop" }

]
let category = "ProductId"
let text = 1

const resultArray = products.find((product) => product.id === text)
console.log(resultArray)