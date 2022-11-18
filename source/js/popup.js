const popup = document.querySelector('.popup') 
const popupBtn = document.querySelector('.button-js') 
const popupClose = document.querySelector('.close-js') 

// const mobileMenu = document.querySelector('.header__mobile') 
// const mobileOpenBtn = document.querySelector('.open-js') 
// const mobileCloseBtn = document.querySelector('.close-js') 

// mobileOpenBtn.addEventListener('click', function() { 
//     header__mobile.classList.add('mobile__open') 
// }) 
 
// mobileCloseBtn.addEventListener('click', function() { 
//     header__mobile.classList.remove('mobile__open') 
// })


 
popupBtn.addEventListener('click', function() { 
    popup.classList.add('open') 
}) 
 
popupClose.addEventListener('click', function() { 
    popup.classList.remove('open') 
})