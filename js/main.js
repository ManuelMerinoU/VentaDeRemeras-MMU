// ''


function saludo(nombre){
    alert("HOLA " + nombre + " Me encuentro Trabajando en esta Pagina =)");
}

saludo("Tutor")

let userName= prompt("Que tal, Escriba su Nombre Por Favor!!!");

if (userName == ""){
    alert("No Ingreso Un Nombre");
}

else if ((userName == "Tutor") || (userName == "Profe")){

    alert("Hola " + userName + "" + " Disfrutá Nuestro Sitio Web =)");
}

else if ((userName == "Manu") || (userName == "Meri")){

    alert("Hola " + userName + "" + " Eres el Creador");
}

else{
    alert("Hola " + userName + "" + " Disfrutá Nuestro Sitio Web =)");
}

const sobreMi = {
    nombre: 'Manuel',
    apellido: 'Merino Urquiza',
    pais: 'Argentina',
    estudios: 'Carrera de FullStack en Coder',
    trabajando: true,
    edad: 21,
}
console.log(sobreMi);

/*let remeras= 'Remeras' 
let stockRemeras= 100 
let preRem= 950*/

// let calcos= 'Calcos' 
// let stockCalcos= 200  
// let preCal= 250


const tlp = ["remeras", 'calcos', 'dibujos'];

console.log(tlp.length);
console.log(tlp.indexOf('calcos'));

localStorage.setItem("productos", JSON.stringify (tlp));

function Productos (nombreProducto, stockProducto, precioProducto){
    this.nombre = nombreProducto;
    this.stock = stockProducto;
    this.precio = precioProducto;
} 

const producto1 = new Productos('Remeras', 100, 950);
const producto2 = new Productos('Calcos', 200, 250);

let cantidadProductos = parseInt(prompt("Ingrese la Cantidad de Productos Distintos que desea, ENTRE 1 y 2 (Los productos que tenemos son Remeras o Calcos), o marque dos veces el  mismo en el caso que su compra supere el stock deseado."))

let compra= prompt("En el caso de que quiera Comprar nuestros productos, ¿Desea Remeras o Calcos? ")

function stock(cantidad, producto, stock){
    alert("No tenemos Disponible la cantidad total de " + cantidad + " " + producto + ", Puede comprar un Maximo de " + stock)
}

console.log( tlp.some((el) => el.producto1 == "Cuadros"))

for(let i = 0; i < cantidadProductos; i++ ){

    if(compra == producto1.nombre){
        let cantCompradaR= parseInt(prompt("¿Cuantas Remeras desea?"));
    
        if(cantCompradaR <= producto1.stock){
    
            let totalCompra = cantCompradaR * producto1.precio;
    
            alert("Su compra de " + cantCompradaR + producto1.nombre + " Tiene un Precio de $" + totalCompra)
        }
        else{
            stock(cantCompradaR, producto1.nombre, producto1.stock)
        }
    }
    else if(compra == producto2.nombre){
        let cantComprada= parseInt(prompt("¿Cuantas Planchas o calcomanias desea?"));
    
        if(cantComprada <= producto2.stock){
    
            let totalCompra = cantComprada * producto2.precio;
    
            alert("Su compra de " + cantComprada + " " + producto2.nombre + " Tiene un Precio de $" + totalCompra)
        }
        else{
            stock(cantComprada, producto2.nombre, producto2.stock)
        }
    }
    else{
        alert("No Contamos con ese Producto, Por favor Vuelva a Poner el Producto que desea, Muchas Gracias!!!")
    }

}
// con alt gr + al lado del entre ``

let bienvenido = document.createElement("h2");

bienvenido.innerText = "Bienvenido a Mi Pagina web"

document.body.prepend(bienvenido);


//                                      Boton info

let botonInfo = document.querySelector ('.btninfo')

botonInfo.addEventListener ('click', infopag);

function infopag(){
    Swal.fire({
        title: 'Bienvenido',
        text: 'Esta es una pagina que le estoy desarrollando a una amiga para su proyecto personal, el cual consta en la venta de remeras grabadas con cualquier tipo de diseño, Calcos y en un futuro dibujos o ilustrasiones propias',
        icon: 'info',
        confirmButtonText: 'cool'
    })
}



//                                      Formulario

let formLogin = document.getElementById ("formlogin");

formLogin.addEventListener("submit", validarformulario);

function validarformulario (e) {
    e.preventDefault ();

    let formLogin = e.target

    console.log (e.target);
    console.log (formLogin.children [ 0].value);
    console.log (formLogin.children [ 1].value);
    console.log (formLogin.children [ 2].value);
}

localStorage.setItem("formLoginUs", JSON.stringify(formLogin));



//                                       CARRITO 

const divisa = '$';
let carritoarr =[];

const contenedorDeLosProductos = document.getElementById("contPrdt");
const carrito = document.querySelector("#listafc");
const TotalFc = document.querySelector("#totalfc");
const botonBorrar = document.querySelector("#borrarfc");
const botonComprar = document.querySelector("#comprarfc");
const miLocalStorage = window.localStorage;



let listaDeProductos = [
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

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => console.log(json));

fetch('data.json')
.then((resp) => resp.json())
.then((infoprd) => console.log (infoprd));

fetch('data.json')
.then((resp) => resp.json())
.then((infoprd) => listaDeProductos = infoprd);


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
        const miBoton = document.createElement('buttonrr');
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