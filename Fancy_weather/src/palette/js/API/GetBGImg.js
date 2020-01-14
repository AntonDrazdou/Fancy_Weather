export default async function getLinkToImage() {
    let inpVal = document.querySelector('.input_search__field').value;
    let url = redirectTo();

    function redirectTo() {
        let parameter1 = inpVal;
        let parameter2 = '&client_id=6fa3cd1b61445e2e393b295ea7e207391c6b3098b8b258d31a95855d536b7807';
        let urlImg = "https://api.unsplash.com/photos/random?query=town," + parameter1 + parameter2;
        return urlImg;
    }
    const response = await fetch(url);
    const data = await response.json();

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
}
