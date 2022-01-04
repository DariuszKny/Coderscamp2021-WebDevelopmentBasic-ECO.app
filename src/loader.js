export function loadModule(callback){

let preloader = document.getElementById('preloader');
preloader.style.display  = "block";
callback();
setTimeout(() => {
    preloader.style.display = "none";
}, 400)
}