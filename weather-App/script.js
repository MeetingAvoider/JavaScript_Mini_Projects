const API = "f3d2dbbd4f0a3c348da16c9f2cf3fe75";
const searchEl = document.querySelector("#search");
const formEl = document.querySelector("form");
const informationEl = document.querySelector(".information");
const weatherInformationEl = document.querySelector(".weather-information");
console.log(formEl);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchEl.value;
  console.log(city);
  getWeather(city);
});
async function getWeather(city) {
  try {
    const response = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    informationEl.querySelector("img").src = iconUrl;
    const value = Math.round(data.main.temp);
    console.log(value);
    informationEl.querySelector("#value").innerHTML = value;
    informationEl.querySelector("#condition").innerHTML =
      data.weather[0].description;
    weatherInformationEl.querySelector("#wind").innerHTML = data.wind.speed;
    weatherInformationEl.querySelector("#humidity").innerHTML =
      data.main.humidity;
    weatherInformationEl.querySelector("#pressure").innerHTML =
      data.main.pressure;
  } catch (error) {
    informationEl.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
