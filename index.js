const apiKey = "27b176e20cd6ba6029203ceddc40741e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    
    //Error Handlin
    if (response.status !== 200) { //if (response.status == 404)
        document.querySelector('.error').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
      //update weather condition images
      if(data.weather[0].main == "Clouds"){
        weatherIcon.setAttribute('src','clouds.png');
      }
      if(data.weather[0].main == "Clear"){
         weatherIcon.setAttribute('src','clear.png');
      }
      if(data.weather[0].main == "Rain"){
         weatherIcon.setAttribute('src','rain.png');
      }
     if(data.weather[0].main == "Drizzle"){
         weatherIcon.setAttribute('src','drizzle.png');
      }
      if(data.weather[0].main =="Mist" || data.weather[0].main =="Haze"){
         weatherIcon.setAttribute('src','mist.png');
      }
      if(data.weather[0].main == "Snow"){
         weatherIcon.setAttribute('src','snow.png');
      }

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

     document.querySelector('.error').style.display = "none";
     document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});