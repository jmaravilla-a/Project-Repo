


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
attackBttn.addEventListener("click", addAttack)
function addAttack() { 
    let attackPoints = document.getElementById("attack-points")
    attackPoints.textContent = ++attackStat
}

//Increase your dog's defense stat
let defenseStat = 0
let defenseBttn = document.getElementById("defenseBttn")
defenseBttn.addEventListener("click", addDefense)
function addDefense() { 
    let defensePoints = document.getElementById("defense-points")
    defensePoints.textContent = ++defenseStat
}

//Increase your dog's speed stat
let speedStat = 0
let speedBttn = document.getElementById("speedBttn")
speedBttn.addEventListener("click", addSpeed)
function addSpeed() { 
    let speedPoints = document.getElementById("speed-points")
    speedPoints.textContent = ++speedStat
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
    trainingLog.reset()
}

//name your dog
const nameForm = document.getElementById('dog-name-form')
nameForm.addEventListener('submit', addName)

function addName(e) {
    e.preventDefault()
    const nameContainer = document.querySelector('h3')
    nameContainer.textContent = `Your dog's name is ${e.target.nameInput.value}`
    nameForm.style.visibility = 'hidden'
}

//reveal special meter only when stats of dog > stats of monster
levelsContainer = document.getElementById('levels-container')
function revealSpecialMeter () {
    //grab dog stats and monster stats
    let dogAttack = document.getElementById('attack-points').textContent
    let dogDefense = document.getElementById('defense-points').textContent
    let dogSpeed = document.getElementById('speed-points').textContent
    let monsterAttack = document.getElementById('monster-attack-points').textContent
    let monsterDefense = document.getElementById('monster-defense-points').textContent
    let monsterSpeed = document.getElementById('monster-speed-points').textContent
    
    //compare stats with if statement
    if (dogAttack > monsterAttack && dogDefense > monsterDefense && dogSpeed > monsterSpeed) {
        levelsContainer.style.display = "inline-block"
    } else {
        levelsContainer.style.display = "none"
    }
    console.log(dogAttack, dogDefense, monsterAttack, monsterDefense)


}
speedBttn.addEventListener("click", revealSpecialMeter)

//increases level of special attack bar over time
let specialAttackCharge = 20;
function increaseSpecialAttack() {
    if (specialAttackCharge == 20) {
      specialAttackCharge = 1;
      let specialElement = document.getElementById("special-move-bar");
      let width = 20;
      let id = setInterval(frame, 20);
      function frame() {
        if (width >= 60) {
          clearInterval(id);
          specialAttackCharge = 0;
        } else {
          width++;
          specialElement.style.width = width + "%";
          isSpecialCharged()
        }
      }
    }
}

//button that charges special attck
const chargeSpecialBttn = document.getElementById('charge-special-bttn')
chargeSpecialBttn.addEventListener('click', increaseSpecialAttack)


function isSpecialCharged() {
    let specialCharge = document.getElementById('special-move-bar')
    let fullyCharged = specialCharge.style.width 
    if (fullyCharged == "60%") {
        useSpecialBttn.style.visibility = "visible"
    }

}

//button that uses special attack
const useSpecialBttn = document.getElementById('specialBttn')
useSpecialBttn.addEventListener('click', useSpecialAttack)
//function that uses special attack, 
function useSpecialAttack () {
    const monsterImage = document.getElementById('monster-image')
    //the special attack kills the monster
    monsterImage.src = "https://media.istockphoto.com/vectors/cartoon-dead-monster-vector-illustration-vector-id1192788254"
}