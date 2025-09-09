let scoreHome = document.getElementById("home-score");
let scoreGuest = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

let history = [];

function addPoints(team, points) {
  if (team === "home") {
    countHome += points;
    scoreHome.innerText = countHome;
    history.push({ team: "home", points: points });
  } else if (team === "guest") {
    countGuest += points;
    scoreGuest.innerText = countGuest;
    history.push({ team: "guest", points: points });
  } else if (team === "reset") {
    history.push({ team: "reset", home: countHome, guest: countGuest });

    countHome = 0;
    countGuest = 0;
    scoreHome.innerText = countHome;
    scoreGuest.innerText = countGuest;
  }
}

function undoLast() {
  if (history.length === 0) return;

  let lastAction = history.pop();

  if (lastAction.team === "home") {
    countHome -= lastAction.points;
    scoreHome.innerText = countHome;
  } else if (lastAction.team === "guest") {
    countGuest -= lastAction.points;
    scoreGuest.innerText = countGuest;
  } else if (lastAction.team === "reset") {
    countHome = lastAction.home;
    countGuest = lastAction.guest;
    scoreHome.innerText = countHome;
    scoreGuest.innerText = countGuest;
  }
}
