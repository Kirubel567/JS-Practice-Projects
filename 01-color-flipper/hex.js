const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.btn'); 
const color = document.querySelector('.color'); 

btn.addEventListener('click', function(){
      //find six random colors and concatinate them 
      let randomColor = "#"; 
      for(let i = 0; i < 6; i++){
        randomColor += randomNumberGenerator(); 
      } 
      //select the color span and the body to color them
      document.querySelector('.color').textContent = randomColor; 
      document.body.style.backgroundColor = randomColor; 
}); 

function randomNumberGenerator(){
    return hex[Math.floor(Math.random()*hex.length)]; 
}