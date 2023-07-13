const shopContent =document.getElementById("shopContent");
const verCarrito =document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarroto = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async ()=>{
    const response = await fetch("JS/data.json"); /*no recuerdo otra vez la wea de los lugares xdxdxd a ver si lo recuerdo antes de que lo deba presentar a los demas*/
    const data = await response.json();
    constole.log(data);
};

getProducts()

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML= `
        <img scr="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
             id: product.id,
             img: product.img,
             nombre: product.nombre,
             precio: product.precio,
             cantidad: product.cantidad,
            });
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        }
    });
});

