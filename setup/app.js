const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector("color");

btn.addEventListener("click", function(){
  //se obtiene un numero aleatorio entre el 0 y 3
  const randomNumber = 2;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textComponent = colors[randomNumber];
});
