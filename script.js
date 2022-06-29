let nav = document.querySelector('.navbar');
window.onscroll = ()=>{
    this.scrollY > 20 ? nav.classList.add('sticky'):
    nav.classList.remove('sticky');
};

let items = document.querySelector('.items');
let ham = document.querySelector('.ham');
let close = document.querySelector('.close');
ham.addEventListener("click", ()=>{
    items.classList.add('resp');
    ham.setAttribute('style', 'display:none');
    close.setAttribute('style', 'display:block');
});
close.addEventListener('click',()=>{
    close.setAttribute('style', 'display:none');
    ham.setAttribute('style', 'display:block');
    items.classList.remove('resp');
});