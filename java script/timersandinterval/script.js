// setInterval(function(){
//     console.log("hello");
// },5000)


// let tm= setTimeout(function(){
//     console.log("hello");
// },5000)

// clearTimeout(tm);

// let count = 10;

// let interval = setInterval(function () {
//   if (count >= 1) {
//     count--;
//     console.log(count);
//   } else clearInterval(interval);
// }, 1000);

let count = 0;
let seconds = 20;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let intv = setInterval(
  function () {
    if (count < 99) {
      count++;
      progress.style.width = `${count}%`;
      percentText.textContent = `${count}%`;
    } else {
      document.querySelector("h2").textContent = "Downloaded.";
      clearInterval(intv);
    }
  },
  (seconds * 1000) / 100
);