


//pulls a random image of a dog from the dog ceo API
let baseUrl = 'https://dog.ceo/api/breed/shiba/images/random'
fetch(baseUrl) 
    .then(resp => resp.json())
    .then(data => renderImage(data)
    )
    
let dogImage = document.getElementById('dog-image') //global so it can change after stats are increased
//renders image of dog pulled from the fetch request
function renderImage(data) { 
    //function takes image from data
    //replaces our dog image with data.image
    
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
    if (parseInt(dogAttack) > parseInt(monsterAttack) && parseInt(dogDefense) > parseInt(monsterDefense) && parseInt(dogSpeed) > parseInt(monsterSpeed)) {
        levelsContainer.style.visibility = "visible"
    } else {
        levelsContainer.style.visibility = "hidden"
    }
    console.log("hello")


}
speedBttn.addEventListener("click", revealSpecialMeter)
defenseBttn.addEventListener("click", revealSpecialMeter)
attackBttn.addEventListener("click", revealSpecialMeter)

//increases level of special attack bar over time
let specialAttackCharge = 20;
function increaseSpecialAttack() {
    if (specialAttackCharge == 20) {
      specialAttackCharge = 1;
      let specialElement = document.getElementById("special-move-bar");
      let width = 1;
      let id = setInterval(frame, 80);
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
        dogImage.src = "https://ih1.redbubble.net/image.1128082229.8014/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
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
    //alert(`The monster was obliterated by your dog's special attack. You Win!`)
    winScreen.style.display = "inline"
}

//randomly generate monster numbers 1-10


const monsterAttack = document.getElementById('monster-attack-points')
const monsterDefense = document.getElementById('monster-defense-points')
const monsterSpeed = document.getElementById('monster-speed-points')
document.addEventListener('DOMContentLoaded', (e) => {
    monsterAttack.textContent = Math.floor(Math.random() * 10 +1)
    monsterDefense.textContent = Math.floor(Math.random() * 10 +1)
    monsterSpeed.textContent = Math.floor(Math.random() * 10 +1)
    console.log(Math.floor(Math.random() * 10 +1))
})

let volume = document.getElementById('volume')
volume.volume = .15