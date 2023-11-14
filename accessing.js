// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById('weather-head').innerText = 'February 10 Weather Forecast, Seattle'
// Change the styling of every element with class "sun" to set the color to "orange"
const allSun =document.querySelectorAll('.sun')
allSun.forEach(element => {
    element.style.color = 'orange'
});
// Change the class of the second <li> from to "sun" to "cloudy"
const li =document.querySelectorAll('li')
li[1].className = 'cloudy'