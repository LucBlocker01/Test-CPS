let timer = 0;
let clics = 0;
let cps = 0;

const button = document.querySelector(".cps")
const timers = document.querySelectorAll(".buttonsList button")
localStorage.setItem("timer", 5)

timers.forEach((timer) => {
  timer.addEventListener("click", () => {
    console.log(timer.classList.value)
    switch(timer.classList.value) {
      case "5s noleft" :
        localStorage.setItem("timer", 5)
        break;
      case "10s" :
        localStorage.setItem("timer", 10)
        break;
      case "30s" :
        localStorage.setItem("timer", 30)
        break;
      case "1m" :
        localStorage.setItem("timer", 60)
        break;
    }
  })
})

button.addEventListener("click", () => {
  if (button.innerHTML === "Cliquez sur moi!") {
    timer = localStorage.getItem("timer");
    document.getElementById("message").classList.remove("hide")
    document.getElementById("message").innerHTML = timer;
    startTimer(timer);
  }
  if (timer >= 0) {
    clics += 1;
    button.innerHTML = clics;
  }
})

function startTimer(timerStorage) {
  setTimeout(() => {
    if (timer === 0) {
      console.log(timerStorage)
      timer = -1;
      cps = clics/timerStorage;
      document.getElementById("message").innerHTML = "Temps écoulé! Score : "+cps.toFixed(1)+" clics par seconde";
    } else {
      timer -= 1;
      startTimer(timerStorage);
      document.getElementById("message").innerHTML = timer;
    }
  }, 1000)
}