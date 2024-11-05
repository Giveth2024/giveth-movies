// Give the Ad Title the current title
const AdTitle = document.getElementById("Ad_title");
const IdRedirectButton = document.getElementById("id_redirect")

// create an Object to Store the Ad Title and its iframe link and button link
const Ad = {
    Ad_1: ["Parkitect", "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P&autoplay=1&mute=1", "https://www.themeparkitect.com/"],
    Ad_2: ["Coca Cola", "https://www.youtube.com/embed/0ubFwQ_np2g?si=9awgCIqjkX3f2Gr3&autoplay=1&mute=1", "https://www.coca-cola.com/xe/en"]
    
}

// Function to generate a random integer within a specified range
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random ad number based on the number of ads available
let randomIntInclusive = getRandomIntInclusive(1, Object.keys(Ad).length); // 1 to number of ads
// console.log("Random Ad Number:", randomIntInclusive);

// Select the ad based on the random number
const selectedAd = Ad[`Ad_${randomIntInclusive}`];

// Update the title, iframe, and button redirect using the selected ad
AdTitle.textContent = selectedAd[0];
document.getElementById("serie_iframe").src = selectedAd[1];

function Redirect() {
    window.location.href = selectedAd[2];
}

// Call Redirect() on button click or as needed


