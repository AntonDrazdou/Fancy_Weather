import '../css/style.css';
import '../css/style.scss';
import renderMain from './render'; // отрисовка страницы (из файла рендер)
renderMain();

import getGeoLocation from './API/GetGeo';//получаем Геолокацию 

import getWeather from './API/GetWether'; //получаем данные о погоде в зависимости от инпута value

import getLinkToImage from './API/GetBGImg'; //получаем ссылку на изображение в BG, пихаем ее в css 

import getMapBox from './API/MapBox'; // получаем карту


(async function app() {

    let geoLock = await getGeoLocation();


    let weatherObj = await getWeather();

    let getLinckIMG = await getLinkToImage();

    let mapBox = await getMapBox(weatherObj.city.coord.lat, weatherObj.city.coord.lon);

    // отрисовываем широту и долготу 

    document.querySelector('.latitude').innerHTML = 'Latitude: ' + weatherObj.city.coord.lat;
    document.querySelector('.longitude').innerHTML = 'Longitude: ' + weatherObj.city.coord.lon;




    let elemTime = document.querySelector('.time');
    let elemDate = document.querySelector('.date');
    let elemDayWeek = document.querySelector('.day')
    let monthObjru = {
        '0': 'Января',
        '1': 'Февраля',
        '2': 'Марта',
        '3': 'Апреля',
        '4': 'Мая',
        '5': 'Июня',
        '6': 'Июля',
        '7': 'Августа',
        '8': 'Сентября',
        '9': 'Октября',
        '10': 'Ноября',
        '11': 'Декабря'
    }
    let monthObjen = {
        '0': 'January',
        '1': 'February',
        '2': 'Марта',
        '3': 'Апреля',
        '4': 'Мая',
        '5': 'Июня',
        '6': 'Июля',
        '7': 'Августа',
        '8': 'Сентября',
        '9': 'Октября',
        '10': 'Ноября',
        '11': 'December'
    }
    let dayObjru = {
        '0': 'Воскресенье',
        '1': 'Понедельник',
        '2': 'Вторник',
        '3': 'Среда',
        '4': 'Четверг',
        '5': 'Пятница',
        '6': 'Суббота',
    }
    let dayObjen = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
    }
    let dayweek;

    function getDate()  // дата и время
    {
        let date = new Date();
        let month = date.getMonth();
        let day = date.getDate();
        dayweek = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let monthName = monthObjen[month];
        let dayWeekName = dayObjen[dayweek];

        elemDate.innerHTML = day + ' ' + monthName;
        elemTime.innerHTML = hours + ':' + minutes;
        elemDayWeek.innerHTML = dayWeekName;
    }
    getDate();

    setInterval(getDate, 0);

    // прогноз на 3 дня, дни недели

    function compilDaysOfWeek() {
        let dayweek1 = dayweek + 1;
        let dayweek2 = dayweek1 + 1;
        let dayweek3 = dayweek2 + 1;
        let dayWeekName1 = dayObjen[dayweek1];
        let dayWeekName2 = dayObjen[dayweek2];
        let dayWeekName3 = dayObjen[dayweek3];
        document.querySelector('.day__of__week_1').innerHTML = dayWeekName1;
        document.querySelector('.day__of__week_2').innerHTML = dayWeekName2;
        document.querySelector('.day__of__week_3').innerHTML = dayWeekName3;

    };
    compilDaysOfWeek();




    // кнопка поиска города
    let val;
    let titleElem2 = document.querySelector('.button__search');
    titleElem2.addEventListener('click', async () => {
        val = document.querySelector('.input_search__field').value;
        getLinkToImage(); // листенер на кнопку поиска запуск функции получения ссылки на изображение BG
        weatherObj = await getWeather();  // получаем данные о погоде для города введенного в инпут
        getIconWeather();

        document.querySelector('.latitude').innerHTML = 'latitude: ' + weatherObj.city.coord.lat;
        document.querySelector('.longitude').innerHTML = 'longitude: ' + weatherObj.city.coord.lon;
        await getMapBox(weatherObj.city.coord.lat, weatherObj.city.coord.lon);  //отрисовка по новой карты

    });


    // отрисовываем значки погоды

    function getIconWeather() {
        document.querySelector('.icon_weather_content').setAttribute('src', `https://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}.png`);
        document.querySelector('.icon_weather_1').setAttribute('src', `https://openweathermap.org/img/wn/${weatherObj.list[4].weather[0].icon}.png`);
        document.querySelector('.icon_weather_2').setAttribute('src', `https://openweathermap.org/img/wn/${weatherObj.list[7].weather[0].icon}.png`);
        document.querySelector('.icon_weather_3').setAttribute('src', `https://openweathermap.org/img/wn/${weatherObj.list[11].weather[0].icon}.png`);
    }
    getIconWeather()



    // Кнопка смены изображения 

    let titleElem5 = document.querySelector('.tools-bar_button__image');
    titleElem5.addEventListener('click', () => {
        getLinkToImage();
    });



    // перевод Цельсий в фаренгейт
    let titleElemCel = document.querySelector('.degree_buttons__cel');
    let titleElemFar = document.querySelector('.degree_buttons__far');
    let valCel;
    let valscle;
    let valCel2;
    let valCel3;
    let valCel4;
    let valscle2;
    let valscle3;
    let valscle4;
    titleElemFar.addEventListener('click', () => {
        valCel = document.querySelector('.temperature_content').innerHTML;
        valCel2 = document.querySelector('.temperature_value__1content').innerHTML;
        valCel3 = document.querySelector('.temperature_value__2content').innerHTML;
        valCel4 = document.querySelector('.temperature_value__3content').innerHTML;
        valscle = document.querySelector('.scale_content').innerHTML;
        valscle2 = document.querySelector('.scale_content2').innerHTML
        valscle3 = document.querySelector('.scale_content3').innerHTML
        valscle4 = document.querySelector('.scale_content4').innerHTML
        chageGradusToFar();
    });
    function chageGradusToFar() {
        if (valscle.includes('C')) {
            let valFar = Math.round(((valCel * 9) / 5) + 32);
            document.querySelector('.temperature_content').innerHTML = valFar;
            document.querySelector('.scale_content').innerHTML = '&#176F';
            valscle = document.querySelectorAll('.scale_content').innerHTML;

            let valFar2 = Math.round(((valCel2 * 9) / 5) + 32);
            document.querySelector('.temperature_value__1content').innerHTML = valFar2;
            document.querySelector('.scale_content2').innerHTML = '&#176F';
            valscle2 = document.querySelector('.scale_content2').innerHTML;

            let valFar3 = Math.round(((valCel3 * 9) / 5) + 32);
            document.querySelector('.temperature_value__2content').innerHTML = valFar3;
            document.querySelector('.scale_content3').innerHTML = '&#176F';
            valscle3 = document.querySelector('.scale_content3').innerHTML;

            let valFar4 = Math.round(((valCel4 * 9) / 5) + 32);
            document.querySelector('.temperature_value__3content').innerHTML = valFar4;
            document.querySelector('.scale_content4').innerHTML = '&#176F';
            valscle4 = document.querySelector('.scale_content4').innerHTML;
        }
    }


    titleElemCel.addEventListener('click', () => {
        valscle = document.querySelector('.scale_content').innerHTML;
        chageGradusToCel();

    });
    function chageGradusToCel() {
        if (valscle.includes('F')) {
            document.querySelector('.temperature_content').innerHTML = Math.round(weatherObj.list[0].main.temp);
            document.querySelector('.temperature_value__1content').innerHTML = Math.round(weatherObj.list[4].main.temp);
            document.querySelector('.temperature_value__2content').innerHTML = Math.round(weatherObj.list[7].main.temp);
            document.querySelector('.temperature_value__3content').innerHTML = Math.round(weatherObj.list[11].main.temp);
            document.querySelector('.scale_content').innerHTML = '&#176C';
            document.querySelector('.scale_content2').innerHTML = '&#176C';
            document.querySelector('.scale_content3').innerHTML = '&#176C';
            document.querySelector('.scale_content4').innerHTML = '&#176C';
            valscle = document.querySelector('.scale_content').innerHTML;

        }
    };

})();











