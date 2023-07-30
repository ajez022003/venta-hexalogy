function irEspecificaciones(){
    window.open('http://127.0.0.1:5500/especificaciones.html')
}
function irCarrito(){
    window.open('http://127.0.0.1:5500/carrito.html')
}
function irCelulares(){
    window.open('http://127.0.0.1:5500/celulares.html')
}
function irIniciarSesion(){
    window.open('http://127.0.0.1:5500/iniciar-sesion.html')
}
function irCrearCuenta(){
    window.open('http://127.0.0.1:5500/crear-cuenta.html')
}
function irEnvio(){
    window.open('http://127.0.0.1:5500/envio.html')
}
function irModoDePago(){
    window.open('http://127.0.0.1:5500/modo-de-pago.html')
}
function irResumenCompra(){
    window.open('http://127.0.0.1:5500/resumen-compra.html')
}

function E(selector, parent) {
    if (selector instanceof HTMLElement) 
        return selector;

    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem)=>
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if(hasClass(target, "tab"))
            radioClass(target, "active");
        let linkedTab = E("." = target.id)[0];
        
        radioClass(linkedTap, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("."+active.id)[0], "visible");
    }
}

tabs(".menu-nav")

let loadMoreBtn1 = document.querySelector('#load-more');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes  = [...document.querySelectorAll('.box-container-1 .box-1')];
    for(var i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].computedStyleMap.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes  = [...document.querySelectorAll('.box-container-2 .box-2')];
    for(var i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].computedStyleMap.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }
}

let loadMoreBtn3 = document.querySelector('#load-more');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes  = [...document.querySelectorAll('.box-container-3 .box-3')];
    for(var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].computedStyleMap.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'
    }
}
