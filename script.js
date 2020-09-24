$(document).ready(function () {
let destination = ""; 
let latitude = -32.2226;
let longitude = 110.9747;
let weatherKey = "6566b7af6a83b978b652888cbc883c0a";
let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon" + longitude + "&appid=" + weatherKey;

// calls 
function checkWeather() {
    let weatherKey = "6566b7af6a83b978b652888cbc883c0a";
    let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=" + weatherKey;
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}
$("#inputButton").on("click", function (e) {
    e.preventDefault();
    
        let button = $('<input type="button">');
        $(button).attr("value", destination);
        $("#searchedButton").append(button);
    })
checkWeather();
})