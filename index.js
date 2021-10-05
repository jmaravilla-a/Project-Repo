


//pulls a random image of a dog from the dog ceo API
let baseUrl = 'https://dog.ceo/api/breeds/image/random'
fetch(baseUrl) 
    .then(resp => resp.json())
    .then(data => renderImage(data)
    )
    

//renders image of dog pulled from the fetch request
function renderImage(data) { 
    //function takes image from data
    // console.log(dogImage)
    //replaces our dog image with data.image
    let dogImage = document.getElementById('dog-image')
    dogImage.src = data.message
}

//Increase your dog's attack stat
let attackStat = 0
let attackBttn = document.getElementById("attackBttn")
attackBttn.addEventListener("click", addAttack )
function addAttack() { 
    let attackPoints = document.getElementById("attack-points")
    attackPoints.textContent = `attack: ${++attackStat}`
}

//Increase your dog's defense stat
let defenseStat = 0
let defenseBttn = document.getElementById("defenseBttn")
defenseBttn.addEventListener("click", addDefense )
function addDefense() { 
    let defensePoints = document.getElementById("defense-points")
    defensePoints.textContent = `defense: ${++defenseStat}`
}

//Increase your dog's speed stat
let speedStat = 0
let speedBttn = document.getElementById("speedBttn")
speedBttn.addEventListener("click", addSpeed )
function addSpeed() { 
    let speedPoints = document.getElementById("speed-points")
    speedPoints.textContent = `speed: ${++speedStat}`
}


//add comment aka "training log"
const trainingLog = document.getElementById('comments-form')
trainingLog.addEventListener('submit', addComment)

function addComment(e) {
    e.preventDefault()
    //grabs value of form input 
    const newComment = document.createElement('ul')
    newComment.textContent = e.target.commentInput.value
    //appends it to comments-container
    const commentContainer = document.getElementById('comments-container')
    commentContainer.appendChild(newComment)
}

//this is a funny comment!!!!!!!