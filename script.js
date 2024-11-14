let timer = 0;
let clics = 0;
let cps = 0;

const button = document.querySelector("button")

document.querySelector("button").addEventListener("click", () => {
  if (button.innerHTML === "Cliquez sur moi!") {
    timer = 10;
    document.getElementById("message").innerHTML = timer;
    startTimer();
  }
  if (timer >= 0) {
    clics += 1;
    button.innerHTML = clics;
  }
})

function startTimer() {
  setTimeout(() => {
    if (timer === 0) {
      timer = -1;
      cps = clics/10;
      document.getElementById("message").innerHTML = "Temps écoulé! Score : "+cps.toFixed(1)+" clics par seconde";
    } else {
      timer -= 1;
      startTimer();
      document.getElementById("message").innerHTML = timer;
    }
  }, 1000)
}