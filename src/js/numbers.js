export function numberAnimation() {
    const followers = document.getElementById("right-followers");

    const start = +followers.innerText.replace(/,/g, '');
    const end = +followers.getAttribute("data-target");
    const increment = end / 200;

    if (start < end) {
        followers.innerText = Math.ceil(start + increment).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setTimeout(numberAnimation, 1);
    }
    else {
        followers.innerText = end.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}