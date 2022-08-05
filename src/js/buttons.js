import { numberAnimation } from "./numbers.js";
import { start } from "./start.js";  
import { lose, win } from "./logic.js";

function higher() {
    // Grabs followers
    let leftFollowers = +document.getElementById("left-followers").getAttribute("data-target");
    let rightFollowers = +document.getElementById("right-followers").getAttribute("data-target");

    // Hides higher/lower buttons
    document.getElementsByClassName("button1")[0].style.display = "none";
    document.getElementsByClassName("button2")[0].style.display = "none";

    // Reveals followers and begins animation from 0
    document.getElementById("right-followers").innerText = 0;
    document.getElementById("right-followers").style.display = "block";
    numberAnimation();

    // Lose
    if (leftFollowers > rightFollowers) {
        setTimeout(lose, 2000);
    }
    // Win
    else {
        setTimeout(win, 2000);
    }
}

function lower() {
    // Grabs followers
    let leftFollowers = +document.getElementById("left-followers").getAttribute("data-target");
    let rightFollowers = +document.getElementById("right-followers").getAttribute("data-target");

    // Hides higher/lower buttons
    document.getElementsByClassName("button1")[0].style.display = "none";
    document.getElementsByClassName("button2")[0].style.display = "none";

    // Reveals followers and begins animation from 0
    document.getElementById("right-followers").innerText = 0;
    document.getElementById("right-followers").style.display = "block";
    numberAnimation();
    
    // Lose
    if (leftFollowers < rightFollowers) {
        setTimeout(lose, 2000);
    }
    // Win
    else {
        setTimeout(win, 2000);
    }
}

function retry() {
    // Resets score
    document.getElementById("game-score").innerText = "Score: 0";
    document.getElementById("game-score").setAttribute("data-target", 1);

    // Resets Instagram accounts
    start();

    // Hides followers and shows higher/lower buttons
    document.getElementsByClassName("button1")[0].style.display = "block";
    document.getElementsByClassName("button2")[0].style.display = "block";
    document.getElementById("right-followers").style.display = "none";

    // Hides losing menu
    document.getElementsByClassName("lose")[0].style.display = "none";
}

document.getElementsByClassName("button1")[0].addEventListener("click", higher);
document.getElementsByClassName("button2")[0].addEventListener("click", lower);
document.getElementsByClassName("retry")[0].addEventListener("click", retry);