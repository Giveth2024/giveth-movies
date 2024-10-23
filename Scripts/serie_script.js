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
                "Arcade Mania",
                "Giant Woman",
                "So Many Birthdays",
                "Lars and the Cool Kids",
                "Onion Trade",
                "Steven the sword Fighter",
                "Lion 2 The Movie",
                "Beach Party",
                "Rose's Room",
                "Coach Steven",
                "Joking Victim",
                "Steven and the Stevens",
                "Monster Buddies",
                "An indirect Kiss",
                "Mirror Gem",
                "Ocean Gem",
                "House Guest",
                "Space Race",
                "Secret Team",
                "Island Adventure",
                "Keep Beach City Weird",
                "Fusion Cuisine",
                "Garnet's Universe",
                "Watermelon Steven",
                "Lion 3: Straight to Video",
                "Warp Tour",
                "Alone Together",
                "The Test",
                "Future Vision",
                "On the run",
                "Horror Club",
                "Winter Forecast",
                "Maximum Capacity",
                "Marble Madness",
                "Roses' Scarbbard",
                "The Message",
                "Political Power",
                "The return",
                "JailBreak",
                "Full Disclosure",
                "Open Book",
                "Joy Ride"
            ],

            season_2 :
            [
                "[Start from index 1]",
                "Say Uncle",
                "Story for Steven",
                "Shirt Club",
                "Love Letters",
                "Reformed",
                "Sworn to the sword",
                "Rising Tides, Crashing Skies",
                "Keeping it Together",
                "We need to talk",
                "Chille Tid",
                "Cry for Help",
                "Keystone Motel",
                "Onion Friend",
                "Historical Friction",
                "Friend Ship",
                "Nightmare Hospital",
                "Sadie's Song",
                "Catch And Release",
                "When It Rains",
                "Back to the Barn",
                "Too Far",
                "The Answer",
                "Steven's Birthday",
                "It could've been great",
                "Message Recieved",
                "Log Date 7 15 2"
            ],

            season_3 :
            [
                "[Start from index 1]",
                "Super Watermelon Island",
                "Gem Drill",
                "Same Old World",
                "Barn Mates",
                "Hit the Diamond",
                "Steven Floats",
                "Drop Beat Dad",
                "Mr. Greg",
                "Too Short To Ride",
                "The New Lars",
                "Beach City Drift",
                "Restaurant Wars",
                "Kiki's Pizza Delivery Service",
                "Monster Reunion",
                "Alone At Sea",
                "Greg The Babysitter",
                "Gem Hunt",
                "Crack the Whip",
                "Steven vs Amethyst",
                "Bismuth",
                "Beta",
                "Earthlings",
                "Back to the Moon",
                "Bubbled",
            ],

            season_4 :
            [
                "[Start from index 1]",
                "Kindergarten Kid",
                "Know your Fusion",
                "Buddy's Book",
                "Mindful Education",
                "Future Boy Zoltron",
                "Last One Out Of Beach City",
                "Onion Gang",
                "Gem Harvest",
                "Three Gems and a Baby",
                "Steven's Dream",
                "Adventures in Light Distortion",
                "Gem Heist",
                "The Zoo",
                "That Will be All",
                "The New Crystal Gems",
                "Storm in the Room",
                "Rocknaldo",
                "Tiger Philanthropist",
                "Room for Ruby",
                "Lion 4: Alternate Ending",
                "Doug Out",
                "The Good Lars",
                "Are you my dad?",
                "I am my Mom"
            ],

            season_5 :
            [
                "[Start from index 1]",
                "Stuck Together",
                "The Trial",
                "Off Colors",
                "Lar's Head",
                "Dewey Wins",
                "Gemcation",
                "Raising the Barn",
                "Back to the Kindergarten",
                "Sadie Killer",
                "Kevin Party",
                "Lars of the Stars",
                "Jungle Moon",
                "Your Mother And Mine",
                "The Big Show",
                "Pool Hoping",
                "Letters to Lars",
                "Can't Go Back",
                "A single Pale Rose",
                "Now we're only falling Apart",
                "What's your problem",
                "The Question",
                "Made of Honor",
                "Reunited",
                "Legs from here to homeworld",
                "Familiar",
                "Together Alone",
                "Escapism",
                "Change your mind"
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
        StevenUniverse: {
            season_1 : 
            [
                "This is Episode 0, Start from Episode 1",
                "https://drive.google.com/file/d/1N4eX8NflYhW4NgKQ4c3VEejEFs6jycfe/preview",//1
                "https://drive.google.com/file/d/1MVjT0TqDBTPSPeQCujtTCEnUAvrh6gCC/preview",
                "https://drive.google.com/file/d/1dtbSPzE1btj_T-RKj9dYljfgCmV9V_9z/preview",
                "https://drive.google.com/file/d/1pbeFtzfyZ1TZU4wjUnU1ywAswaztzyB3/preview",
                "https://drive.google.com/file/d/1hyuvgQMp1fNAxGfMMAj3xzteLILOJ33Q/preview",
                "https://drive.google.com/file/d/1-3HgqZ8JdWJoTaW4mRGux0JY8hWRotqN/preview",
                "https://drive.google.com/file/d/1qVRtrVqEVSWeCkLx9c8cKDm7r_5U88Vu/preview",
                "https://drive.google.com/file/d/11VwLi2j4RsBB9x-hCnxCuF0Dt6-IMCmZ/preview",
                "https://drive.google.com/file/d/1E4SEkQRbG_feiSJ_L4JEt3Ky6kESRX9c/preview",
                "https://drive.google.com/file/d/1SUEsu5s-yVH1o5N7MYirQu2wgTDozQzZ/preview",
                "https://drive.google.com/file/d/11ItSVwL8qHOQI_iJ2TnauC-yLV2NKeym/preview",//11
                "https://drive.google.com/file/d/1vs5JLKQ4tuGpOfpleCPjpOon5PVA9E7d/preview",
                "https://drive.google.com/file/d/1PM4rplSvxLeWgulTDE5pR_JOsnXpS74v/preview",
                "https://drive.google.com/file/d/1lD_TbtHC6_g89HpSI3TaAwWmR356EPUq/preview",
                "https://drive.google.com/file/d/16aQ8E50CNuepPNhsXUDCY9uwH4ha3jH1/preview",
                "https://drive.google.com/file/d/1yyz967TC1FKNTocblbYeg_qYk8_gkj24/preview",
                "https://drive.google.com/file/d/1yVlVf-hAMttVoY3IGWu4xpDvtI2yV1Hh/preview",
                "https://drive.google.com/file/d/11pmRE0s7gvQyW__BKqxC-35pNry0H5MF/preview",
                "https://drive.google.com/file/d/14XBOLad7Qzh5ZvvAwhdXUEfGyR4mVKR4/preview",
                "https://drive.google.com/file/d/1S3QjUOMqyHvzIqL3P9iNMgfFwhIJ2nWI/preview",
                "https://drive.google.com/file/d/1cbdSb6YitioTyvkpXI3d9DRjybp_iAJI/preview",//21
                "https://drive.google.com/file/d/17MGRNMNCxCz31W05LMCobZDobBqpCLq5/preview",
                "https://drive.google.com/file/d/1CUwwKu0GdJvoODww71GrQMVFp0686KND/preview",
                "https://drive.google.com/file/d/16tWNqSgik2nYJZFAWwfINsENcB6ZaUlA/preview",
                "https://drive.google.com/file/d/1klCfm7LgzZVyLyig0wzcxS0uIHETepjc/preview",
                "https://drive.google.com/file/d/1y-yUQ30xyxt05z7vX1bj8LES00bj2OqY/preview",
                "https://drive.google.com/file/d/1i7UuYK_OP6Isr0E0tRRf1cXfRDfwu1Z8/preview",
                "https://drive.google.com/file/d/1PKwMxdcq_inlotzXhNFup1VuR2B9joxU/preview",
                "https://drive.google.com/file/d/17HWzBD4Hc4jvpBJ2nv8PFWJ81P2AzHv2/preview",
                "https://drive.google.com/file/d/1le24ORujmkJMFxp0nT89BsOq5ppqok7Q/preview",
                "https://drive.google.com/file/d/106iVcCnMkQS_nyuob86uBdrSdSUItxUE/preview",//31
                "https://drive.google.com/file/d/1qDm1-tBeoK4BxgZcwtNSP3oBo4ANhlSW/preview",
                "https://drive.google.com/file/d/1U4guk1jeVo61yhfD8hwIAsNaUdPgzip4/preview",
                "https://drive.google.com/file/d/1VOS2lUM9d1QDxiDnxJ1fT0TwVW1IYXb4/preview",
                "https://drive.google.com/file/d/1nafzJSD1tce4edVeE3hznAaXhRVxywPs/preview",
                "https://drive.google.com/file/d/1aI8jIfQQJ2sQK5hQbJrpWafUqGqMdx9G/preview",
                "https://drive.google.com/file/d/1Xf_YeUmpdAzL9fNaL-lOcPjVrDzHmRe0/preview",
                "https://drive.google.com/file/d/1HbiCudlJDVE0kIMlZMnb98Pa0qlyt9VR/preview",    
                "https://drive.google.com/file/d/17kFV0ymDcPsvuKaXLL_9u9Bg9w2URAQt/preview",
                "https://drive.google.com/file/d/1YuyXh5SDxQU12rc9DORPnJ_n8zl-4V6n/preview",
                "https://drive.google.com/file/d/1u6DqFspX0l-3xe4J5oqxcEgWXVc0lLjt/preview",//41
                "https://drive.google.com/file/d/1kogQMRaP90OtGMXSoMbLEFFTik1TDwsc/preview",
                "https://drive.google.com/file/d/12YPMWTM74ZPKbQXYVn-qYrrFK8NixUlf/preview",
                "https://drive.google.com/file/d/1x4zTP2SzBRF9srCnzsgLsVYEpIpyboUM/preview",
                "https://drive.google.com/file/d/1hA4WrRYXM5W5XhF-p6H_H9auNErLTcuW/preview",
                "https://drive.google.com/file/d/1UDMtGJkMes3DyDhPN4ywzMeWdKFiPnBt/preview",
                "https://drive.google.com/file/d/1nspQLSic_2GPyCg6QgaRpIcQjVCTLPKQ/preview",
                "https://drive.google.com/file/d/1XVqnRQsBnUGYcY5WM1MVOX044-AGtdxB/preview",
                "https://drive.google.com/file/d/1GmqEMiywTk-FKlN0s2mkvvFSrJUYICCN/preview",
                "https://drive.google.com/file/d/1jfb-tHl7OF10y9g_YxSh86Ww6Zm-b0Mp/preview",
                "https://drive.google.com/file/d/1TWMRLav1QQxpnZ57wNBy2BBAYYcSBAeW/preview",//51
                "https://drive.google.com/file/d/1L-TotTWJxnjMbXepzA1LZEgUAhQAvLhc/preview"
            ],

            season_2 : 
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1Vabe_S9t829nSpugjcl9xhIAqdXZz5cd/preview",//1
                "https://drive.google.com/file/d/1m5lZcVIKY6zL4JuuvEOKAXxp4KFII2oC/preview",
                "https://drive.google.com/file/d/1ApdV46yFBWNHaqbrcEtRSJBq-Pf2SuMG/preview",
                "https://drive.google.com/file/d/1VzX5B8TIS79j8GxFvc93rlqnwA8ooaSe/preview",
                "https://drive.google.com/file/d/1wLVUeTutvDdR_AILTx2VtAgqp7t053r5/preview",
                "https://drive.google.com/file/d/132YbYUzjC_CftkSLNT9sNfrmIeb9qLCf/preview",
                "https://drive.google.com/file/d/1rzziHuSRQiCWYVAW7HFzRGnzyua3dsBx/preview",
                "https://drive.google.com/file/d/1d8QvVSxbpT5qKWrf1e3ywYkjPuxpzo-Q/preview",
                "https://drive.google.com/file/d/1hhCp6AInU_AM5ZWAMXKUpOF58rxLir18/preview",
                "https://drive.google.com/file/d/1ZlCc_ckuqY56gnGTLCK_FzvcwxZaddeG/preview",
                "https://drive.google.com/file/d/1KUgeFcY5CFglMxXQMrTcp-_TBv2nYG4i/preview",//11
                "https://drive.google.com/file/d/16LTi2AyfuEFOdn7HLFPqfGISh6myIKqA/preview",
                "https://drive.google.com/file/d/1ZNaBsWPXGVZbiCLquJ0wEDL73hlmCJyl/preview",
                "https://drive.google.com/file/d/1l5O64Hk9zQcYiuNS9b7f7HqKjaOoI0sw/preview",
                "https://drive.google.com/file/d/13KNyRUIS5a-QTjytm0PR24kll4NJYJi8/preview",
                "https://drive.google.com/file/d/1nRrGx-4AwnOfgGkgMVSfe-tYF7SkMms_/preview",
                "https://drive.google.com/file/d/1wQg2oSv-sZG7Bi6al5QxKXPZC2FA_4Nj/preview",
                "https://drive.google.com/file/d/1TGxSokLOqVTSvAekYkCUmwozxOl4g-Ei/preview",
                "https://drive.google.com/file/d/1mScjbkn9PhIgjOUOx06joRrDQxQH9Bv6/preview",
                "https://drive.google.com/file/d/1niwyhuXlS8g9QuwvleTgj3YXfE5LHZI0/preview",
                "https://drive.google.com/file/d/1m3TiNDX2WhckUYd-Y3AQeeiSBoX6M0Rb/preview",//21
                "https://drive.google.com/file/d/1uFC01EGLd8iqBWOu8T0NARSbJ8xsuJdh/preview",
                "https://drive.google.com/file/d/1oxbH1oYIT81R-7bOZAviYJC3Y9YS8QE7/preview",
                "https://drive.google.com/file/d/1cxZ7f5VeImdHNgLDCoOJNjCkIPU5fm5b/preview",
                "https://drive.google.com/file/d/1tSulegUv5ndY-JmjMN7Umshw_Gnl6Hnn/preview",
                "https://drive.google.com/file/d/11gKrp4tvpjgbiC5OIty6wmt1P6MUVFLW/preview"
            ],

            season_3 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1oiCPX_IcLvPsIdbQS-pfMsC6hLIr4KVS/preview",//1
                "https://drive.google.com/file/d/1cT1U7l_o7KRH3XTkPJRlRbXTGDQZjseX/preview",
                "https://drive.google.com/file/d/1l872t8PrQ2en2tC7xPY0M4vKBeaaMQhx/preview",
                "https://drive.google.com/file/d/1C-Vg07yBawnQN8CeiEqzrJ2MUBm625Un/preview",
                "https://drive.google.com/file/d/1c26V6hVux9H41_L4cNetYKoqu1Sip1gj/preview",
                "https://drive.google.com/file/d/1wWe5FL6uP2svueAoOV1yYFW9jCTgJojT/preview",
                "https://drive.google.com/file/d/1SdlWRXFYyRLeZSs3M-oKNAduvEx8LHCq/preview",
                "https://drive.google.com/file/d/1oawXQTsiUzrH8DPN_M7LC06DdMf2P-kt/preview",
                "https://drive.google.com/file/d/1yLL9ExSB_RXFRJmf6sAxFISmT67Cm0Qs/preview",
                "https://drive.google.com/file/d/1URIYONbGAPJ2gac9ZjN7r3SNE-wDCzN4/preview",
                "https://drive.google.com/file/d/1WC-L3excyyNUtB5wNvtTy1dlgKM7ajWe/preview",//11
                "https://drive.google.com/file/d/1RJo-UFqthC2IWiDOYFbORG_AqdG0rdHa/preview",
                "https://drive.google.com/file/d/1MyEcBwxedPLe4acIKLnm3kD6BKpfxPHC/preview",
                "https://drive.google.com/file/d/1hBRVR_1Ci6XHtfjYw0tAp9-fGhSSkERp/preview",
                "https://drive.google.com/file/d/1TzNKFbWbf0GzeUdHkvX8RJ8r99bOZ_jQ/preview",
                "https://drive.google.com/file/d/1uMvIjeea2sX9zlBJeAYBt2DWgNbwbHrD/preview",
                "https://drive.google.com/file/d/1sHBv2SRkDWLen2gAHgRU1gyX-5G74LYp/preview",
                "https://drive.google.com/file/d/12irK06EWGEnxyNC8mi0UULQMP7OU4pAK/preview",
                "https://drive.google.com/file/d/1jatyr8WFPX-6Kbdx3VqXsCP8L6mgx0Ic/preview",
                "https://drive.google.com/file/d/15gKBcIzo-0Bw4MF1W5h5RdikwH4PWAdw/preview",
                "https://drive.google.com/file/d/11rr2a5k1qQbq17O5xiDKWcmd_tn3fsLx/preview",//21
                "https://drive.google.com/file/d/10Uw8WvNRPXs-1At4fDjBh8IODVmNl1zf/preview",
                "https://drive.google.com/file/d/112yjOO0TtFqiwS5L6e6BZFHGiGWEDrEX/preview",
                "https://drive.google.com/file/d/1LPiPkRGAA3KdG9WdLPEKss2EYtivqM0r/preview"
            ],

            season_4 : 
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1n0MO8SRyOsS7MpeXRhj6DjZHix2svFvZ/preview",//1
                "https://drive.google.com/file/d/1tq-mkcdNhPJQnEe7umLD0CDt2LzwEUSv/preview",
                "https://drive.google.com/file/d/1D4t6tj5ePpZR--dW-lL18_94OL7cVgRh/preview",
                "https://drive.google.com/file/d/1zIwJ21_OlvMZ61V5q_R00xZJ09wt6NWk/preview",
                "https://drive.google.com/file/d/1iQAI4muKg0s4WyhFRIhUHqh8ydMccSMA/preview",
                "https://drive.google.com/file/d/1p7RaBtapbC3blaqAIcxzn3mboQ_okVem/preview",
                "https://drive.google.com/file/d/1bOGE72BqTmCepeYp-uDnJXuiJoD23_D2/preview",
                "https://drive.google.com/file/d/1x_ZJ5P8_1jnCHW1wcC8RE7Nm6R603sQc/preview",
                "https://drive.google.com/file/d/1j9sO7LcgMLP26PZJBn-j2W6KNAn8ekKC/preview",
                "https://drive.google.com/file/d/1gQuaWRlSIYIYuGt4ouCLPnuSWHlrgmwa/preview",
                "https://drive.google.com/file/d/1yzzcoUGndZKcenh70Ig0sPu26LmbFMjE/preview",//11
                "https://drive.google.com/file/d/1l2Tt-Yr40fsrsfOcOTdu17ie38oGtK2N/preview",
                "https://drive.google.com/file/d/1EQAM6VkCdHBuaG9puWLB_oWV_jA1vp21/preview",
                "https://drive.google.com/file/d/1356b92FYBzGmAnq40e2R_yuG_8O9cTM8/preview",
                "https://drive.google.com/file/d/1UPzjwxx5Ojj7-GmyTr3v4uOru1IkIoPn/preview",
                "https://drive.google.com/file/d/102zWk0lsptRV4pzvUw_iVf2NU8x97acn/preview",
                "https://drive.google.com/file/d/1mLK-wjhUhfvZwhJqG4ROAgwTU-0Tdl-I/preview",
                "https://drive.google.com/file/d/1OUkz-N7fwOBkSndl9cQTc2gUKto_2gel/preview",
                "https://drive.google.com/file/d/1CWwbDCY8x_6IWgRZ4O-aOvZ_P3sqhDeg/preview",
                "https://drive.google.com/file/d/15j6f2CN7J0L3GiIvT5JrCxOyMOsNiQCf/preview",
                "https://drive.google.com/file/d/1WUBX5FTP-ZDSsF7VJNGmMiTAF3nFAt46/preview",//21
                "https://drive.google.com/file/d/1g9DxzdlpOMEZTpN8PLcizf09gINgy3fq/preview",
                "https://drive.google.com/file/d/1Y6lcSczsQ6Ne_caJN6VV7A39Qm_YJij5/preview",
                "https://drive.google.com/file/d/1i4gOEJZmopgZCataKIPLVqKMw8mLolh5/preview"
            ],

            season_5 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1UZkal0WWNMatpYdTxXvsfvpYQeisgY2G/preview",//1
                "https://drive.google.com/file/d/1Si81ko3c0k6znfsU5lL82fiIS8XbjlmF/preview",
                "https://drive.google.com/file/d/1GNA2lePZsSZDcje5pdvnbjcjnan5tMM4/preview",
                "https://drive.google.com/file/d/1tdIydndfGac86AieGdjE21TPLQzimjXg/preview",
                "https://drive.google.com/file/d/1TQJW1B7lI1xLdpL_ZUQAYYuipW_XKOj_/preview",
                "https://drive.google.com/file/d/1EY6M8vefG52bDGD3hqjEk2qQnJp6e6nk/preview",
                "https://drive.google.com/file/d/1Es2NKTDC_vJPXuy5mjUQgP_Lv85LIh_Y/preview",
                "https://drive.google.com/file/d/1QZtxsgzt78Td4IHTjY4CaKtHB5QKDcau/preview",
                "https://drive.google.com/file/d/1udGcShV1hlIuofWuLLpzNcefiq5bmKJs/preview",
                "https://drive.google.com/file/d/14LDYmT-R36nxzR36WRU640fc-UZa_IuJ/preview",
                "https://drive.google.com/file/d/192fRreeO2ESBKZJv3ESCc3m1dKQlX3q8/preview",//11
                "https://drive.google.com/file/d/1BudMdm1ZCVZS9gmmyMpC0eA8lQWYoX2t/preview",
                "https://drive.google.com/file/d/1WuMwSquNRNKkxGgCE7hQwvwNaHUeXPDE/preview",
                "https://drive.google.com/file/d/1_NFpWykCTM23srseFakrp2AlYCE80R7E/preview",
                "https://drive.google.com/file/d/1xJkFOTu-RRMsQc9YrZOsa_yEgvqQ99D7/preview",
                "https://drive.google.com/file/d/1_HD5qbupZxTEwJe3iQdZMKnhMvH7LfFZ/preview",
                "https://drive.google.com/file/d/149cawcZQWG_W2P1CwogUA_QoAfenF1oq/preview",
                "https://drive.google.com/file/d/1zk3PCkYwO0jGd1NTWz_6yuAjaHxdef3Z/preview",
                "https://drive.google.com/file/d/1FnPDXJh6ifPmxFeJCYiW33kQLxZt5mG-/preview",
                "https://drive.google.com/file/d/12vP8RIvS_Np6RkAH-A0jlR2FuN_D53Ux/preview",
                "https://drive.google.com/file/d/1ZN0FpXQPp3FBYDn2OczjnzZ5A8H1wePr/preview",//21
                "https://drive.google.com/file/d/1lQQ2Wkh1MoWx2flHs1Y-rMJU57nsnsOC/preview",
                "https://drive.google.com/file/d/1ynB_miS10zkEaHAMt8w2DJhZ02so71Ie/preview",
                "https://drive.google.com/file/d/1170CQOLE-qAA1xl45uXa-ZDfR37YgG_0/preview",
                "https://drive.google.com/file/d/19miSul8cJn5x32Wdw8dD_fvf5Hf9MqVa/preview",
                "https://drive.google.com/file/d/1JI-045EagKhylughrqrLROpL5mw5EZwh/preview",
                "https://drive.google.com/file/d/1D9iJcNHJCuXMyJv80n50-APNdLqFZyS2/preview",
                "https://drive.google.com/file/d/1blL8SCxsb4bUoAgFAfYQZWpRRs26Pmao/preview"
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

