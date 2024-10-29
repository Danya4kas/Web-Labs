
let planets = {
    mercury: {
        name: "Mercury",
        image: "images/mercury.jpg",
        details: {
            "Diameter": "4,880 km",
            "Mass": "3.30 × 10^23 kg",
            "Temperature": "-173 to 427 °C",
            "Distance from the Sun": "57.9 million km",
            "Orbital Period": "88 days"
        }
    },
    venus: {
        name: "Venus",
        image: "images/venus.jpg",
        details: {
            "Diameter": "12,104 km",
            "Mass": "4.87 × 10^24 kg",
            "Temperature": "462 °C",
            "Distance from the Sun": "108.2 million km",
            "Orbital Period": "225 days"
        }
    },
    earth: {
        name: "Earth",
        image: "images/earth.jpg",
        details: {
            "Diameter": "12,742 km",
            "Mass": "5.97 × 10^24 kg",
            "Temperature": "-88 to 58 °C",
            "Distance from the Sun": "149.6 million km",
            "Orbital Period": "365 days"
        }
    },
    mars: {
        name: "Mars",
        image: "images/mars.png",
        details: {
            "Diameter": "6,779 km",
            "Mass": "6.39 × 10^23 kg",
            "Temperature": "-87 to -5 °C",
            "Distance from the Sun": "227.9 million km",
            "Orbital Period": "687 days"
        }
    },

    jupiter: {
        name: "Jupiter",
        image: "images/jupiter.jpg",
        details: {
            "Diameter": "139,820 km",
            "Mass": "1.90 × 10^27 kg",
            "Temperature": "-108 °C",
            "Distance from the Sun": "778.5 million km",
            "Orbital Period": "4,333 days"
        }
    },
    saturn: {
        name: "Saturn",
        image: "images/saturn.jpg",
        details: {
            "Diameter": "116,460 km",
            "Mass": "5.68 × 10^26 kg",
            "Temperature": "-139 °C",
            "Distance from the Sun": "1.43 billion km",
            "Orbital Period": "10,759 days"
        }
    },
    uranus: {
        name: "Uranus",
        image: "images/uranus.png",
        details: {
            "Diameter": "50,724 km",
            "Mass": "8.68 × 10^25 kg",
            "Temperature": "-195 °C",
            "Distance from the Sun": "2.87 billion km",
            "Orbital Period": "30,687 days"
        }
    },
    neptune: {
        name: "Neptune",
        image: "images/neptune.jpg",
        details: {
            "Diameter": "49,244 km",
            "Mass": "1.02 × 10^26 kg",
            "Temperature": "-201 °C",
            "Distance from the Sun": "4.5 billion km",
            "Orbital Period": "60,190 days"
        }
    }
};


function showPlanetPage(planetKey) {
    window.location.href = `planet.html?planet=${planetKey}`;
}


function showPlanetDetails(planetKey) {
    let planet = planets[planetKey];

    if (!planet) {
        document.getElementById("planetContent").innerHTML = "<p>Planet data not available.</p>";
        return;
    }


    let planetContent = `
        <h1>${planet.name}</h1>
        <img src="${planet.image}" alt="${planet.name}" class="planet-image-modal">
        <table class="planet-table">
            ${Object.entries(planet.details).map(
                ([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`
            ).join('')}
        </table>
    `;
    document.getElementById("planetContent").innerHTML = planetContent;
}
















































// © Dany4kas planets