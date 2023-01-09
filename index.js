let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")
let home1El = document.getElementById("home+1-el")
let home2El = document.getElementById("home+2-el")
let home3El = document.getElementById("home+3-el")
let guest1El = document.getElementById("guest+1-el")
let guest2El = document.getElementById("guest+2-el")
let guest3El = document.getElementById("guest+3-el")
let homescore = 0
let guestscore = 0

function homeadd1(){
    homescore += 1
    homescoreEl.textContent = homescore
}

function homeadd2(){
    homescore += 2
    homescoreEl.textContent = homescore
}

function homeadd3(){
    homescore += 3
    homescoreEl.textContent = homescore
}

function guestadd1(){
    guestscore += 1
    guestscoreEl.textContent = guestscore
}

function guestadd2(){
    guestscore += 2
    guestscoreEl.textContent = guestscore
}

function guestadd3(){
    guestscore += 3
    guestscoreEl.textContent = guestscore
}