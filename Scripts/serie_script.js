// Function to extract the URL video parameter name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);// Learn more on Extracting URL parameters on links
    return urlParams.get(name);
}

// Function to be updated based on the video parameter
function updateVideo() {
    const serie = getUrlParameter('serie'); // Get the video parameter from the URL for the series webpage.
    const iframe = document.getElementById("serie_iframe"); // Get the iframe by ID

    // Define the series information
    const serie_title = {
        StevenUniverse: "Steven Universe",
        GravityFalls: "Gravity Falls",
        Loki : "Loki",
        Ben10 : "Ben 10"
    };

    const serie_seasons = {
        StevenUniverse: 1,
        GravityFalls : 2,
        Loki : 2,
        Ben10 : 4
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

            season_2 : [
                "Start from index 1",
                "Scary-oke",
                "Into the Bunker",
                "The Golf War",
                "Sock Opera",
                "Soos and the real Girl",
                "Little Gift Shop of Horrors",
                "Society of the Blind Eye",
                "Blendin's Game",
                "The Love God",
                "NorthWest Mansion Mystery",
                "Not What He Seems",
                "A Tale Of Two Stans",
                "Dungeons, Dungeons and More Dungeons",
                "The Stanchurian Candidate",
                "The Last Mabelcorn",
                "Roadside Attraction",
                "Dipper and Mabel vs. The Future",
                "Weirdmageddon",
                "Escape from reality",
                "Take Back the Falls && Somewhere in the woods"
            ]

        },

        Loki : 
        {
            season_1 : [
                "Start from Index 1",
                "Glorius Purpose",
                "The Variant",
                "Lamentis",
                "The Nexus Event",
                "Journey To the Mystery",
                "For All Time Always"
            ],

            season_2 : [
                "Start from Index One",
                "Ouroboros",
                "Breaking Brad",
                "1893",
                "Heart of the TVA",
                "Science Fiction",
                "Glorius Purpose"
            ]
        },

        Ben10 : {
            season_1 : [
                "[0]",
                "And Then There Were 10",
                "Washington B.C.",
                "The Krakken",
                "Permanent Retirement",
                "Hunted",
                "Tourist Trap",
                "Kevin 11",
                "The Alliance",
                "Last Laugh",
                "Lucky Girl",
                "A small Problem",
                "Side Effects",
                "Secrets"
            ]
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
            ],

            season_2 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1T6DrFgVJcBlstavSygsWJr7I1s3rafRD/preview", //1,
                "https://drive.google.com/file/d/1B-eMJ_HDonjDo8cERauArUfl1wQoFRly/preview", //2
                "https://drive.google.com/file/d/19URviOjtET5JLDwFTRrl-Hal43Rsnqyd/preview", //3
                "https://drive.google.com/file/d/1byYu6hYg3cI9YYhrI01hrRXycZrC65ft/preview", //4
                "https://drive.google.com/file/d/1U7PO4yPrR9HQDrwB8tMd1vNv4NjH6SpA/preview", //5
                "https://drive.google.com/file/d/1WWoh-ylCIpdVMODL1dmg3ZVGDsidGFzw/preview", //6
                "https://drive.google.com/file/d/1iWW9DGAo86j6eoC6JT7AcExhMsR3xl8a/preview", //7
                "https://drive.google.com/file/d/1-i-W9Jkwr8QPD5trGYgCoaiTsPu-lOBW/preview", //8
                "https://drive.google.com/file/d/1blwzWlCLfq27o-O9Tee67UBZcOeapNfP/preview", //9
                "https://drive.google.com/file/d/1_fBCg3ZdvIAd2GfeVB01N9_LzWakeTTd/preview", //10
                "https://drive.google.com/file/d/1oObHOOcAEw8jJ5IkQx9RYhfTzxsHacnv/preview", //11
                "https://drive.google.com/file/d/1K_uZA3iB7szgvkwbFjZjXe69cPXmsjso/preview", //12
                "https://drive.google.com/file/d/17fp-T77JiT1nMIU61jlkKqrRO6hqMEfh/preview", //13
                "https://drive.google.com/file/d/1AoIrazwZpJSuWz0FQU_0foOoBvr_yVCk/preview", //14
                "https://drive.google.com/file/d/1gKy24A8NhzZmFTYbA_1hdDo5vaJkrN4L/preview", //15
                "https://drive.google.com/file/d/1P309xWE7cNplnHjl7Fcm4E6AvzI6SZmC/preview", //16
                "https://drive.google.com/file/d/1Gc5cy8-mvfy9zm6HAMSS_OaAT-UIPWE3/preview", //17
                "https://drive.google.com/file/d/1zrRdQK4VpOyis9nRvhNlHAb-hDW6WFIM/preview", //18
                "https://drive.google.com/file/d/143uzW_Ar4fjl_xPVW2zw-86BpWxBh-4n/preview", //19
                "https://drive.google.com/file/d/1M4gYCpKGxgnomJx1Px1WU3_XGeJu56RP/preview"  //20 & 21
            ]
        },

        Loki : {
            season_1 : [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1lz0nOc_KxeIlLPNvmE4PltoyApdBXIK8/preview",
                "https://drive.google.com/file/d/1T9bQu5xeMID6tIyp181_TTwBU5Ivo9O_/preview",
                "https://drive.google.com/file/d/1snGIiVXXsLJ-sKk_iyEkgZt8aH1XrH4b/preview",
                "https://drive.google.com/file/d/1O1XHeopHpexzIo079dwyCgp9dL3hel3B/preview",
                "https://drive.google.com/file/d/1Xs-_vW4ier5Zn-pc8lWhxnw9Mp8LFd8R/preview",
                "https://drive.google.com/file/d/1hA8Cx7psNNGBm-VfQmd7hYBUzGs3Sq3f/preview"
            ],

            season_2 : [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1ckKZ6N9dVZJsgegiiLcJhmLEyy6c3xvb/preview",
                "https://drive.google.com/file/d/1lK2iLtbEZoQQ7JVDTTelCKXzJ0M0AcYH/preview",
                "https://drive.google.com/file/d/189aN9TVQEyXHxHOBIxEe21ZgLZ5Q16uN/preview",
                "https://drive.google.com/file/d/1m7OaX0NMGFSh_XIR2jqGlW5c5ug0GDPJ/preview",
                "https://drive.google.com/file/d/1fM4ihyMostBoplysmcds89ZVkWdeFEih/preview",
                "https://drive.google.com/file/d/1F0AmSJ-RZLyHHgFCX-0bLVuNcAIRrqHR/preview"
            ]
        }, 

        Ben10 : {
            season_1 : [
                "Start from index 1",
                "https://drive.google.com/file/d/1j4rkVVlBJl0FI0pjCpr_1tRDTOpPXFVk/preview",
                "https://drive.google.com/file/d/1Ma_poDsFdqSY4knY8DUsEKQaQmJbgcxs/preview",
                "https://drive.google.com/file/d/1AqO1lkgHYm7S1mFpOqCFqRBKCZCSYydm/preview",
                "https://drive.google.com/file/d/1VYVJ4NYPkqeWpPRaBMdkP4g6mvgq1nqz/preview",
                "https://drive.google.com/file/d/1tkjA5HP6blYdNukbFSuYT-h9GNhM1PrR/preview",
                "https://drive.google.com/file/d/1QfS3GAXYYahZuir_IJRrAtydcMB1HENG/preview",
                "https://drive.google.com/file/d/1H_cfAUnYJtaP2vInaJYTfH7JhHuMTh05/preview",
                "https://drive.google.com/file/d/1Ny_QFypp25bK-M3YDjrlXQhKKujAyAn7/preview",
                "https://drive.google.com/file/d/1WY8kUYMMIbQ6XhxAlCy97pGvW1-AGas1/preview",
                "https://drive.google.com/file/d/19fLUfYVoLMWgDzpBKWR4P6i6oNxXNtky/preview",
                "https://drive.google.com/file/d/1xjO0SrjURWZqXZ3tKXIhgvoxaq1-CtWo/preview",
                "https://drive.google.com/file/d/1dwExJZiFXebXuEoxpEWCzgQQvOhxeoiU/preview",
                "https://drive.google.com/file/d/1RI9wKpEZYoo12mYtCQHSAalf7rqt2hyL/preview"     
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
            episodeButton.textContent = `Episode: ${i} Title: ${serie_episode_title[serie][season][i]}`;
    
            // Attach click event to the button to update the iframe source
            episodeButton.addEventListener('click', function () {
                iframe.src = serie_episode_links[serie][season][i] || "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P";
                iframe.scrollIntoView({behavior : 'smooth' }); // Learn more about Page Scrolling in JavaScript
                const title_element = document.getElementById("title");
                title_element.textContent = `Giveth Movies - Serie Page --> Episode: ${i} Title: ${serie_episode_title[serie][season][i]}`;
                
                //Changing the url 
                // Update the URL without adding extra parameters
                let url = new URL(window.location.href);
                let params = new URLSearchParams(url.search);

                // Remove old Episode parameter
                params.delete('Episode');

                // Add new Episode parameter
                params.set('Episode', `${i}_Title=${serie_episode_title[serie][season][i]}`);

                // Update the URL in the browser without reloading the page
                window.history.replaceState({}, '', `${url.pathname}?${params}`);                
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

