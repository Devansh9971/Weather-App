
let btn = document.getElementById("search");
let city_name = document.getElementById("city_name");
let temperature = document.getElementById("temp");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let mintemp = document.getElementById("mintemp");
let maxtemp = document.getElementById("maxtemp");
console.log(city_name);

btn.addEventListener("click", async function(e){
    let city = city_name.value;
    let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`
    );    
    let weather = await data.json();
    console.log(weather); 
    temperature.textContent = weather.main.temp +".Celsius";   
    wind.textContent = weather.wind.speed +"m/s";   
    humidity.textContent = weather.main.humidity +"%";   
    mintemp.textContent = weather.main.temp_min +".Celsius";   
    maxtemp.textContent = weather.main.temp_max +".Celsius";   
});






































