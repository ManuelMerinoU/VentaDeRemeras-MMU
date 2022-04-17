// ''                                 FETCH

const mejoresusers = document.querySelector(".mejoresusers");

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json =>{ 
    json.forEach(users =>{
        const p = document.createElement('p')
        p.innerHTML = users.name
        //console.log(users.name)
        mejoresusers.appendChild(p)
    })
    console.log(json)
});



//                                       CARRITO 

const divisa = '$';
let carritoarr =[];

const contenedorDeLosProductos = document.getElementById("contPrdt");
const carrito = document.querySelector("#listafc");
const TotalFc = document.querySelector("#totalfc");
const botonBorrar = document.querySelector("#borrarfc");
const botonComprar = document.querySelector("#comprarfc");
const miLocalStorage = window.localStorage;

const listaDeProductos = [
    {
        id:1,
        nombre: "Remeras",
        precio: 950
    },
    {
        id:2,
        nombre: "Calcos",
        precio: 250
    },
    {
        id:3,
        nombre: "Dibujos",
        precio: 550
    }

]

//let listaDeProductos = []
// ''                                 FETCH

/*fetch('../data.json')
.then(resp => resp.json())
.then(infoprd =>{ 
    listaDeProductos = infoprd
    console.log (infoprd)
})*/



function cardsProductos () {

    listaDeProductos.forEach((info) => {

        //Caja
        const cajaCardext = document.createElement ("div");
        cajaCardext.classList.add ("cardafuera");

        //CAJA CARD
        const cajaCard = document.createElement ("div");
        cajaCard.classList.add ("card");

        //TITULO
        const tituloCaja = document.createElement ("h3");
        tituloCaja.classList.add ("tituloh3");
        tituloCaja.textContent = info.nombre;

        //PRECIO    
        const precioCaja = document.createElement ("p");
        precioCaja.classList.add ("preciop");
        precioCaja.textContent = `${info.precio}$`;

        //BOTON
        const botonCaja = document.createElement ("button");
        botonCaja.classList.add ("boton");
        botonCaja.textContent = "!LO QUIERO¡";
        botonCaja.setAttribute ("marca", info.id);
        botonCaja.addEventListener ("click", agregarProductosCarrito);

        //
        cajaCard.appendChild(tituloCaja);
        cajaCard.appendChild(precioCaja);
        cajaCard.appendChild(botonCaja);
        cajaCardext.appendChild(cajaCard);
        contenedorDeLosProductos.appendChild(cajaCardext);

    });
}

function agregarProductosCarrito (e){
    carritoarr.push(e.target.getAttribute("marca"));

    rendercarrito();

    guardarCarritoEnLocalStorage();

    Toastify({
        text: `Agregaste este Producto al Carrito`,
        duration: 2000,
        className:"toastitext"
    }).showToast();

}

function rendercarrito () {

    //Borrar carrito
    carrito.textContent = "";

    //saca los duplicados
    console.log(carrito);

    const borraDuplicados = [...new Set(carritoarr)];

    console.log(borraDuplicados);

    //

    borraDuplicados.forEach((item) => {

        const miItem = listaDeProductos.filter((itemBaseDatos) => {
            //borras las id de los productos iguales iguales
            return itemBaseDatos.id === parseInt(item);
        });

        //cuanta las cantidades del producto
        const numeroUnidadesItem = carritoarr.reduce((total, itemid) => {
            //sumas las id
            return itemid === item ? total += 1 : total;
        }, 0);

        //
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btnbrr');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        carrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    TotalFc.textContent = calcularTotal();
}

/**
    * Evento para borrar un elemento del carrito
    */
 function borrarItemCarrito(e) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = e.target.dataset.item;
    // Borramos todos los productos
    carritoarr = carritoarr.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    rendercarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

    Toastify({
        text: "Borraste este Producto!!!",
        duration: 2000,
        style:{
            background:"#ff0000",
            color:"#fff"
        },
        className:"toastitext"
    }).showToast();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    [1,1,1,3,4]
    return carritoarr.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = listaDeProductos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carritoarr = [];
    // Renderizamos los cambios
    rendercarrito();
    // Borra LocalStorage
    localStorage.clear();

    Toastify({
        text: "Borraste todo el carrito!!!",
        duration: 2000,
        style:{
            background:"#ff0000",
            color:"#fff"
        },
        className:"toastitext"
    }).showToast();

}

/**
* Comprar el carrito y vuelve a dibujarlo
*/
function comprarCarrito() {
    // Limpiamos los productos guardados
    carritoarr = [];
    // Renderizamos los cambios
    rendercarrito();

    Toastify({
        text: "Gracias por tu Compra!!!",
        duration: 2000,
        style:{
            background:"#39ee0c",
            color:"#fff"
        },
        className:"toastitext"
    }).showToast();

}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carritoarr));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carritoarr = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
botonBorrar.addEventListener('click', vaciarCarrito);
botonComprar.addEventListener('click', comprarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
cardsProductos();
rendercarrito();


//                          BTN PA ARRIBA

const btn_scrolltop = document.getElementById("btn_scrolltop")
      btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

    window.onscroll = () => {
      add_btn_scrolltop()
    }

    const add_btn_scrolltop = () => {
      if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}