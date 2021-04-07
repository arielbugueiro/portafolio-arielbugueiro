const btnSwitch = document.querySelector('#switch');
//const btnSwitch = document.documentElement.classList.toggle('dark-mode');
btnSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})
