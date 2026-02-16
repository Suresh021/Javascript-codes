// function f1() {
//     setTimeout(() => { console.log("This is F1 function") }, 5000)
// }
// f1()

//Promises
// function f1() {
//     console.log("This is F1 function")
// }

// function f2() {
//     console.log("This is f2 function")
// }
// f2()

function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment has been processed");
            resolve("Payment successful");
        }, 5000)
    })
}

function sendConfirmation() {
    console.log("Order has been placed successfully")
}
//call back hell
//makePayment(sendConfirmation)
makePayment()
    .then(() => sendConfirmation())
    .catch((err) => console.log(err))
