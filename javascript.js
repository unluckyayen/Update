// toggle class active
const navbarNav=document.querySelector
('.navbar-nav');
// ketika hamburger menu di clik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active')
}

//klik di luar sidebar untuk mwnghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click',function(ev){
    if(!hamburger.contains(ev.target) && !navbarNav.contains(ev.target)){
        navbarNav.classList.remove('active');
    }
    
});

