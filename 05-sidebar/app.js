//get the two buttons
const closeBtn = document.querySelector('.close-btn');  
const openBtn = document.querySelector('.sidebar-toggle'); 
const sideBar = document.querySelector('.sidebar'); 

//add event listeners 
closeBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('show-sidebar'); 
}); 

openBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('show-sidebar'); 
})