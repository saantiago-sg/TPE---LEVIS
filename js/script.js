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

// --- ACTUALIZAR TABLA ---
const cuerpo = document.querySelector("#cuerpo");
let actualizar = () => {
    cuerpo.innerHTML = "";

    productos.forEach((producto, index) => {
        const tr = document.createElement("tr"); //declaro constante tr  /fila/
        tr.classList.add("bg-tr");

        let tdNombre = document.createElement("td"); // nombre de producto   /contenido de fila/
        tdNombre.textContent = producto.nombreProd;
        tr.appendChild(tdNombre);

        let tdGenero = document.createElement("td"); // genero
        tdGenero.textContent = producto.genero;
        tr.appendChild(tdGenero);

        let tdTalle = document.createElement("td"); // talle
        tdTalle.textContent = producto.talle;
        tr.appendChild(tdTalle);

        let tdPrecio = document.createElement("td"); // precio
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);
        
        let tdEditar = document.createElement("td");
        let editar = document.createElement("button");
        editar.classList.add("btn-editar");
        editar.addEventListener('click', () => editarProducto(index));
        tdEditar.appendChild(editar);
        tr.appendChild(tdEditar);

        let tdEliminar = document.createElement("td");
        let eliminar = document.createElement("button");
        eliminar.classList.add("btn-borrar");
        eliminar.addEventListener('click', () => eliminarProducto(index));
        tdEliminar.appendChild(eliminar);
        tr.appendChild(tdEliminar);

        cuerpo.appendChild(tr);
    })
}

// --- AGREGAR PRODUCTO ---

let btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener('click', () => {
    // containerMod.style.display = 'block';
    // btnClose.style.display = 'block';
    // btnAceptar.style.display = 'block';
    // btnCancelar.style.display = 'block';

    let inpProducto = document.querySelector("#inpProducto").value;
    let inpGenero = document.querySelector("#inpGenero").value;
    let inpTalle = document.querySelector("#inpTalle").value;
    let inpPrecio = document.querySelector("#inpPrecio").value;
    let newProducto = { //creo el objeto
        nombreProd: inpProducto,
        genero: inpGenero,
        talle: inpTalle,
        precio: inpPrecio,
    }
    inpProducto.value = "";
    inpGenero.value = "";
    inpTalle.value = "";
    inpPrecio.value = "";

    productos.push(newProducto);
    actualizar();
})



// ----------------------------------
window.addEventListener("load", () => {
    actualizar();
});

// --- ELIMINAR PRODUCTO ---
let containerMod = document.querySelector("#containerModal");
let btnClose = document.querySelector("#btnClose");
let btnAceptar = document.querySelector("#btnAceptar");
let btnCancelar = document.querySelector("#btnCancelar");

let eliminarProducto = (index) => { //recibo index por parametro
        // containerMod.classList.add("display-block");
        containerMod.style.display = 'block';
        btnClose.style.display = 'block';
        btnAceptar.style.display = 'block';
        btnCancelar.style.display = 'block';
        productos = productos.filter((productos, i) => i !== index); // comparo que el index sea distinto que i
        actualizar();
}



//  --- EDITAR PRODUCTO ---

let editarProducto = (index) => {
    let tbo = document.querySelector("#cuerpo");
    let tr = tbo.childNodes;
    let td = tr[index].childNodes;

    for(let i = 0; i < 4; i++){
        const element = td[i];
        element.innerHTML = '<input type="text" class="form-control mb-2 mr-sm-2 td' + i + '"></input>'
    }
    td[5].innerHTML = "<button class='btn btn-save' id='save'>  </button>";

    let guardar = document.querySelector("#save");  
    guardar.addEventListener("click", () => addProducto(index));

}


function addProducto(index){
    alert("ee");
    let inpProducto = document.querySelector(".td0").value;
    let inpGenero = document.querySelector(".td1").value;
    let inpTalle = document.querySelector(".td2").value;
    let inpPrecio = document.querySelector(".td3").value;
    let newProducto = { //creo el objeto
        nombreProd: inpProducto,
        genero: inpGenero,
        talle: inpTalle,
        precio: inpPrecio,
    }
    inpProducto.value = "";
    inpGenero.value = "";
    inpTalle.value = "";
    inpPrecio.value = "";

    productos[index] = newProducto;
    actualizar();
}


// --- MODAL ---

btnClose.addEventListener("click", (ev) => {
    ev.preventDefault();
    // containerMod.style.display = 'none';
    btnClose.style.display = 'none';
})
btnAceptar.addEventListener("click", (ev) => {
    ev.preventDefault();
    // containerMod.style.display = 'none';
    btnAceptar.style.display = 'none';
})

btnCancelar.addEventListener("click", (ev) => {
    ev.preventDefault();
    // containerMod.style.display = 'none';
    btnCancelar.style.display = 'none';
})




// ---  FILTRAR ----
let filtrar = document.querySelector("#inpFiltrar");
filtrar.addEventListener("keyup", (ev, cuerpo) => {
    ev.preventDefault();
    let inpFiltrar = document.querySelector("#inpFiltrar").value.toLowerCase();
    let cuerpoTable = document.querySelector("#cuerpo");
    for(let i = 0; i < cuerpoTable.childNodes.length; i++){
    
        let encontrar = false;
        let tr = cuerpoTable.childNodes[i];
        let td = tr.childNodes;
        let valor = td[0].childNodes[0].nodeValue.toLowerCase();

        if (valor.indexOf(inpFiltrar) >= 0) {
            encontrar = true;
        }
        if (encontrar) {
            tr.classList.add("mostrarFila");
            tr.classList.remove("ocultar");
        }
        else {
            tr.classList.add("ocultar");
        }

        if (inpFiltrar == "") {
            tr.classList.remove("ocultar");
        }
    }
});

