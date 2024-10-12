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
        StevenUniverse: "Steven Universe",
        GravityFalls: "Gravity Falls"
    };

    const serie_seasons = {
        StevenUniverse: 1,
        GravityFalls : 2
    };

    

    const serie_episode_title = {
        StevenUniverse: {
            season_1 : 
            [
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
        },

        GravityFalls : 
        {
            season_1 : 
            [           
                "[Start from Index 1]",
                "Tourist Trapped",
                "The Legend of the Gobblewonker",
                "Headhunters",
                "The Hand That Rocks The Mabel",
                "The Inconveniencing",
                "Dipper Vs Manliness",
                "Double Dipper",
                "Irrational Treasure",
                "Time Traveler's Pig",
                "Fight Fighters",
                "Little Dipper",
                "Summerween",
                "Boss Mabel",
                "Bottomless Pit!",
                "The Deep End",
                "Carpet Diem",
                "Boyz Crazy",
                "The Land Before Swine",
                "Dreamscaperers",
                "Gideon Rises"
            ],

            // season_2 : [
            //     "Start from index 1",
            //     "1",
            //     "2",
            //     "3",
            //     "4",
            //     "5",
            //     "6",
            //     "7",
            //     "8",
            //     "9",
            //     "10",
            //     "11",
            //     "12",
            //     "13",
            //     "14",
            //     "15",
            //     "16",
            //     "17",
            //     "18",
            //     "19",
            //     "20",
            //     "21"
            // ]

        }
    };

    const serie_episode_links = {
        StevenUniverse: {season_1 : 
            [
                "This is Episode 0, Start from Episode 1",
                "https://drive.google.com/file/d/1N4eX8NflYhW4NgKQ4c3VEejEFs6jycfe/preview",
                "https://drive.google.com/file/d/1MVjT0TqDBTPSPeQCujtTCEnUAvrh6gCC/preview",
                "https://drive.google.com/file/d/1dtbSPzE1btj_T-RKj9dYljfgCmV9V_9z/preview",
                "https://drive.google.com/file/d/1pbeFtzfyZ1TZU4wjUnU1ywAswaztzyB3/preview",
                "https://drive.google.com/file/d/1hyuvgQMp1fNAxGfMMAj3xzteLILOJ33Q/preview",
                "https://drive.google.com/file/d/1-3HgqZ8JdWJoTaW4mRGux0JY8hWRotqN/preview",
                "https://drive.google.com/file/d/1qVRtrVqEVSWeCkLx9c8cKDm7r_5U88Vu/preview",
                "https://drive.google.com/file/d/11VwLi2j4RsBB9x-hCnxCuF0Dt6-IMCmZ/preview",
                "https://drive.google.com/file/d/1E4SEkQRbG_feiSJ_L4JEt3Ky6kESRX9c/preview",
                "https://drive.google.com/file/d/1SUEsu5s-yVH1o5N7MYirQu2wgTDozQzZ/preview"
            ]
        },
        
        GravityFalls : {
            season_1 : 
            [
                "This is Episode 0, Start from Episode 1",
                "https://drive.google.com/file/d/17nNGHoUjB1oWyeooUNULBcIGw-rhVhC4/preview",//1
                "https://drive.google.com/file/d/1KBxQt8d1a63mwJWA1VOO47cax0KtqCbr/preview",//2
                "https://drive.google.com/file/d/1tgtN3_w4dvmRg9w4xaF1pECQWdB_r69O/preview",//3
                "https://drive.google.com/file/d/1acwv90SS5_CHkyJmRyiQVRBjaywLEjOh/preview",//4
                "https://drive.google.com/file/d/1lLZSfr5_pZY_1FA1mg3eBm9kI7nGFC8J/preview",//5
                "https://drive.google.com/file/d/18Lk3fKxq27z3b3p3upp90tJnwSR2MVvr/preview",//6
                "https://drive.google.com/file/d/1NKCQdsk7iy-G-FLNTsPFAUO8SLKzmtJL/preview",//7
                "https://drive.google.com/file/d/1vci9oUWN3WdDHP3TINBR8OiwyxyHSwLf/preview",//8
                "https://drive.google.com/file/d/11OK4EXQzsIY0Uw5MgQ3cJfX2UgG7dRFJ/preview",//9
                "https://drive.google.com/file/d/1PL7dzQbeAEtNUQboAka7PiKT-qTVjeHs/preview",//10
                "https://drive.google.com/file/d/1MJ9Xot8grx6QnJRA8m6eTvbUWhkJMxFz/preview",//11
                "https://drive.google.com/file/d/13snYpNHyBzCcrre5VcGKThb1ZvFDh-Qc/preview",//12
                "https://drive.google.com/file/d/12EBkBaq0O_jIQ01bbTUEnY_6uZodlnvX/preview",//13
                "https://drive.google.com/file/d/19lkKazWiRgKkgQKjmbeoTulSC1sPr5om/preview",//14
                "https://drive.google.com/file/d/1KvO4ADlbB68_htYWI-5DqR5mk55yvgEn/preview",//15
                "https://drive.google.com/file/d/1E0JKeAwRla_oCb0PogTo6tj8OzLwZ4FT/preview",//16
                "https://drive.google.com/file/d/1LVaUGL3pVfmslbCdIOOHDVKFzl1ceOC7/preview",//17
                "https://drive.google.com/file/d/1jS_nnNXJNaplIKDJK-7enbsS50pABnVK/preview",//18
                "https://drive.google.com/file/d/1bRi_FJyHt1BYH5m6JrhlkgbXRZDnfcPW/preview",//19
                "https://drive.google.com/file/d/1kARoYRIPB7gpvbUkHt_8rWiDUpq6qigI/preview"//20                
            ]
        }
    };
    
    // Create elements for the season and episodes
    const serie_links_holder = document.getElementById("serie_links_holder");
    
    // create the variable to make sure the default number of seasons is one
    let season_number = 1;

    //Loop through all seasons dynamically.(You can also do this statically but it will take time.)
    for (let season in  serie_episode_title[serie]) {
        
        //Access the episode from gravity falls 
        console.log("Season", season_number)
        //Display the title first
        let seasonElement = document.createElement("p");
        seasonElement.id = "season_number_id";
        seasonElement.className = "season_number_class";
        seasonElement.textContent = `Season ${season_number}`;

        serie_links_holder.appendChild(seasonElement);

        // loop through all the episodes
        for (let i = 1; i < serie_episode_title[serie][season].length; i++)
        {
            //Print this shit(I mean the episodes) out in buttons
            let episodeButton = document.createElement("button");
            episodeButton.id = `serie_button_${i}`;
            episodeButton.className = "serie_button_class";
            episodeButton.textContent = `Episode: ${i} Title: ${ serie_episode_title[serie][season][i]}`;
    
            // Attach click event to the button to update the iframe source
            episodeButton.addEventListener('click', function () {
                iframe.src = serie_episode_links[serie][season][i] || "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P";
            });
    
            serie_links_holder.appendChild(episodeButton);
        }

        season_number++;
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


