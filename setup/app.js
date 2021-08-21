const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  //se obtiene un numero aleatorio entre el 0 y 3
  const randomNumber = getRandomNumber(colors.length);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(max)
{
  return Math.floor(Math.random() * max);
}
