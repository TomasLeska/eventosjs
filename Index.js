addEventListener("DOMContentLoaded", (event)=> {

const listaProductos = [
    {
        id:1,
        nombre:"Kit razer",
        precio: 12000,
        cantidad: "5"
    },
    {
        id:2,
        nombre:"Kit Logitech",
        precio: 9000,
        cantidad: "5"
    },
    {
        id:3,
        nombre:"Kit HyperX",
        precio: 8000,
        cantidad: "5"
    },
    {
        id:4,
        nombre:"Kit Red-dragon",
        precio: 5000,
        cantidad: "5"
    },
]

for (producto of listaProductos){
    console.log(producto.nombre);
    console.log(producto.precio);
}


function aumentoDolar() {
    const listaNueva = listaProductos.map ((el) => {
        return {
            id: 1,
            nombre: el.nombre,
            precio: el.precio * 1.5,
            cantidad: el.cantidad = 5
            
        }
    })
    console.log(listaNueva)
}
aumentoDolar()

function verificacionEdad(edad) {
    if (edad => 18) {
        return true;
    } else{
        return confirm('¿Tienes permiso de tus padres?')
    }
}
let edad = prompt('¿Qué edad tienes?')
if (verificacionEdad(edad)) {
    alert('Acceso otorgado')
} else {
    alert('Acceso denegado')
}

let kitRazer = 12000
let kitLogitech = 9000
let kitHyperx = 8000
let kitReddragon = 5000
let precioProducto = 0

let seleccionUsuario = parseInt(prompt("Bienvenido a gialE's \n 1- Ver kits disponibles  \n 2 - Salir"))


let seleccionKit = parseInt(prompt("¿Que kit quiere llevar? \n 1.Kit Razer $ "+ kitRazer + " \n 2.Kit Logitech $ "+ kitLogitech + " \n 3.Kit HyperX $"+ kitHyperx + "\n 4.Kit Red-dragon $"+ kitReddragon + ""))
switch (seleccionKit) {
    case 1:
        alert("Usted selecciono un kit Razer");
        precioProducto = kitRazer
        break;
    case 2:
        alert("Usted selecciono un kit Logitech");
        precioProducto = kitLogitech
        break;
    case 3:
        alert("Usted selecciono un kit HyperX");
        precioProducto = kitHyperx
        break;
    case 4:
        alert("Usted selecciono un kit Red-dragon");
        precioProducto = kitReddragon
        break;
    default:
        alert('Opcion no valida');
        break;
}

let total = precioProducto
alert("El total de su compra es: $" + total)
if((total >5000) && (total <=12000)) {
    alert("Su envio sera gratuito")
} else if (total <=5000) {
    alert ("El costo de envio es $500")
}


// SE UBICA EN VARIABLE EL BOTON Y EL CONTENEDOR DONDE SE VA A MOSTRAR LA INFORMACION
let botonMostrar = document.getElementById("botonMostrar");
let DivMostrarCompra = document.getElementById("mostrarCompra");


// SE LE AGREGA UN EVENTO AL BOTON
botonMostrar.addEventListener("click", (e)=> {

    // SE MUESTRA LA EDAD DEL USUARIO INGRESADO
    let h1Edad = document.createElement("h1");
    h1Edad.innerText = `La edad del usuario es: ${edad}`;
    DivMostrarCompra.append(h1Edad);
    
    for (let producto of listaProductos) {
        if (seleccionKit = listaProductos[producto].id)
        { 
            
            let ulCompra = document.createElement("ul");

                 let liID = document.createElement("li");
                 liID.innerText = `Kit ID: ${listaProductos[producto].id}`;
            
                let liKit = document.createElement("li");
                liKit.innerText = `Kit seleccionado: ${listaProductos[producto].nombre}`;
                
                let liPrecio = document.createElement("li");
                liPrecio.innerText = `Kit Precio: ${listaProductos[producto].precio}`;
                
                let liCantidad = document.createElement("li");
                liCantidad.innerText = `Kit cantidad: ${listaProductos[producto].cantidad}`;
                
                
                    ulCompra.append(liKit);
                    ulCompra.append(liID);
                    ulCompra.append(liPrecio);
                    ulCompra.append(liCantidad);
                    DivMostrarCompra.append(ulCompra);
            }else{
                console.log("incorrecto");
            }
        
    }
    




 });

});