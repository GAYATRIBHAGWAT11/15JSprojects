const naveToggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');

naveToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
});