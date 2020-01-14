
export default async function getGeoLocation() {  // получаем геолокацию и пихаем ее в функцию для получения урла картинки
    let urlGeo = redirectToGeo();
    function redirectToGeo() {
        let location = "https://ipinfo.io/json?token=b93e4ccc7c50fb";
        console.log(location);
        return location;
    }
    let response1 = await fetch(urlGeo);
    let dataLoc = await response1.json();
    document.querySelector('.input_search__field').value = dataLoc["city"];
    document.querySelector('.town_name').innerHTML = dataLoc["city"];
    return dataLoc;
}