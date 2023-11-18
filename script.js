let a = 57;
console.log (a);
// let title=document.querySelector(".home__title")
// title.textContent = "Привет из JS!"

let b = document.querySelector(".btn")

b.addEventListener('click',function(){
    alert('Сталкер');
})


let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main.nav')
burger.addEventListener('click' ,function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})