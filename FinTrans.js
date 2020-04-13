const finTransMenu = document.querySelector('#fin-trans-menu');
const finTransDiv = document.querySelector('.fin-trans');

finTransMenu.addEventListener('click', ()=>{

    if (finTransDiv.style.display === 'none') {
        finTransDiv.style.display = 'flex';
    } else {
        finTransDiv.style.display = 'none';
    }

});