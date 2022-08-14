import { resetRight } from "./start.js";
import {data} from "./data.js";

export function lose() {
    document.getElementsByClassName("score")[1].innerText = document.getElementById("game-score").innerText;
    document.getElementsByClassName("lose")[0].style.display = "flex";
}

export function win() {
    document.getElementsByClassName("win")[0].style.display = "block";

    // Sets score
    const nextScore = +document.getElementById("game-score").getAttribute("data-target");
    document.getElementById("game-score").innerText = `Score: ${nextScore}`;
    document.getElementById("game-score").setAttribute("data-target", nextScore + 1);

    // Moves right to left
    document.getElementById("left-pfp").src = document.getElementById("right-pfp").src;
    document.getElementById("left-bg").style.backgroundImage = `url("${document.getElementById("right-pfp").src}")`
    document.getElementById("left-name").innerText = document.getElementById("right-name").innerText;
    document.getElementById("left-followers").innerText = document.getElementById("right-followers").innerText;
    document.getElementById("left-followers").setAttribute("data-target", document.getElementById("right-followers").getAttribute("data-target"));

    // Reset right side
    do {
        var rightIndex = Math.floor(Math.random() * 200);
    }
    while (data[rightIndex]["name"] == document.getElementById("left-name").innerText);
    resetRight(rightIndex);

    // Hides followers and shows higher/lower buttons
    document.getElementsByClassName("button1")[0].style.display = "block";
    document.getElementsByClassName("button2")[0].style.display = "block";
    document.getElementById("right-followers").style.display = "none";

    setTimeout(function display() {
        document.getElementsByClassName("win")[0].style.display = "none";
    }, 1500);
}

