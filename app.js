 //const com cores do arco iris

const colors = ["green", "red", "yellow",
"orange", "blue", "magenta", "cyan", "black", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  // obter um número aleatório entre 0 - 3 
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}