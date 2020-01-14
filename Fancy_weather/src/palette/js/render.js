export default function renderMain(){
    document.body.innerHTML = ` <header>
    <div class="tools-bar">
            <div class="tools-bar_button__image">
                    <div class="load_picture__button">
                            <div class="load_picture__button__img"></div>
                    </div>
            </div>
            <div class="language_button">
                    <div class="language_button_content">
                            <span class="button__ru">RU</span>
                    </div>
            </div>
            <div class="language_button">
                    <div class="language_button_content">
                            <span class="button__en">EN</span>
                    </div>
            </div>
            <div class="language_button">
                    <div class="language_button_content">
                            <span class="button__be">BE</span>
                    </div>
            </div>
            <div class="degree_buttons">
                    <div class="degree_buttons__cel">
                            <div class="degree_button_content">
                                    <span class="button__cel">&#176C</span>
                            </div>
                    </div>
                    <div class="degree_buttons__far">
                            <div class="degree_button_content">
                                    <span class="button__far">&#176F</span>
                            </div>
                    </div>
            </div>
            <div class="search_console">
                    <div class="search_console__input">
                            <input class="input_search__field" type="text" name="q" placeholder="Write name of city" value="">
                    </div>
                    <div class="search_button">
                            <div class="search_button_content">
                                    <span class="button__search">Search</span>
                            </div>

                    </div>
            </div>
    </div>
</header>
<div class="content_wether">
    <div class="date_time_location">
            <div class="location_name">
                <div class="country__town">
                        <div class="country_name">
                                <span class="country_name_content"></span>
                        </div>
                        <div class="town_name">
                                <span class="country_name_content"></span>
                        </div>
                </div>
                <div class="time__date__day">
                        <div class="day">
                        </div>
                        <div class="date">
                        </div>
                        <div class="time">
                        </div>
                </div>
            </div>
           
    </div>

    <div class="temperature_value">
            <div class="temperature_value_content">
                    <span class="temperature_content"></span>
                    <span class="scale_content">&#176C</span>
                    

            </div>
            <div class="temperature_value_about">
            <span class="weadher_content"></span>
            <span class="humidity_content"></span>
            <span class="wind_speed_content"></span>
                    

            </div>
            
    </div>
    <div class="icon_weather">
            <div>
                <img class="icon_weather_content" src="" alt="">
            </div>
    </div>
    <div class="weather_description">
            <div class="weather_description_content">
                    <span class="weadher_content__description"></span>
                    <span class="weadher_content__description"></span>
                    <span class="weadher_content__description"></span>
                    <span class="weadher_content__description"></span>
            </div>
    </div>
    <div class="weather_on3days"> 
            <div class="weather_on3days_1">
                    <div class="day_of__week">
                            <span class="day_of__week_content"></span>
                    </div>
                    <div class="day__of__week_1"></div>
                    <div class="temperature_value__1">
                            <span class="temperature_value__1content"></span>
                            <span class="scale_content2">&#176C</span>
                    </div>
                    <div>
                    <img class="icon_weather_1" src="" alt="">
                    </div>
                    
            </div>
            <div class="weather_on3days_2">
                    <div class="day_of__week">
                            <span class="day_of__week_content"></span>
                    </div>
                    <div class="day__of__week_2"></div>
                    <div class="temperature_value__2">
                            <span class="temperature_value__2content"></span>
                            <span class="scale_content3">&#176C</span>
                    </div>
                    <div>
                    <img class="icon_weather_2" src="" alt="">
                    </div>
                    
            </div>
            <div class="weather_on3days_3">
                    <div class="day_of__week">
                            <span class="day_of__week_content"></span>
                    </div>
                    <div class="day__of__week_3"></div>
                    <div class="temperature_value__3">
                            <span class="temperature_value__3content"></span>
                            <span class="scale_content4">&#176C</span>
                    </div>
                    <div>
                    <img class="icon_weather_3" src="" alt="">
                         
                    </div>
                    
            </div>
            <div class="map_box">
                <div id="map"></div>
            </div>
            
    </div>

    <div class="geolocation">
                <span class="latitude"></span>
                <span class="longitude"></span>
            </div>

</div>

</div>
</div>
`
};