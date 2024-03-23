let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hhrotatation = hh * 30 + mm / 2;
  let mmrotation = 6 * mm;
  let ssrotation = 6 * ss;
  hr.style.transform = `rotate(${hhrotatation}deg)`;
  min.style.transform = `rotate(${mmrotation}deg)`;
  sec.style.transform = `rotate(${ssrotation}deg)`;
}
setInterval(displayTime, 1000);
