//JSON - JavaScript Object Notation
//Chave e valor com objetivo de transferir dados

let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse", 29.9],
        1: ["Teclado", 129.9],
        2: ["Monitor", 899.9]
    }
}
generateInvoice(invoice)

function generateInvoice(invoice){

    console.log(`O comprador é ${invoice.name}`) 
    console.log(`A idade é ${invoice.age}`) 
    console.log(`---------------`) 
    for(let i in invoice.products){

        let [productName, productPrice] = invoice.products[i]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }

}