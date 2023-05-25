const getData = () => {
    let apiCall = fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', {method: 'GET', headers: {'Authorization': '713SFKjLLLjPox1PN4jAKDCGu8zbatjaeVM17bzvd214xbBUKbIN3ewM'}});
    let promise = new Promise((resolve, reject) => {
        () => {
            resolve(apiCall);
            reject('Error');
        }
    });
    return promise;
}

getData()
.then((response) => {response.json()
.then((data) => {
    let container = document.querySelector(".row");
    let foto = data.photos
    foto.forEach(photo => {
        return container.innerHTML =
        `<div class="card col-lg-2 col-md-3 col-sm-4 col-6 movies" style="width: 18rem;">
        <img src="${photo.src.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>`
    }).join("")

})
.catch((error) => {console.log(error);})});