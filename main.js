let colorbutton = document.querySelectorAll('.color-button');
colorbutton.forEach(color => {
    color.addEventListener('click', () => {
        let datacolor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', datacolor);
    })
})