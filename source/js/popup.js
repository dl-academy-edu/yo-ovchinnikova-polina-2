const popup = document.querySelector('.popup') 
const popupBtn = document.querySelector('.button-js') 
const popupClose = document.querySelector('.close-js') 
 
popupBtn.addEventListener('click', function() { 
    popup.classList.add('open') 
}) 
 
popupClose.addEventListener('click', function() { 
    popup.classList.remove('open') 
})