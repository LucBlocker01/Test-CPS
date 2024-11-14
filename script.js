let timer = 0;
let clics = 0

const button = document.querySelector("button")

document.querySelector("button").addEventListener("click", () => {
  if (button.innerHTML === "Cliquez sur moi!") {
    timer = 10;
    document.getElementById("message").innerHTML = timer;
    startTimer();
  }
  clics += 1;
  button.innerHTML = clics;
})

function startTimer() {
  setTimeout(() => {
    timer -= 1;
    startTimer();
    document.getElementById("message").innerHTML = timer;
  }, 1000)
}