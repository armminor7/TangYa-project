const finTransMenu = document.querySelector('#fin-trans-menu');
const finTransDiv = document.querySelector('.fin-trans');


finTransMenu.addEventListener('click', ()=>{

    if (finTransDiv.style.display === 'none') {
        finTransDiv.style.display = 'flex';
        let op = 0;

        let fadeIn = setInterval(()=>{
            finTransDiv.style.opacity = op;
            op += 0.05;
            if (op >= 1) {clearInterval(fadeIn)};
        },15);
    } else {
        finTransDiv.style.display = 'none';
        finTransDiv.style.opacity = '0';
    }

});