let products = [
    {id:1, name: "Acer Laptop", unitPrice:15000},
    {id:2, name: "Asus Laptop", unitPrice:20000},
    {id:3, name: "Hp Laptop", unitPrice:21000},
    {id:4, name: "Dell Laptop", unitPrice:19000},
    {id:5, name: "Casper Laptop", unitPrice:18000},
]

console.log("<ul>")
products.map(product=>console.log('<li>${product.name}</li>'))
console.log("</ul>")

products.map(product=>{
    console.log(product.name)
   // console.log('<li>${product.name}</li>')
})
//Filter

let filteredProducts = products.filter(product=>product.unitPrice>16000)
console.log(filteredProducts)

//Reduce
