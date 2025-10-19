// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const list = document.querySelector('ul'); 
const btn = document.querySelector('.nav-toggle'); 

// btn.addEventListener('click', ()=>{
//     if(list.classList.contains('list')){
//         list.classList.remove('list'); 
//         list.classList.add('show-links'); 
//     }else{
//         list.classList.add('list'); 
//         list.classList.remove('show-links');
//     }
// })

btn.addEventListener('click', () => {
    list.classList.toggle('show-links');
});
