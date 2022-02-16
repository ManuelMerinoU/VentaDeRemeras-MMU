
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

let remeras= 'Remeras' 
let stockRemeras= 100 
let preRem= 950

let calcos= 'Calcos' 
let stockCalcos= 200  
let preCal= 250 

let cantidadProductos = parseInt(prompt("Ingrese la Cantidad de Productos Distintos que desea, ENTRE 1 y 2 (Los productos que tenemos son Remeras o Calcos), o marque dos veces el  mismo en el caso que su compra supere el stock deseado."))

let compra= prompt("En el caso de que quiera Comprar nuestros productos, ¿Desea Remeras Estampadas o Calcos? ")

function stock(cantidad, producto, stock){
    alert("No tenemos Disponible la cantidad total de " + cantidad + " " + producto + ", Puede comprar un Maximo de " + stock)
}

for(let i = 0; i < cantidadProductos; i++ ){

    if(compra == remeras){
        let cantCompradaR= parseInt(prompt("¿Cuantas Remeras desea?"));
    
        if(cantCompradaR <= stockRemeras){
    
            let totalCompra = cantCompradaR * preRem;
    
            alert("Su compra de " + cantCompradaR + remeras + " Tiene un Precio de $" + totalCompra)
        }
        else{
            stock(cantCompradaR, remeras, stockRemeras)
        }
    }
    else if(compra == calcos){
        let cantComprada= parseInt(prompt("¿Cuantas Planchas o calcomanias desea?"));
    
        if(cantComprada <= stockCalcos){
    
            let totalCompra = cantComprada * preCal;
    
            alert("Su compra de " + cantComprada + " " + calcos + " Tiene un Precio de $" + totalCompra)
        }
        else{
            stock(cantComprada, calcos, stockCalcos)
        }
    }
    else{
        alert("No Contamos con ese Producto, Por favor Vuelva a Poner el Producto que desea, Muchas Gracias!!!")
    }

}