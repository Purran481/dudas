let producto = [
    {id: 1000, name: "MOUSE 1", price: 400},
    {id: 1001, name: "MOUSE 2", price: 300},
    {id: 1002, name: "MOUSE 3", price: 500},
    {id: 1003, name: "KEYBOARD 1", price: 700},
    {id: 1004, name: "KEYBOARD 2", price: 250},
    {id: 1005, name: "KEYBOARD 3", price: 100},
    {id: 1006, name: "HEADSET 1", price: 300},
    {id: 1007, name: "HEADSET 2", price: 1500},
    {id: 1008, name: "HEADSET 3", price: 120},
    {id: 1009, name: "MICROPHONE 1", price: 1000},
    {id: 1010, name: "MICROPHONE 2", price: 1000}
]
let name = prompt(`Enter your name`)
let surname = prompt(`Enter your surname`)

const saludo = (nombre, apellido) => {
    alert(`Welcome ${nombre} ${apellido}`)
}

saludo(name, surname)

const miFuncion = () => {
    let peticionUsuario = prompt(`Enter the name product you want to search for = \n Mouse \n Keyboard \n Headset \n Microphone \n Exit`);
    peticionUsuario = peticionUsuario.toUpperCase();
    while (peticionUsuario != "EXIT") {
        while (peticionUsuario != "KEYBOARD" && peticionUsuario != "MOUSE" && peticionUsuario != "HEADSET" && peticionUsuario != "MICROPHONE" && peticionUsuario != "EXIT") {
            alert("La opcion elegida es invalida")
            peticionUsuario = prompt(`Enter the name product you want to search for = \n Mouse \n Keyboard \n Headset \n Microphone \n Exit`);
            peticionUsuario = peticionUsuario.toUpperCase();
            console.log(peticionUsuario)
        }
        let searchProducts = producto.filter(element => element.name.includes(peticionUsuario))
        let searchName = searchProducts.map(element => element.name)
        console.log(searchName)
        alert(`We have the next ${peticionUsuario} = ${searchName}`)
        let searchPrice = prompt(`enter the model you want to know the price of = ${searchName.join(",")} `)
        searchPrice = searchPrice.toUpperCase()
        let valuePrice = searchProducts.find((elementName) => elementName.name === (searchPrice))
        alert(`The price of your product is ${valuePrice.price} USD`)
        console.log(valuePrice.price)
        let result = [];
        let userAddProduct = prompt(`Do you want to buy this product? \n Yes \n No`)
        userAddProduct = userAddProduct.toUpperCase()
        switch (userAddProduct) {
            case "YES":
                result.push(valuePrice.price)
                console.log(result)
                break
        }

        let num = 0
        for (const element of result) {
            num += element
            console.log(num)
        }

        peticionUsuario = prompt(`Enter the name product you want to search for = \n Mouse \n Keyboard \n Headset \n Microphone \n Exit`);
        peticionUsuario = peticionUsuario.toUpperCase();

    }


}

miFuncion(producto)