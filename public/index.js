const apikey = 'e00ef041fa87eca609fd7c5bf6ef0870';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metrics&q=';


const searchBox = document.querySelector("#search")
const searchBtn = document.querySelector("#btn")
const images = document.querySelector("#image")




async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    document.querySelector('.hidden').style.display = "block"
    document.querySelector('#block_start').style.display = 'none'

 
    console.log(data)

    document.querySelector("#name").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML  = Math.round(data.main.temp) + "°C"
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind_speed").innerHTML = data.wind.speed + "Km/hr";


}

if(data.weather[0].main == 'Clouds'){
    images.src = './cloudy_weather.png'
}
else if(data.weather[0].main == 'Clear'){
    images.src = './sunny_weather.png'
}
else if(data.weather[0].main == 'Rain'){
    images.src = './rainy_weather.png'
}

else if(data.weather[0].main == 'Drizzle'){
    images.src = './drizzle_weather.png'
}

else if(data.weather[0].main == 'Mist'){
    images.src = './humidity_weather.png'
}
