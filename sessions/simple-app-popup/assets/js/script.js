const title = document.querySelector(".title")
const image1 = document.querySelector("#image1")

function loadPage(Seasons) {

    if (Seasons == "spring") {
        title.textContent = 'Welcome to spring'
        image1.src = "assets/images/spring.png"
    }
    if (Seasons == "summer") {
        title.textContent = `Welcome to summer`
        image1.src = "assets/images/summer.png"
    }
    if (Seasons == "fall") {
        title.textContent = "Welcome to fall"
        image1.src = "assets/images/fall.png"
    }
    if (Seasons == "winter") {
        title.textContent = "Welcome to winter"
        image1.src = "assets/images/winter.png"
    }

    if (Seasons == "allSeasons") {
        title.textContent += "Welcome to allSeasons"
        image1.src = "assets/images/spring.png"
        image1.src = "assets/images/summer.png"
        image1.src = "assets/images/fall.png"
        image1.src = "assets/images/winter.png"

    }
}
