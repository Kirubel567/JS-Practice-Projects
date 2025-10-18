const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn'); 
const color = document.querySelector('.color'); 

btn.addEventListener('click', function(){
    let chosenColor = colors[Math.floor(Math.random()*4)]; 
    document.querySelector('body').style.backgroundColor = chosenColor;
    document.querySelector('.color').innerHTML = chosenColor;  
})