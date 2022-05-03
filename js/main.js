const saludar = () => {alert("Hola " + usuario + " un gusto que estés en nuestra tienda!!")};

function mostrarProductos() {
    let salida = "";
    let item = 1;

    for (let producto of productos) {
    salida += item + " - Nombre: " + producto.nombre + " - Marca: " + producto.marca + " - Precio: $" + producto.precio + "\n";
    item++
    }
    return salida;
}

function agregarCarrito(producto) {
   carrito.push(producto);
}

function mostrarCarrito() {
    let salida = "";
    total = 0;
    for (let producto of carrito) {
        salida += " - Nombre: " + producto.nombre + " - Marca: " + producto.marca + " - Precio: $" + producto.precio + "\n";
    }
    alert("Sus productos comprados son: \n\n" + salida);
    total = carrito.reduce((acc, el) => acc + el.precio, 0);
    alert("Total a pagar $" + total);
    alert("Quedó registrado su pago con fecha: " + new Date().toLocaleDateString());
    alert("Gracias por su compra!");
}

function comprarProducto() {
    let salir = "";
    while (salir != "ESC") {
        let listaProductos = mostrarProductos();
        let productoElegido = prompt("Ingrese el número del producto que quiere comprar: \n\n" + listaProductos);
        let posicion = productos[(productoElegido - 1)];
        agregarCarrito(posicion);
        salir = (prompt("Desea seguir comprando? (Con ESC sale)")).toUpperCase();
    }
    mostrarCarrito();
}

let carrito = [];
let usuario = prompt("A continuación ingrese su nombre para poder comprar: ");
saludar();
let opcion = parseInt(prompt("Ingrese una opción: \n1 Comprar \n2 Cerrar Sesión"));
if (opcion == 1) {
    comprarProducto();
} else if (opcion == 2) {
    alert("Adios, gracias por su visita!");
}







