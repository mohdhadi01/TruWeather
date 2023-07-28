function show() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("Menu").classList.toggle("active");
}
let weather = {
  apikey: "c42da9275d7de1bfeba4f0a51895d137",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayweather(data));
  },
  displayweather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".condition").innerText = description;
    document.querySelector(".temperature").innerText = temp + " °C";
    document.querySelector(".humidity").innerText =
      "Humidity :  " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed :  " + speed + "m/s";
  },
  search: function () {
    this.fetchweather(document.querySelector(".enter-city").value);
  },
};
document.querySelector("#search").addEventListener("click", function () {
  weather.search();
});
// document.querySelector(".enter-city").addEventListener("keyup", function (event){
//     if (event.key="Enter"){
//         weather.search();
//     }
// })
