let burgerMenu = document.querySelector('.burger_menu');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    burgerMenu.style.top = '0px';
})
close.addEventListener('click', ()=>{
    burgerMenu.style.top = '-650px';
})

