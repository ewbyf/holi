import {data} from "./data.js";

function resetLeft(leftIndex) {
    document.getElementById("left-pfp").src = `../../../img/${leftIndex}.jpg`;
    document.getElementById("left-bg").style.backgroundImage = `url("../../../img/${leftIndex}.jpg")`
    document.getElementById("left-name").innerText = data[leftIndex]["name"];
    document.getElementById("left-followers").innerText = data[leftIndex]["followers"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("left-followers").setAttribute("data-target", data[leftIndex]["followers"]);
}

export function resetRight(rightIndex) {
    document.getElementById("right-pfp").src = `../../../img/${rightIndex}.jpg`;
    document.getElementById("right-bg").style.backgroundImage = `url("../../../img/${rightIndex}.jpg")`
    document.getElementById("right-name").innerText = data[rightIndex]["name"];
    document.getElementById("right-followers").innerText = data[rightIndex]["followers"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("right-followers").setAttribute("data-target", data[rightIndex]["followers"]);
}

export function start() {
    var leftIndex = Math.floor(Math.random() * 200);
    do {
        var rightIndex = Math.floor(Math.random() * 200);
    }
    while (leftIndex == rightIndex);
    
    resetLeft(leftIndex);
    resetRight(rightIndex);
}

window.onload = () => {
    start();
}


