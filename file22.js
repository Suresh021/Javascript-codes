const products = [
    { id: 1, name: "product1", desc: "This is product1", price: 5000, category: "Laptop" },
    { id: 2, name: "product2", desc: "This is product2", price: 12000, category: "Desktop" },
    { id: 3, name: "product3", desc: "This is product3", price: 9000, category: "Laptop" },
    { id: 4, name: "product4", desc: "This is product4", price: 6000, category: "Desktop" },
    { id: 5, name: "product5", desc: "This is product5", price: 13000, category: "Laptop" },
    { id: 6, name: "product6", desc: "This is product6", price: 8000, category: "Desktop" }

]
const cart = []
function addToCart(id) {
    let product = products.find((product) => product.id === id)
    // console.log(product)
    cart.push({ ...product, quantity: 1 })
}
function increment(productId) {
    const product = cart.find((product) => product.id === productId)
    product.quantity++
}
function decrement(productId) {
    const product = cart.find((product) => product.id === productId)
    product.quantity--

}
function calculateTotal() {
    let total = cart.reduce((sum,item)=> sum+(item.price*item.quantity))
    // let total = 0;
    // for (let item of cart) {
    //     productTotal = item.price * item.quantity;
    //     total += item.price * item.quantity;
    // }
    return total;
}
function placeOrder() {
    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }
    const total = calculateTotal();

    let email = "John@gmail.com"
    const order = {
        // email: "John@gmail.com",
        items: cart,
        orderValue: total,
        totalValue: productTotal
    };
    console.log(`Order placed successfully by ${email}`);
    order.forEach((product) => {
        // console.log(product.id, product.name, product.desc, product.price, product.category) 
        console.log(`${item.id}-${item.name}-${item.desc}-${item.price}-${item.category}-${item.quantity}-${item.price * items.quantity}`)
    })
    console.log("product total", productTotal)
    console.log("Total order value", total);
}
addToCart(1)
addToCart(2)
addToCart(5)
console.log(cart)
increment(1)
increment(5)
console.log(cart)
decrement(1)
console.log(cart)
placeOrder(1);

console.log("***Flipcart***")
products.forEach((product) => {
    // console.log(product.id, product.name, product.desc, product.price, product.category) 
    console.log(`${product.id}-${product.name}-${product.desc}-${product.price}-${product.category}`)
})