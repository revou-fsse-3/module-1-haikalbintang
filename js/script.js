const likeButton = document.getElementById("increment-button");
const logoNotif = document.getElementById("logo-notif");

let notif = 0;

function totalNotif() {
  notif++;
  logoNotif.textContent = notif;
  if (notif > 9) {
    alert("Welcome to the Club, Cheetah lovers !! 😊😊");
  }
}

likeButton.onclick = totalNotif;
