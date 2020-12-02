let productos = [
    {
        nombreProd: "Remera",
        genero: "Hombre",
        talle: "M",
        precio: "$800",
    },
    {
        nombreProd: "Remera",
        genero: "Mujer",
        talle: "S",
        precio: "$1000",
    },
    {
        nombreProd: "Jean",
        genero: "Hombre",
        talle: "40",
        precio: "$2200",
    },
    {
        nombreProd: "Jean",
        genero: "Mujer",
        talle: "36",
        precio: "$3000",
    },
    {
        nombreProd: "Sweater",
        genero: "Hombre",
        talle: "S",
        precio: "$1500",
    },
    {
        nombreProd: "Sweater",
        genero: "Mujer",
        talle: "S",
        precio: "$1800",
    },
];

window.addEventListener("load", () => {
    actualizar();
});


const cuerpo = document.querySelector("#cuerpo");
let actualizar = () => { 
    cuerpo.innerHTML = "";

    productos.forEach((producto, index) => {
        const tr = document.createElement("tr");    //declaro constante tr  /fila/
        tr.classList.add("bg-tr");

        let tdNombre = document.createElement("td");    // nombre de producto   /contenido de fila/
        tdNombre.textContent = producto.nombreProd;
        tr.appendChild(tdNombre);
        
        let tdGenero = document.createElement("td");    // genero
        tdGenero.textContent = producto.genero;
        tr.appendChild(tdGenero);

        let tdTalle = document.createElement("td");    // talle
        tdTalle.textContent = producto.talle;
        tr.appendChild(tdTalle);

        let tdPrecio = document.createElement("td");    // precio
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);

        let editar = document.createElement("button");
        editar.innerHTML = "Editar";
        editar.classList.add("btn-editar");
        tr.appendChild(editar);

        let eliminar = document.createElement("button");
        eliminar.innerHTML = "Borrar";
        eliminar.classList.add("btn-borrar");
        eliminar.addEventListener('click', () => eliminarProducto(index));
        tr.appendChild(eliminar);

        cuerpo.appendChild(tr);
    })  
}

let eliminarProducto = index =>{    //recibo index por parametro
   productos = productos.filter((productos, i) => i !== index);  // comparo que el index sea distinto que i
   actualizar();
}

