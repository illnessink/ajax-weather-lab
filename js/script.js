const $location = $('#location');
const $temp = $('#temp');
const $feels = $('#feels');
const $weather = $('#weather');
const $input = $('input[type="text"]');


let weatherData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=c1aa79559bd36ef4d622fffd9f9a61d7`,
      }).then(
        (data) => {
          weatherData = data
        //   debugger
          render()
        },
        (error) => {
          console.log("bad request: ", error)
        }
      )
}

function render() {
    $location.text(weatherData.name)
    $temp.text(Math.floor(weatherData.main.temp)+ "°")
    $feels.text(Math.floor(weatherData.main.feels_like)+ "°")
    $weather.text(weatherData.weather[0].main)
    $input.val("")
}