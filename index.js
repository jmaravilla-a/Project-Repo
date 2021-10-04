//hey guys
let baseUrl = 'https://dog.ceo/api/breeds/image/random'
let dogImage = document.getElementById('dog-image')
fetch(baseUrl) 
    .then(resp => resp.json())
    .then(data => renderImage(data))

function renderImage(data) {
    //function takes image from data
    console.log(dogImage)
    //replaces our dog image with data.image
    dogImage.src = data.message
}