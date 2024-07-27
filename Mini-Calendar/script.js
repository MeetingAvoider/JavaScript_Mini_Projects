const staticDay = document.querySelector(".day");
const staticMonth = document.querySelector(".month");
const staticYear = document.querySelector(".year");
const staticDate = document.querySelector(".date");
const myDate = new Date();
const month = myDate.getMonth();
const day = myDate.getDay();
const date = myDate.getDate();
const year = myDate.getFullYear();

staticMonth.innerHTML = `<h1> ${myDate.toLocaleString("en", {
  month: "long",
})} </h1>`;
staticDay.innerHTML = `<h1>${myDate.toLocaleString("en", {
  weekday: "long",
})}</h1>
`;
staticDate.innerHTML = `<h1>${date}</h1>`;
staticYear.innerHTML = `<h1>${year}</h1>`;
