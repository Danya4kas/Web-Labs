    let urlParams = new URLSearchParams(window.location.search);
    let planetKey = urlParams.get('planet');

    if (planetKey) {
        showPlanetDetails(planetKey);
    } else {
        document.getElementById("planetContent").innerHTML = "<p>Planet not found!</p>";
    }