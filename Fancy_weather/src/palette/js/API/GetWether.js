export default async function getWeather() {
    let inputValue = document.querySelector('.input_search__field').value;
    let dataWeadher;
    let urlWeadher;
    let latitude;
    let longitude;
    urlWeadher = redirectTo();
    function redirectTo() {
        let parameter1 = inputValue;
        let parameter2 = '&lang=ru&units=metric&APPID=ce0d56825a4528e94c272e8f938bfcf9';
        let urlWeadherAll = "https://api.openweathermap.org/data/2.5/forecast?q=" + parameter1 + parameter2;
        return urlWeadherAll;
    }
    const response = await fetch(urlWeadher);
    dataWeadher = await response.json();
    document.querySelector('.temperature_content').innerHTML = Math.round(dataWeadher.list[0].main.temp);//отрисовываем данные температуры в окно (текущая)
    document.querySelector('.temperature_value__1content').innerHTML = Math.round(dataWeadher.list[4].main.temp);//отрисовываем данные температуры в окно (завтра)
    document.querySelector('.temperature_value__2content').innerHTML = Math.round(dataWeadher.list[7].main.temp);//отрисовываем данные температуры в окно (+2дня)
    document.querySelector('.temperature_value__3content').innerHTML = Math.round(dataWeadher.list[11].main.temp);//отрисовываем данные температуры в окно (+3 дня)
    document.querySelector('.weadher_content').innerHTML = dataWeadher.list[0].weather[0].main + '.'; //данные описания погоды
    document.querySelector('.humidity_content').innerHTML = "Air humidity: " + dataWeadher.list[0].main.humidity + " %"; // влажность
    document.querySelector('.wind_speed_content').innerHTML = "Wind speed: " + dataWeadher.list[0].wind.speed + " м/с"; // скорость ветра
    document.querySelector('.town_name').innerHTML = ' ' + dataWeadher.city.name; // town
    document.querySelector('.country_name_content').innerHTML = dataWeadher.city.country + ',  '; // страна
    document.querySelector('.scale_content').innerHTML = '&#176C';
    document.querySelector('.scale_content2').innerHTML = '&#176C';
    document.querySelector('.scale_content3').innerHTML = '&#176C';
    document.querySelector('.scale_content4').innerHTML = '&#176C';
    latitude = dataWeadher.city.coord.lat;
    longitude = dataWeadher.city.coord.lon;
    return dataWeadher;
}