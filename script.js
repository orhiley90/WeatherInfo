$(document).ready(function () {

    let latitude = -32.2226;
    let longitude = 110.9747;
    let searchInput = "";

    // calls 

    function checkWeather() {
        
        let weatherKey = "6566b7af6a83b978b652888cbc883c0a";
        let myVariable = $("#searchInput").val();
        let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + myVariable + "&appid=" + weatherKey + "&units=imperial";
        // let uvURl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon" + longitude + "&appid=" + weatherKey;
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.current.weather[0].size);
            let weatherIcons = "http://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png";
            let currentCondition = response.current.weather[0].description;
            console.log(response.current.weather[0].size);
            console.log(weatherIcons);
            console.log(response);
            $("#cityName").text(searchInput.text());
            $("#currentTemp").text("Current Temp: " + response.current.temp);
            $("#currentHum").text(" Current Humidity: " + response.current.humidity);
            $("#currentWeatherType").attr("Current Weather: " + response.current.weather[0].icon);
            $("#currentWeatherType").append(currentCondition);
            $("#currentUV").text("Current UVIndex: " + response.current.uvi);
        //     $.ajax({
        //     url: uvURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response);
        });
        // });
        
    }
    $("#inputButton").on("click", function (e) {
        e.preventDefault();
        
        searchInput = $("#searchInput").val();
        
        console.log(searchInput);
        let button = $('<input type="button">');
        $(button).attr("value", searchInput);
        $("#searchedButton").append(button);
        
        checkWeather();
    })

})