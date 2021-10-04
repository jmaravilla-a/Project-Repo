//hey guys
let points1 = 0
let points2 = 0
let points3 = 0
let baseUrl = 'https://dog.ceo/api/breeds/image/random'
let dogImage = document.getElementById('dog-image')
// let attack
fetch(baseUrl) 
    .then(resp => resp.json())
    .then(data => renderImage(data)
    )
    

function renderImage(data) {
    //function takes image from data
    // console.log(dogImage)
    //replaces our dog image with data.image
    dogImage.src = data.message
}

let attackBttn = document.getElementById("attackBttn")
attackBttn.addEventListener("click", addAttack )
function addAttack() { 
    let attackPoints = document.getElementById("attack-points")
    attackPoints.textContent = `attack: ${++points1}`
}

let defenseBttn = document.getElementById("defenseBttn")
defenseBttn.addEventListener("click", addDefense )
function addDefense() { 
    let defensePoints = document.getElementById("defense-points")
    defensePoints.textContent = `defense: ${++points2}`
}

let speedBttn = document.getElementById("speedBttn")
speedBttn.addEventListener("click", addSpeed )
function addSpeed() { 
    let speedPoints = document.getElementById("speed-points")
    speedPoints.textContent = `speed: ${++points3}`
}