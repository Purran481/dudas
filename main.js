const pedirDatos = async () => {
    const respuesta = await fetch("file.json");
    const data = await respuesta.json();
    console.log(data)

    return data;
}

const hola = pedirDatos()
console.log(hola)


hola.forEach(item => {
    console.log(item)
})
