//call variables for the Movie html file
const div_container = document.getElementById("pop_Ad");
const movie_Ad_Title = document.getElementById("par_ad_title");
const button_container = document.getElementById("button_container");
const button_link = document.getElementById("button_ad_redirect");
const movie_serie_iframe = document.getElementById("serie_iframe");
const close_container = document.getElementById("button_close");

// create an Object to Store the Ad Title and its iframe link and button link
const Ad = {
    Ad_1 : ["Parkitect", "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P&autoplay=1&mute=1", "https://www.themeparkitect.com/"],
    Ad_2 : ["Coca Cola", "https://www.youtube.com/embed/0ubFwQ_np2g?si=9awgCIqjkX3f2Gr3&autoplay=1&mute=1", "https://www.coca-cola.com/xe/en"],
    Ad_3 : ["Samsung", "https://www.youtube.com/embed/3hPoEmlBQdY?si=E7AP3jZ2o2qUH60_&autoplay=1&mute=1", "https://www.samsung.com/africa_en/smartphones/galaxy-s24-ultra/?cid=global_ow_social_youtube_f1h24-e3_unpacked_introduction-film_video_none_none"],
    Ad_4 : ["Amazon", "https://www.youtube.com/embed/C4rqaSy2cxU?si=hL_tkKYUZUrdKoIv&autoplay=1&mute=1", "https://www.amazon.com"],
    Ad_5 : ["Temu", "https://www.youtube.com/embed/5Od0aOse1wc?si=0qbe-IXDUwfa9g9o&autoplay=1&mute=1", "https://www.temu.com/?_x_campaign=MBActy&_x_cid=freegift&_x_sid=official_ytb&_x_src=big_game&_x_sessn_id=0b03sof2hu&refer_page_name=free_items_download&refer_page_id=19076_1730862611969_y41co9uonh&refer_page_sn=19076"],
    Ad_6 : ["Play Station 5 Pro Console", "https://www.youtube.com/embed/6HaRMiTfvks?si=B90DDoVuXwqBZtOB&autoplay=1&mute=1", "https://www.playstation.com/en-us/ps5/ps5-pro/"],
    Ad_7 : ["Express VPN", "https://www.youtube.com/embed/7uE7kFcJ_Pk?si=D5aYtSs8cn8TuckA&autoplay=1&mute=1", "https://www.expressvpn.com/go/mom?utm_source=youtube&utm_medium=video&utm_campaign=toddmom"],
    Ad_8 : ["KFC South Africa", "https://www.youtube.com/embed/3NtrohVTvY4?si=Hg9jRqVvsBCrR6wx&autoplay=1&mute=1", "https://order.kfc.co.za/"],
    Ad_9 : ["Minecraft", "https://www.youtube.com/embed/9aDWhUJdYDk?si=N5op2U9SF9sVUNGI&autoplay=1&mute=1", "https://www.minecraft.net/en-us"],
    Ad_10 : ["Jumia UG", "https://www.youtube.com/embed/_iWaFxdxJtY?si=PoLBISHNXeGGVC_8&autoplay=1&mute=1", "https://www.jumia.ug/electronics/?srsltid=AfmBOooHnZu0FL2IR75ADXZwAslJm3-iw0YmUDnXnbkycqm0vCTRqJ-a"]   
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
    window.alert("Redirecting... to an external website");
    window.location.href = selectedAd[2];
}

function Close_PopUp() {
    // Log that the button was clicked
    window.alert("Wait for 15 seconds\nDon't click me again or you'll end up watching the entire Ad:🤣");

    let counter = 15; // Start countdown from 15
    const intervalId = setInterval(function() {
        // Update the text in the close_container to show the countdown
        close_container.textContent = `Closing in ${counter} seconds...`;
        
        counter--; // Decrement the counter

        // When counter reaches 0, stop the interval and remove the pop-up
        if (counter < 0) {
            clearInterval(intervalId); // Stop the countdown
            div_container.remove(); // Remove the popup
        }
    }, 1000); // Set interval to 1000 milliseconds (1 second)
}


