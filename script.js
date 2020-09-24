$(document).ready(function () {

let latitude = 32.2226;
let longitude = 110.9747;
let weatherKey = "6566b7af6a83b978b652888cbc883c0a";
let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon" + longitude + "&appid=" + weatherKey;

// calls 
function checkWeather() {

    let latitude = 0;
    let longitude = 0;
    let weatherKey = "6566b7af6a83b978b652888cbc883c0a";
    // let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon" + longitude + "&appid=" + weatherKey;
    let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=" + weatherKey;
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        
        console.log(response);
    });
}

checkWeather();

})