const API_KEY="acfc522d87d64af7aaf191348242703";

let city= "karachi";

async function getWeather(passedCity){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${passedCity} `, {mode:"cors"})
    let data= await res.json();
    const cityName=data.location.name;
    const countryname=data.location.country;
    const temperatureCelcius=data.current.temp_c;
    const temperatureFarenhite=data.current.temp_f;
    const condition= data.current.condition.text;
    const icon= data.current.condition.icon;
    console.log(cityName);
    document.getElementById("cityAndCountry").innerHTML=`${cityName}, ${countryname}`
    document.getElementById("celcius").innerHTML=`${temperatureCelcius}C`
    document.getElementById("farenheit").innerHTML=`${temperatureFarenhite}F`
    document.getElementById("condition").innerHTML=`${condition}`
    const img=document.querySelector("img");
    img.src=`https:${icon}`;
    console.log(icon);
}
document.addEventListener("DOMContentLoaded", () => {
    getWeather(city);
});

document.getElementById("click-but").addEventListener("click", () => {
    
    const userInput = document.getElementById("city").value;
    city = userInput;
    getWeather(city);

});



