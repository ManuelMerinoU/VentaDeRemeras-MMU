// ''


/*function saludo(nombre){
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

//let remeras= 'Remeras' 
//let stockRemeras= 100 
//let preRem= 950

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

let compra= prompt("En el caso de que quiera Comprar nuestros productos, ¿Desea remeras o calcos? ")

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

}*/
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
        confirmButtonText: 'Genial!'
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

    Swal.fire({
        title: 'Bienvenido',
        text: 'Por el Momento quedara registrado en Nuestra Base de datos, pero no tendra una cuenta propia',
        icon: 'warning',
        confirmButtonText: 'Genial!'
    })
}

localStorage.setItem("formLoginUs", JSON.stringify(formLogin));
