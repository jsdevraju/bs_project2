//Sticky Navbar
const navbar = document.querySelector(".navbar");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const min2 = document.querySelector(".min2");
const sec2 = document.querySelector(".sec2");
const min3 = document.querySelector(".min3");
const sec3 = document.querySelector(".sec3");
const min4 = document.querySelector(".min4");
const sec4 = document.querySelector(".sec4");


window.addEventListener("scroll", () => {
  navbar.classList.toggle("active", window.scrollY > 0);
});

//Auction Time Counter
let deadline = new Date("Aug 5, 2022 15:37:25").getTime();
let x = setInterval(() => {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = `${days}`;
  document.querySelector(".hours").innerHTML = `${hours}`;
  min.innerHTML = `${minutes}`;
  sec.innerHTML = `${seconds}`;
  document.querySelector(".days2").innerHTML = `${days}`;
  document.querySelector(".hours2").innerHTML = `${hours}`;
  min2.innerHTML = `${minutes}`;
  sec2.innerHTML = `${seconds}`;
  document.querySelector(".days3").innerHTML = `${days}`;
  document.querySelector(".hours3").innerHTML = `${hours}`;
  min3.innerHTML = `${minutes}`;
  sec3.innerHTML = `${seconds}`;
  document.querySelector(".days4").innerHTML = `${days}`;
  document.querySelector(".hours4").innerHTML = `${hours}`;
  min4.innerHTML = `${minutes}`;
  sec4.innerHTML = `${seconds}`;
  if (t < 0) {
    clearInterval(x);
    document.querySelector(".bid_time").innerHTML = "EXPIRED";
  }
}, 1000);
