//call variables for the Movie html file
const div_container = document.getElementById("pop_Ad");
const movie_Ad_Title = document.getElementById("par_ad_title");
const button_container = document.getElementById("button_container");
const button_link = document.getElementById("button_ad_redirect");
const movie_serie_iframe = document.getElementById("serie_iframe");
const close_container = document.getElementById("button_close");

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
movie_Ad_Title.textContent = selectedAd[0];
movie_serie_iframe.src = selectedAd[1];

//Redirect the user to the ad page
function Redirect_Movie_Ad()
{
    console.log("Redirecting...");
    window.location.href = selectedAd[2];
}

// Close the pop up
function Close_PopUp() {
    // Log that the button was clicked
    window.alert("Wait for 15 seconds\nDon't click me again or you'll end up watching the entire Ad:🤣");

    // Wait for 15 seconds (15000 milliseconds) before removing the pop-up
    setTimeout(function() {
        div_container.remove();
    }, 15000);
}


