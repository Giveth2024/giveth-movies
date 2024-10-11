// Function to extract the URL video parameter name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to be updated based on the video parameter
function updateVideo() {
    const serie = getUrlParameter('serie'); // Get the video parameter from the URL for the series webpage.
    const iframe = document.getElementById("serie_iframe"); // Get the iframe by ID

    // Define the series information
    const serie_title = {
        StevenUniverse: "Steven Universe"
    };

    const serie_seasons = {
        StevenUniverse: 1
    };

    const serie_episode_title = {
        StevenUniverse: [
            "[Start from index 1]",
            "Gem Glow", 
            "Laser Light Cannon", 
            "CheeseBurger BackPack",
            "Together Breakfast",
            "Frybo",
            "Cat Fingers",
            "Bubble Buddies",
            "Serious Steven",
            "Tiger Millionaire", 
            "Steven's Lion",
            "More Episodes to come"
        ]
    };

    const serie_episode_links = {
        StevenUniverse: {
            episode_1: "https://drive.google.com/file/d/1N4eX8NflYhW4NgKQ4c3VEejEFs6jycfe/preview",
            episode_2: "https://drive.google.com/file/d/1MVjT0TqDBTPSPeQCujtTCEnUAvrh6gCC/preview",
            episode_3: "https://drive.google.com/file/d/1dtbSPzE1btj_T-RKj9dYljfgCmV9V_9z/preview",
            episode_4: "https://drive.google.com/file/d/1pbeFtzfyZ1TZU4wjUnU1ywAswaztzyB3/preview",
            episode_5: "https://drive.google.com/file/d/1hyuvgQMp1fNAxGfMMAj3xzteLILOJ33Q/preview",
            episode_6: "https://drive.google.com/file/d/1-3HgqZ8JdWJoTaW4mRGux0JY8hWRotqN/preview",
            episode_7: "https://drive.google.com/file/d/1qVRtrVqEVSWeCkLx9c8cKDm7r_5U88Vu/preview",
            episode_8: "https://drive.google.com/file/d/11VwLi2j4RsBB9x-hCnxCuF0Dt6-IMCmZ/preview",
            episode_9: "https://drive.google.com/file/d/1E4SEkQRbG_feiSJ_L4JEt3Ky6kESRX9c/preview",
            episode_10: "https://drive.google.com/file/d/1SUEsu5s-yVH1o5N7MYirQu2wgTDozQzZ/preview"
        }
    };

    // Create elements for the season and episodes
    const serie_links_holder = document.getElementById("serie_links_holder");

    // Create and append season header
    for (let season in serie_seasons) {
        let seasonElement = document.createElement("p");
        seasonElement.id = "season_number_id";
        seasonElement.className = "season_number_class";
        seasonElement.textContent = `Season ${serie_seasons[season]}`;

        serie_links_holder.appendChild(seasonElement);

        // Loop through the episodes and create buttons
        for (let number_of_episodes = 1; number_of_episodes < serie_episode_title[serie].length; number_of_episodes++) {
            let episodeButton = document.createElement("button");
            episodeButton.id = `serie_button_${number_of_episodes}`;
            episodeButton.className = "serie_button_class";
            episodeButton.textContent = `Episode ${number_of_episodes}: ${serie_episode_title[serie][number_of_episodes]}`;

            // Attach click event to the button to update the iframe source
            episodeButton.addEventListener('click', function () {
                iframe.src = serie_episode_links[serie][`episode_${number_of_episodes}`] || "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P";
            });

            serie_links_holder.appendChild(episodeButton);
        }
    }

    // Set the initial iframe source and title
    if (serie_title[serie]) {
        const serie_heading = document.getElementById("serie_title");
        serie_heading.textContent = serie_title[serie];
    } else {
        iframe.src = "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P"; // Default Ad if series is not available
    }
}

// Return the value from the iframe source and send it to the Drive Function Click event
function Drive_Function_Value() {
    const iframe = document.getElementById("serie_iframe");
    return iframe.src;
}

// Call the function to do its thing when the page loads
window.onload = updateVideo;

// Optional: Function to trigger Drive function (if needed)
function Drive_Function() {
    const iframe = document.getElementById("serie_iframe");
    iframe.setAttribute("src", Drive_Function_Value());
}


// onclick="window.open('https://drive.google.com/', '_blank')"

// {/* <iframe src="https://drive.google.com/file/d/1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j/preview" width="640" height="480" allow="autoplay"></iframe> */}

{/* <iframe src="https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


