// DATOS
const mainAll = document.querySelector ("main");
const elementPJ = document. querySelector("person");
const sun = document. querySelector(".day");
const moon = document. querySelector(".night");
const bodyAll = document.querySelector("body");
const theme = document.querySelector(".theme");
let movePJ = 0;
let skyPJ = 0;
let imgPJ = "avatar-prueba.webp";
let perfilPJ = true;
let jumpPJ = false;
let personaje;

//INCIO
console.log("JS prendido");
pintarPJ();

//EVENTOS
document.addEventListener ("keydown", (ev) =>{
    if (ev.key === "d" || ev.key === "D" || ev.key === "ArrowRight") {
        perfilPJ = true;
        caminar();
        pintarPJ();
    } else if (ev.key === "a" || ev.key === "A" || ev.key === "ArrowLeft") {
        perfilPJ = false;
        caminar();
        pintarPJ();
    } else if (ev.key === "w" || ev.key === "W" || ev.key === "ArrowUp") {
        jumpPJ = true;
        caminar();
        pintarPJ();
    } 
});

sun.addEventListener ("click", (ev) =>{
    bodyAll.classList.add ("sun_body");
    bodyAll.classList.remove ("moon_body");
    moon.classList.remove("theme_block");
    sun.classList.add("theme_block");
});

moon.addEventListener ("click", (ev) =>{
    bodyAll.classList.add ("moon_body");
    bodyAll.classList.remove ("sun_body");
    moon.classList.add("theme_block");
    sun.classList.remove("theme_block");
});

// FUNCION DEL PERSONAJE
function pintarPJ(ev) {
    personaje = 
        `<div class="person" 
            style="margin-left: ${movePJ}px; margin-bottom: ${skyPJ}px;">
            <img src="${imgPJ}" alt="imagen de tu personaje">
        </div>`;
    mainAll.innerHTML = personaje;
}

function caminar(){
     if (perfilPJ === true) {
        movePJ = movePJ + 10;
        imgPJ = "avatar-prueba.webp";
    } else if (perfilPJ === false){
        movePJ = movePJ - 10;
        imgPJ = "avatar-prueba_back.webp";
    } 
    if (jumpPJ === true){
        skyPJ = 30;   
        setTimeout(()=>{
            skyPJ = 0; 
            jumpPJ = false;
            pintarPJ(); 
        }, 100);
    }
}

const skyAll = document.querySelector(".sky");
let skyElement;
let skyMove = 0;
let skyMove2 = 1000;

paintSky();
for (let i = 1; i <= 1000; i++) {
    setTimeout(() => {
    paintSky();
    }, i * 750);
}


function paintSky(){
    skyMove = skyMove - 10;
    skyMove2 = skyMove2 - 10;
    skyElement =
        `<div class="sky_day" style="left: ${skyMove}px;">
            <div class="nube1 nube"><img src="nube.png" alt="img nube"></div>
            <div class="nube2 nube"><img src="nube.png" alt="img nube"></div>
            <div class="nube3 nube"><img src="nube.png" alt="img nube"></div>
        </div>`;
    skyElement2 =
        `<div class="sky_day" style="left: ${skyMove2}px;">
            <div class="nube1 nube"><img src="nube.png" alt="img nube"></div>
            <div class="nube2 nube"><img src="nube.png" alt="img nube"></div>
            <div class="nube3 nube"><img src="nube.png" alt="img nube"></div>
        </div>`;
    skyAll.innerHTML = skyElement + skyElement2;
    if (skyMove === -1000) {
    skyMove = 1000;
    }
    if (skyMove2 === -1000) {
    skyMove2 = 1000;
    }
}