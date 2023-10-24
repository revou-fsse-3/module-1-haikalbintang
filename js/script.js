"use strict";

const likeButton = document.getElementById("increment-button");
const loveButton = document.getElementById("love-test");
const logoNotif = document.getElementById("logo-notif");

let notif = 0;
// let love = 0;

function totalNotif() {
  notif++;
  logoNotif.textContent = notif;
  if (notif > 9) {
    alert("Welcome to the Club, Cheetah lovers !! 😊😊");
  }
  console.log(notif);
}

// function lovedImage() {}

// Like Button //
likeButton.onclick = totalNotif;

// Love Button //
loveButton.onclick = totalNotif;
