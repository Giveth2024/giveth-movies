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
        Ben10 : "Ben 10",
        RiseOfTheTeenageMutantNinjaTurtles : "Rise Of The Teenage Mutant Ninja Turtles",
        Knuckles : "Knuckles",
        PhineasAndFerb : "Phineas And Ferb",
        HeroAcademia : "Hero Academia",
        TheAmazingWorldOfGumball : "The Amazing World Of Gumball"
    };

    const serie_seasons = {
        StevenUniverse: 1,
        GravityFalls : 2,
        Loki : 2,
        Ben10 : 4,
        RiseOfTheTeenageMutantNinjaTurtles : 2,
        Knuckles : 1,
        PhineasAndFerb : 4,
        HeroAcademia : 7,
        TheAmazingWorldOfGumball : 5
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
        },

        RiseOfTheTeenageMutantNinjaTurtles :
        {
            season_1 :
            [
                "[Start from Episode 1]",
                "Mystic Mayham",
                "Donnies' Gifts & Origami",
                "War and Pizza & NewsWorthy",
                "Down with The Sickness & Repo Mantis",
                "Shell in a Cell & Minotaur Maze",
                "The Fast and the Furriest & Mascot Melee",
                "The Longest Fight & Hypno Part Deux",
                "The Gumbus & Mrs Cuddles",
                "Stuck on you & Al Be Back",
                "Bug Busters",
                "The Evil League of Mutants",
                "The Purple Jacket & Pizza Pit",
                "Smart Liar & Hot Soup: The Game",
                "Late Fee & Bull Hop",
                "Mind Meld & Nothing But Truffle",
                "Portal Jacked & Hypno And Warren, Sitting in a Tree",
                "Operation: Normal & Sparring Partner",
                "Shadow Of Evil",
                "You Got Served & How To Make Enemies and People Bend to Your Will",
                "Mystic Library & The Purple Game"
            ],

            season_2 :
            [
                "[Start from index 1]",
                "Flushed But Never Forgotten & Lair Games",
                "Man vs. Sewer & The Mutant Menace",
                "Turtle-dega Nights: The Ballad of Rat Man & The Ancient Art of Ninja Hide and Seek",
                "One Mans Junk & Snow Day",
                "Cloak and Swaggart & Jupiter Jim Ahoy!",
                "Insane in the Mama Train",
                "End Game",
                "Many Unhappy Returns",
                "Todd Scouts & Goyles, Goyles, Goyles",
                "Breaking Purple & Repairin Baron",
                "Air Turtle & Pizza Puffs",
                "Sidekick Ahoy & The Hidden City Job",
                "Always be Brownies & Mystery Meat",
                "Donnie vs. Witch Town & Raph's Ride-Along",
                "Hidden City's Most Wanted & Bad Hair Day",
                "Fists of Furry & The Clothes Don't Make the Turtle",
                "Battle Nexus: New York",
                "Final Part 1 & Final Part 2",
                "Final Part 3 & Final Part 4"
            ]
        },

        Knuckles : 
        {
            season_1 :
            [
                "[Start from indexx 1]",
                "The Warrior",
                "Don't ever Say I wasn't there for you",
                "The Shabbat Dinner",
                "The Disaster of Flames",
                "Reno, Baby",
                "What happens in Reno, Stays in Reno"
            ]
        },

        PhineasAndFerb : 
        {
            season_1 :
            [
                "[start from index 1]",
                "RollerCoaster & Candace Loses Her Head",
                "The Fast and The Phineas & Lawn Gnome Beach Party",
                "The Magnificent View & Swinter",
                "Are you my Mummy & Flop Starz",
                "Raging Bully & Lights Candace Action",
                "Get that Bigfoot outa My Face Tree & Tree to Get Ready",
                "Its About Time",
                "Jerk De Soleil & Toy To The World",
                "One Good Score Ought to Do It ",
                "A Hard Day's Knight & I, Brobot",
                "Mom's Birthday & Journey to the Center of Candace",
                "Run Away RunAway & I Scream, You Scream",
                "Its a Mud Mud Mud Mud World & The Ballard of Badbeard",
                "Dude We're Getting the Band Back together",
                "Ready for the Bettys & The Flying Fish Monger",
                "Phineas and Ferb Get Busted",
                "Greece Lighting & Leave The Busting To Us",
                "Crack That Whip & The Best Lazy Day Ever ",
                "Boyfriend from 27000 BC & Voyage to the Bottom of Buford",
                "Put that Putter away & Does The Duckbill Make Me Look Fat",
                "Traffic Cam Caper & Bowl-R-Ama Drama",
                "The Monster of Phineas N Ferbstein & Oil On Candace",
                "Unfair Science Fair & Unfair Science Fair Redux (Another Story)",
                "Out to Launch",
                "Got Game & Comet Kermillian",
                "Out of Toon & Hail Doofania",
            ],

            season_2 :
            [
                "[Start from index 1]",
                "The Lake Nose Monster",
                "Interview With a Platypus & Tip of The Day",
                "Attack of The 50 Foot Sister & Backyard Aquarium",
                "Day Of the Living Gelatin & Elementary My Dear Stacy",
                "Don't Even Blink & Chez Platypus",
                "Perry Lays An Egg & Gaming The System",
                "The Chronicles Of Meap ",
                "Thaddeus and Thor & De Plane De Plane",
                "Let's Take a Quiz & At The car Wash",
                "Oh, There You Are, Perry & Swiss Family Phineas",
                "Hide and Seek & That Sinking Feeling",
                "The Baljeatles & Vanessassary Roughness",
                "No More Bunny Business & Spa Day",
                "Phineas and Ferb Quantum Boogalo ",
                "Phineas And Ferb Musical Cliptastic Countdown ",
                "Bubble Boys & Isabella and the Temple of Sap",
                "Cheer Up Candace & Fireside Girl Jamboree",
                "The Bully Code & Finding Mary McGuffin",
                "Picture This & Nerdy Dancin",
                "What Do It Do? & Atlantis",
                "Phineas and Ferb Christmas Vacation ",
                "Just Passing Through & Candace's Big Day",
                "I was a middle aged Robot & Suddenly Suzy",
                "Undercover Carl &  Hip Hip Parade",
                "Invasion of the Ferb Snatchers & Ain't No Kddie Ride",
                "Not Phineas and Ferb & Phineas and Ferb-Busters",
                "The Lizard Whisperer & Robot Rodeo",
                "The Beak",
                "She's the Mayor & The Lemonade Stand",
                "Phineas and Ferb Hawaiian Vacation Part 1 & Phineas and Ferb Hawaiian Vacation Part 2",
                "Phineas and Ferb Summer Belongs To you",
                "Nerbs of a Father",
                "Wizard of Odd ",
                "We call it Maze & Ladies and Gentlemen Meet Max Modem",
                "The Secret of Success & The Doof Side of The Moon",
                "Split Personality & Brain Drain",
                "RollerCoaster: The Musical!",
                "Make Play & Candace Gets Busted"
            ],

            season_3 : 
            [
                "[Start from index 1]",
                "Run, Candace, Run & Last Train to Bustville",
                "The Great Indoors & Canderemy",
                "The Belly of the Beast & Moon Farm",
                "Phineas and Ferb Clip-O-Rama",
                "Ask a Foolish Question & Misperceived Monotreme",
                "Candace Disconnected & Magic Carpet Ride",
                "Bad Hair Day & Meatloaf Surpise",
                "Tri-Stone Area: 27,000 BC & Doof Dynasty",
                "Phineas and Ferb Interrupted & A Real Boy",
                "Mommy Can You hear Me & Road Trip",
                "Skiddley Whiffers & Tour de Ferb",
                "My Fair Goalie ",
                "Perry the Actorpus & Bullseye!",
                "That's the Spirit & The Curse of Candace",
                "Escape from Phineas Tower & anpytalp eht to sniameR ehT ",
                "Ferb Latin & Lotsa Latkes",
                "A Phineas and Ferb Family Christmas",
                "What a Croc & Ferb TV",
                "Mom's in th House & Minor Monogram",
                "Excaliferb",
                "Monster from the Id & Gi-Ants",
                "Agent doof & Phineas and Ferb and the Temple of Juatchadoon",
                "Delivery of Destiny & Let's Bounce",
                "Quitest Day Ever & Bully Bromance Breakup",
                "The Doonkelberry Imperative & Buford Confidential",
                "Sleepwalk Surpise & Sci-Fie Pie Fly",
                "Meapless in Seattle",
                "The Mom Attractor & Cranius Maximus",
                "Sipping with the Enemy & Tri-State Treasure: Boot of Secrets",
                "Doofapus & Norm Unleashed",
                "When Worlds Collide & Road to Danville",
                "Where's Perry? ",
                "Where's Perry? (Part Two)",
                "Blackout & What'd I Miss",
                "This is your BackStory "
            ],

            season_4 :
            [
                "[Start from index 1]",
                "Fly on the wall & My sweet Ride",
                "For your ice only & Happy New Year",
                "Bully Bust & Backyard Hodge Podge",
                "Der Kinderlumper & Just desserts ",
                "Bee Day",
                "Sidetracked",
                "Knot My Problem & Mind Share",
                "Primal Perry",
                "La Candace-Cabra & Happy Birthday, Isabella",
                "Great Balls of Water & Where's Pinky",
                "Phineas and Ferb: Mission Marvel",
                "Thanks But No Thanks & Troy Story",
                "Love at First Byte & One Good Turn",
                "Cheers for Fears & Just Our Luck",
                "Return Policy & Imperfect Storm",
                "Steampunx & It's No Picnic",
                "Terrifying Tri-State Trilogy of Terror",
                "Druselsteinoween",
                "The Kimpaloon Ultimatum ",
                "Doof 101 & Father's Day",
                "Operation Crumb Cake & Mandace",
                "Tales from the Resistance Back to the 2nd Dimension",
                "The Return of the Rogue Rabbt & Live and Let Drive",
                "Lost in Danville & The Inator Method",
                "Act your Age",
                "Phineas and Ferb Save Summer Part 1 & 2",
                "Night of the living pharmacists & ",
                "Phineas and Ferb Star Wars",
                "Phineas and Ferb Last Day of Summer",
                "O.W.C.A -> Organization Without a Cool Acronym"                
            ]
        },

        HeroAcademia :
        {
            season_1 :
            [
                "[Start from index 1]",
                "Izuku Midoriya: Origin",
                "What It Takes to Be a Hero",
                "Roaring Muscles",
                "Start Line",
                "What I Can Do For Now",
                "Rage, You Damned Nerd",
                "Deku vs. Kacchan",
                "Bakugo's Start Line",
                "Yeah, Just Do Your Best, Ida!",
                "Encounter with the Unknown",
                "Game Over",
                "All Might",
                "In Each of Our Hearts",
                "[More Episodes to come]"
            ],
        },

        TheAmazingWorldOfGumball : 
        {
            season_1 :
            [
                "[Start from index1]",
                "The Third & The Debt",
                "The Pressure & The Printing",
                "The Responsible & The Dress",
                "The Laziest & The Ghost",
                "The Mystery & The Prank",
                "The Gi & The Kiss",
                "The Party & The Refund",
                "The Robot & The Picnic",
                "The Goons & The Secret",
                "The Sock & The Genius",
                "The Mustache & The Date",
                "The Club & The Wand",
                "The Ape & The Poltergeist",
                "The Quest & The Spoon",
                "The Car & The Curse",
                "The Microwave & The Meddler",
                "The Helmet & The Fight",
                "The End & The DVD",
            ],

            season_2 :
            [
                "[Start from index 1]",
                "The Knights & The Colossus",
                "The Fridge & The Remote",
                "The Flower & The Banana",
                "The Phone & The Job",
                "Halloween & The Treasure",
                "The Words & The Apology",
                "The Skull & Christmas",
                "The Watch & The Bet",
                "The Bumpkin & The Flakers",
                "The Authority & The virus",
                "The Pony & The Storm",
                "The Dream & The Sidekick",
                "The Hero & The Photo",
                "The Tag & The Lesson",
                "The Limit & The Game",
                "The Promise & The Voice",
                "The Boombox & The Castle",
                "The Tape & The Sweaters",
                "The Internet & The Plan",
                "The World & The Finale"                                         
            ],

            season_3 :
            [
                "[Start form index 1]",
                "The Kids & The Finale",
                "The Coach & The Joy",
                "The Recipe & The Puppy",
                "The Name & The Extras",
                "The Gripes & The Vacation=",
                "The Fraud & The Void",
                "The Boss & The Move",
                "The Law & The Allergy",
                "The Mothers & The Password",
                "The Procrastinators & The Shell",
                "The Mirror & The Burden",
                "The Bros & The Man",
                "The Pizza & The Lie",
                "The Butterfly & The Question",
                "The Oracle & The Safety",
                "The Friend & The Saint",
                "The Society & The SPoiler",
                "The Countdown & The Nobody",
                "The Triangle & The Money",
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
        },

        RiseOfTheTeenageMutantNinjaTurtles :
        {
            season_1 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1BOlFJFg4KeQK5zRbCKTov7rd2mm87Uq0/preview",
                "https://drive.google.com/file/d/1McbGDA4SQbw32_O_ZpYQTA9lyFSsPNf2/preview",
                "https://drive.google.com/file/d/1rhZUvLaqFstb-D8BN59PzSmy_rCHT9Sf/preview",
                "https://drive.google.com/file/d/1a2uUrS9hcfTz6rD5kJ1F7PCoKoY2I3xt/preview",
                "https://drive.google.com/file/d/14FWcQ78bbMzGdXyy5LoIXz66beJOgkTw/preview",
                "https://drive.google.com/file/d/1g5sN7Pr9oKUN5wDzskmHjC_ZhED2Gu9n/preview",
                "https://drive.google.com/file/d/1Dsrk2G_gmcBIEPrXS9oXZN_-wYVBY8cs/preview",
                "https://drive.google.com/file/d/1aADSEPGR-SG0Z92WyF47dAUn4muX_0BS/preview",
                "https://drive.google.com/file/d/1xorprwTd0vyRzNWCRo-s2l6cD8K_hwow/preview",
                "https://drive.google.com/file/d/1a6EYqrNxFtbNE3afh-d9jto849cssziW/preview",
                "https://drive.google.com/file/d/1AY86dxJA9cel5hio8kv9S7XK42GoXQND/preview",
                "https://drive.google.com/file/d/1szHq6rqGkt_orKe3jZQbW1eLNvKUN18S/preview",
                "https://drive.google.com/file/d/1KwbwKSVFrKmZOmJTci_I0kbTWaf0HJ_Z/preview",
                "https://drive.google.com/file/d/1l9iF1RCnKACKzt-zt3hENhTIVWwXzWPi/preview", 
                "https://drive.google.com/file/d/1ddDQ6rNr6V56wt8YQrayTTffACNLHGKV/preview",
                "https://drive.google.com/file/d/159ubax3eaWJshk-73VKZVY2_CHVOgBfE/preview",
                "https://drive.google.com/file/d/1lglXcjrDbAGFEkWrWR_bEnquT5jk0fV2/preview",
                "https://drive.google.com/file/d/19bY8a0QSyJq3oMdYv4AHwJz_kdcs5xlB/preview",
                "https://drive.google.com/file/d/1OhfaMd2FU5OeD6kTWkJBzClAjkvGKai4/preview",
                "https://drive.google.com/file/d/1_lmcd0xeZgSRLl6YuGkh62eZKwTEuyNe/preview"
            ],

            season_2 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/12zNP97I9KiOhBpkcQZrQJe9Angt7EEsy/preview",
                "https://drive.google.com/file/d/1iIW__Via75kpzzoC26RPAZ6_X7A_YjY_/preview",
                "https://drive.google.com/file/d/1pMl6Eqqgp8ayMKtokZsjlmK2f6qoOP5i/preview",
                "https://drive.google.com/file/d/1OBQcq1FovIEia4BX6gOLwC_FRk0hs7VK/preview",
                "https://drive.google.com/file/d/1F-fuXmjwiXDQwSOLnSd2S-8u1096Ud-L/preview", 
                "https://drive.google.com/file/d/1FE06fmH-yKaVxBqL5CcbTo5T_7yGNY_E/preview",
                "https://drive.google.com/file/d/1a0Dg0Aj1dg7bXAQ6XWu97RteeGWDjCpy/preview",
                "https://drive.google.com/file/d/1cBC86sSltKrm9KYwRcZXauIrpHEM-Jfl/preview",
                "https://drive.google.com/file/d/1OwHzwiQZeyXxfstwoAdDnVCaBVlEPnvA/preview",
                "https://drive.google.com/file/d/1ljq6Z22kTzA1OLVkLRFep6I0e3uzjzwO/preview",
                "https://drive.google.com/file/d/10VebDyJwCM84vieQ0IbmqGlE2iunlEMQ/preview",
                "https://drive.google.com/file/d/1kA1IUiFkHducMfaY1t0Ad5vhLMVX7Rdu/preview",
                "https://drive.google.com/file/d/1GqTKl_-FubtsBTB1JfqQZTndlh83Yq0e/preview",
                "https://drive.google.com/file/d/1OA45q90Cm7Y2HBe-z8161lilDpFWd-7X/preview",
                "https://drive.google.com/file/d/17DuVpl-AfJdN9JVtkGXpW1vspKe_a-A7/preview",
                "https://drive.google.com/file/d/13cCJ5otl-ZRWn-Qi8Q5_KA-9gouZyoYC/preview",
                "https://drive.google.com/file/d/1UpNayRtxMs2L_ECx_rIVsUwp4ZOedWu_/preview",
                "https://drive.google.com/file/d/1meS9GbjJyjVgZBO-mcFS0LHzDq47wdh2/preview",
                "https://drive.google.com/file/d/1avzLtdSClZ8TqhigA6OazGPe9vjEgBq6/preview"
            ]
        },

        Knuckles :
        {
            season_1 :
            [
                "https://drive.google.com/file/d/1r5BNFBM9bz_U4zMWF_rKr5gVLPbVwAmB/preview",
                "https://drive.google.com/file/d/11Fs97ekvzdECQCtkzi0Ye01nz1PaVAKv/preview",
                "https://drive.google.com/file/d/12hvXrKTs-727njl2COeo7kZalv9iZJ-y/preview",
                "https://drive.google.com/file/d/1PgJQDmYULLvRlxLaKGUnoasu652lS9i4/preview",
                "https://drive.google.com/file/d/1uoY4JAYuXPimxaCxhG_Jrs11HQnGPYTF/preview",
                "https://drive.google.com/file/d/1jSnlWTco649ZWY2_KlhftzOuUZLdU9LV/preview"
            ]
        },

        PhineasAndFerb : {
            season_1 : 
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1TYcaV0J1kF4dJLowEfqVpSW5ShVKv13Q/preview",
                "https://drive.google.com/file/d/1AUHiEoHZ8J_Pf4xk2nlEuvedJEHyChWO/preview",
                "https://drive.google.com/file/d/1RhnMrimZF2VYBGpo0vetWOTsCyEGYmkW/preview",
                "https://drive.google.com/file/d/1VcYCOy7d8Bj-jZhz0Gy5UTssESR6VAF1/preview",
                "https://drive.google.com/file/d/1p_JhStCB6I64c501lVyR34fqA-p5pc5l/preview",
                "https://drive.google.com/file/d/1J1nM_VmwXF5JatJSuykJ-QuLkBIncyNC/preview",
                "https://drive.google.com/file/d/1EFxaWMaYduQP2TNGr7ESci514KOhDVYQ/preview",
                "https://drive.google.com/file/d/1xFHvzhzmNG8_X3SUMLxHy5X4HzAhWKn3/preview",
                "https://drive.google.com/file/d/1vRvEH1m_xZ4ro5d5YtV0fvHGt5h1J0YC/preview",
                "https://drive.google.com/file/d/1gnITMvVejs4AuAzUPqLLHRdffGx9K16f/preview",
                "https://drive.google.com/file/d/1lCsw-Wcv5Kns8lLftqndCFSvW57K1GH9/preview",
                "https://drive.google.com/file/d/1f6UDeEH6xgYEQX1AMjFDu0L1ggbLaGdX/preview",
                "https://drive.google.com/file/d/1QLfmplQigBYzFweetogXXRQUbahHBuJV/preview",
                "https://drive.google.com/file/d/13uHp4XglW9vdYmwiwe-5ioseAfdeSymO/preview",
                "https://drive.google.com/file/d/1OTwqoEhBAjlAsgNvBwQfAiBlO6iIFjCn/preview",
                "https://drive.google.com/file/d/1RFx6i2BT7hxpErguN9fWf2TBsnJMdU7I/preview",
                "https://drive.google.com/file/d/1c4uHg0JbNCyK3TgR1MC6S5f7y3ujp6iW/preview",
                "https://drive.google.com/file/d/1URAFo9SWps7O3jj5-8QHrHjethP1ydIL/preview",
                "https://drive.google.com/file/d/1qUVHjU4zxWmopOUxubmEWX9nLbp0xwgG/preview",
                "https://drive.google.com/file/d/198ZdrTDBIsn58fFNo16Y2yVVpgiBi6JX/preview",
                "https://drive.google.com/file/d/1WtUstBq41uoG-mctnPmj9Drib5JeQjKY/preview",
                "https://drive.google.com/file/d/1suazQPmXGhdjFzAKYzMlRcHwn6qDQHU5/preview",
                "https://drive.google.com/file/d/1JU50d-F4gS5ckmCIHCtJpXjcoB08jk5-/preview",
                "https://drive.google.com/file/d/1UYZjFlPi3nyD4J-_1fFF1ngAy_4vsWTh/preview",
                "https://drive.google.com/file/d/1vyzJjyHSvMR2PRfWATU9Px4S7QJEma_k/preview",
                "https://drive.google.com/file/d/1ziYDMwoK_rbSHCN1GdAvCbP4zrIiBEtI/preview"
            ],

            season_2 : 
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1eFWc7PRMhtYGlGGUXITj1galC9Me-TKf/preview",
                "https://drive.google.com/file/d/138llCVAvKmx5CB2CGKnNFsxie5hvaDHZ/preview",
                "https://drive.google.com/file/d/1GWlYPgsDswDv-AlOfdgMSQyP1cNhVFaA/preview",
                "https://drive.google.com/file/d/1RJXIvqwFZgOXEp5-Vp3ZnbyjOYJduZa5/preview",
                "https://drive.google.com/file/d/1vRDZmzd_rMIUFl6M1Kp35ETSq2GMOGg5/preview",
                "https://drive.google.com/file/d/1ao1uY7nqmaNWSC6pIgZXZkfDPAnj5cEY/preview",
                "https://drive.google.com/file/d/1IwtsHsA9d3ISI_OWGhZIQtzPYKg9Qoxw/preview",
                "https://drive.google.com/file/d/1qcas8ky8VCV5XKBgcHEmlU6WSth7-_Kx/preview",
                "https://drive.google.com/file/d/1nT7Y_8fLZ_Kt_ysuGziO6X-4yrzoN69n/preview",
                "https://drive.google.com/file/d/1BaDx16fm6wXcUVXn1nIYfWPVFsjBdDaX/preview",
                "https://drive.google.com/file/d/1oon1qCHWpcLsix0EEs1e-ryQql4XKRin/preview",
                "https://drive.google.com/file/d/1HtkAbSo78aDsrRVV1pGidvMztM1wBnrT/preview",
                "https://drive.google.com/file/d/1IHoH1vAWVVSXVbnYoRu7obUre8C9f2Cf/preview",
                "https://drive.google.com/file/d/17GglOmHMjacRmGqwtazU56KciGCpFod5/preview",
                "https://drive.google.com/file/d/1ijDYjBTQIHP2C0evjlYwu5a6FINb2rK5/preview",
                "https://drive.google.com/file/d/1PWpoZiIk2hsSqREITRQmc3fYxZr2lfaD/preview",
                "https://drive.google.com/file/d/1Z5SAcMYfq8auABYyT7N5c9LgnUANKDSx/preview",
                "https://drive.google.com/file/d/1hdrN4i8vBBp2BpC_ttsWsvODPNbj14Pz/preview",
                "https://drive.google.com/file/d/1va6Ibp49iZ0_G1DZ4k0NU0ocz3IzwKPk/preview",
                "https://drive.google.com/file/d/1buD-ZOnVMvdMdIC0ZkxlaBHlvqdJVogo/preview",
                "https://drive.google.com/file/d/1-sG90q3JqzVTsi5jjwV5gUcL53F9v8Ky/preview",
                "https://drive.google.com/file/d/1IJXunpTeF7NXvWAlXql4r9lBzj5yXAGr/preview",
                "https://drive.google.com/file/d/13j9sim4CE3MgmMlFGl-JcYlAzUQoGlC9/preview",
                "https://drive.google.com/file/d/1WU7OZhCldQAnb9aq5SO-lji19RagZKLz/preview",
                "https://drive.google.com/file/d/14doePJnt3u8wHMSfpVqB4e_i7wkUFcWk/preview",
                "https://drive.google.com/file/d/192qQSBVZOtcpUqzeUy7QSVRtWZNm4Xjd/preview",
                "https://drive.google.com/file/d/1hkzlE50FyYAz5fpkDzqFLEMg-_p9Xy2C/preview",
                "https://drive.google.com/file/d/12-3lQmSGOCvKYlM5hnq1642X-_DoO24b/preview",
                "https://drive.google.com/file/d/1DcDSfIUzhQziYAZwgxL2Ewaojm79D7yV/preview",
                "https://drive.google.com/file/d/134cxip78fE7ToybMhjJpgemtdW_2UBHJ/preview",
                "https://drive.google.com/file/d/1RpBHWtzNZSyOSx0-Lpz48V4XhIek5V6n/preview",
                "https://drive.google.com/file/d/1SQ_9GLn7QRdbOxc-AONk5dWvRIhsSMG7/preview",
                "https://drive.google.com/file/d/1IuyhCI5DDPaVHRIvhfPPSFw4SqtXfieF/preview",
                "https://drive.google.com/file/d/1LM1pHSl6_SoiP12__We1T30nyPxWD4Pz/preview",
                "https://drive.google.com/file/d/126h5ezljc25hrknjHwgk09Ie6y1p6uj-/preview",
                "https://drive.google.com/file/d/1EigtgzGMNaUmFHw0sgKFahF_F8TKRO_s/preview",
                "https://drive.google.com/file/d/1jmfu_SKoXXmGsPKqWPAq3GryZ2vnlvIh/preview",
                "https://drive.google.com/file/d/1sj_LNNZYCN3n3h7wojghs3wPEntTV0cs/preview"
            ],

            season_3 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1at3QAJRMAgfm0obXuS2fSMqvZ-hR3B9S/preview",
                "https://drive.google.com/file/d/1ik6egr3R4Csfw6JdxG8UhrRmEMRrx9ws/preview",
                "https://drive.google.com/file/d/1gphUOl_vo-Beaa_Aabh1c_KDGA5p9yRF/preview",
                "https://drive.google.com/file/d/1w4NR0NDDWLUx9GDCcZ8I90LG0-xMupIA/preview",
                "https://drive.google.com/file/d/1LafW-ncxrHi3nxIDtxynI66uJGuwXxpl/preview",
                "https://drive.google.com/file/d/1-LgzMlLiq-fURgAkxvM9fA5z-umxHLLr/preview",
                "https://drive.google.com/file/d/1wmOR9wT349kVz0ANIai12MV5sskdUdTV/preview",
                "https://drive.google.com/file/d/1dkwXDQ1mWo5RmC59Yqc0V3JhIGBfr_od/preview",
                "https://drive.google.com/file/d/14HvI8dmRepalelUc2eu98jBlfdo09BnO/preview",
                "https://drive.google.com/file/d/1ugzi2mIJCEb661WHrFqBipAsafSt5Jmw/preview",
                "https://drive.google.com/file/d/1zYeJXARIitIgXMTjV_KgUUDtB-L38Bu5/preview",
                "https://drive.google.com/file/d/1X0-fHNR9aoiRNZOOwYhVz-14pbI30P8X/preview",
                "https://drive.google.com/file/d/12OBuX_igJgWhQ2khSReH588wXykBMPeS/preview",
                "https://drive.google.com/file/d/1jcQ2jrJsFmaTZRK2M5YZVauzof5PY8IZ/preview",
                "https://drive.google.com/file/d/1yJcwZi6354pQKuSs1yiSm9EnuMCp4TQW/preview",
                "https://drive.google.com/file/d/1zyTZuzti_Pt7rdcOXem2OjEMtbIazmP7/preview",
                "https://drive.google.com/file/d/1d6H1K7kNZpQgUbu4gJLrp7xU2l0xB-4j/preview",
                "https://drive.google.com/file/d/1A9x7z1dFAEwZFqB3Y7KgcIZBsblRPJne/preview",
                "https://drive.google.com/file/d/1h8KSe0Jmfb3VKqEtDM6JNKCGobbbTofL/preview",
                "https://drive.google.com/file/d/1VH-rk6v_oSxQsX0Em3NXOIDhhPB40QN6/preview",
                "https://drive.google.com/file/d/1aeESVsLXhw3HV13pGGfLrP21bYFhH-0d/preview",
                "https://drive.google.com/file/d/17h6qDAKi5AelyXP0oiKj5lE4GITgvMeV/preview",
                "https://drive.google.com/file/d/1Tu2vpSrycgBYewmJfM2jhjsu7IRsML0P/preview",
                "https://drive.google.com/file/d/1IQ3hca6TURnmj6DYmcdPCKLDpOEvCne-/preview",
                "https://drive.google.com/file/d/1WDWAV_8TiH6j9Cksmw5SGJLwCJm5HUz8/preview",
                "https://drive.google.com/file/d/1D8JicutouWhmDaZHyfOGq37kW8ng2uO_/preview",
                "https://drive.google.com/file/d/1kAi0lqMbfmBlu7rHU8jxL5GhkfSjJoQR/preview",
                "https://drive.google.com/file/d/1ZmrSxd-wVh2VqOuPm4DXDlPT_CjzYHxg/preview",
                "https://drive.google.com/file/d/1FAWPNY36Wdme83nTlbtNtvcXcTvQcHhI/preview",
                "https://drive.google.com/file/d/1z9ACj_JA_ecKHb6QQIZH_CnjeYodWfll/preview",
                "https://drive.google.com/file/d/1TKsbgZfs6utdsIht2sscwCdrsd4a3Faz/preview",
                "https://drive.google.com/file/d/1EcD1M_R45Lub2tDow-cOD4C0FEp21Pdq/preview",
                "https://drive.google.com/file/d/1kC6WgIAJkaLzeRcJJcRBbsLxEfOrikeJ/preview",
                "https://drive.google.com/file/d/1JcZfZjV_PDRXqIX_CRd-qvURhr6DOSgI/preview",
                "https://drive.google.com/file/d/1THlvQFRy82GOV87NjQaBpQqH-6z-Yt3L/preview"
            ],

            season_4 :
            [
                "[Start from index 1",
                "https://drive.google.com/file/d/1vm4pi2GAjSIaaYPfMDgjLlJta7nkpnli/preview",
                "https://drive.google.com/file/d/1C7Xlo7U3iTx9tTPDGYU3LFSgb9nIP5bG/preview",
                "https://drive.google.com/file/d/10gRkmBpwfyMb22xDtDfqVqDrLbEqHJh-/preview",
                "https://drive.google.com/file/d/1Oen6Nq7raGFTjJt4M7-ku8pyLJFMYIT2/preview",
                "https://drive.google.com/file/d/12lVKIUHf3hBaf8lo3LG8Kq_0k7xIbtb0/preview",
                "https://drive.google.com/file/d/1TO9TsnghdgVLZh6PWhYjJu_4vAdG4z1A/preview",
                "https://drive.google.com/file/d/1tM3AGggvxiq-FWtFtrgNCJMKZCWUE3tX/preview",
                "https://drive.google.com/file/d/1-K6RxuDWwm61qQkTfNsFM4ULJr6YifX6/preview",
                "https://drive.google.com/file/d/1WDkS2Khfe54Cs0fDRtPDqK4xrTAMb0pq/preview",
                "https://drive.google.com/file/d/1ounaSbmMBMQcDKEW2xLjJudWKPJ0pzpc/preview",
                "https://drive.google.com/file/d/19co7of6-tCHnVC0uyKEMirkabQpmTd0K/preview",
                "https://drive.google.com/file/d/14DVxVpzgayLDezZrxrlwZUV3Cmweq0he/preview",
                "https://drive.google.com/file/d/10HCLgPtThOpaFYe4CLKe0Afnxtz6XDIS/preview",
                "https://drive.google.com/file/d/1tOvjoshXCtJmz9EA4yJUd8kjXC-3Boss/preview",
                "https://drive.google.com/file/d/1oh7DcDY_I8snZkQG8fBm7BtanKIc2vJv/preview",
                "https://drive.google.com/file/d/1XhcDmQAx683QFYBFrpC9igfQtr0U7PYx/preview",
                "https://drive.google.com/file/d/1XW4zd6yhTxFc9nvQQX41UJefO1lV9u_g/preview",
                "https://drive.google.com/file/d/1BFYyxxkNsK0uRJnsxeHMSXKPndNWkTsZ/preview",
                "https://drive.google.com/file/d/1eIyiYHrMsf0vDCe60DV0gWUwoNPu_T_y/preview",
                "https://drive.google.com/file/d/14vuVlZMoIHo1y4tWfbxdlO0PF_i2PN8o/preview",
                "https://drive.google.com/file/d/1pocS8aR2pUH2-3NeLoIZrkvSAtxxjP5h/preview",
                "https://drive.google.com/file/d/1tgrnMkHm8fr4J7W6qopglAQcqPYvRPXd/preview",
                "https://drive.google.com/file/d/1vqQtqVGQMnAUwXjM6vUK3kwO6JEJCPoC/preview",
                "https://drive.google.com/file/d/13-r39DZ1QeEpktiopGq0FJGmyGgC2FXJ/preview",
                "https://drive.google.com/file/d/1fayLK8bu-Y6X1LlJ45GNcWI142aVVBaJ/preview",
                "https://drive.google.com/file/d/1t8vdRQDxuNsd1DXneNe-gOWG4XMshjZ6/preview",
                "https://drive.google.com/file/d/1aPqSWgitaRHGexpzRMwRnzXFqxcBwNCm/preview",
                "https://drive.google.com/file/d/1OKeOjpc92DLjH4tuimvnpNPTJKoze-3U/preview",
                "https://drive.google.com/file/d/1V-c2MJjRMouDCXYdMNmY36ZqQpv84dyn/preview",
                "https://drive.google.com/file/d/1nn9JzB2xUMvnyfNSCiuHaPkwlMT7_GAL/preview"
            ]
        },

        HeroAcademia :
        {
            season_1 : [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1S6vJklPnQXS7zKFUvYaDKDXgNMo31qBo/preview",
                "https://drive.google.com/file/d/1dvr9N6I8ezw0X-sux5asoIkLZithwMZ0/preview",
                "https://drive.google.com/file/d/1nSoIvlll2ppdCdRnOllMKcLnOm-RPzt6/preview",
                "https://drive.google.com/file/d/1b6My4V_ykW4887sK_ciVnRlkzEW-H9Lf/preview",
                "https://mega.nz/embed/2c5DkRbS#t6wkIc0HGddod5vYsYJ9nSBU0GDyF35yYhdre--SuTY",
                "https://drive.google.com/file/d/1Q-S6SRNHJIBDRCKCLxmYyrTGFxsJGlvB/preview",
                "https://drive.google.com/file/d/1ImPc7qjspikTV5s1rDp-QmO2jtfocQLE/preview",
                "https://drive.google.com/file/d/1_L-8L1gEE3vqg8HYfHZf2pUihGGa7K_h/preview",
                "https://drive.google.com/file/d/1uoz_2IfxGzfjFdt6qHvJo04Jof9MNyr-/preview",
                "https://drive.google.com/file/d/14om37zy8y2rqaPSeAFmVcF-XOgWb9_8r/preview",
                "https://drive.google.com/file/d/13Dd8oR__yg55ybMvZS_UgQzTaEty2BQ1/preview",
                "https://drive.google.com/file/d/1mJg18McpUG5BBDyfyAZbaE_s6ISpNOHO/preview",
                "https://drive.google.com/file/d/18_LJLs5El3y1IoG01ueJrX81ZZGRgpP0/preview"
            ]
        },

        TheAmazingWorldOfGumball :
        {
            season_1 :
            [
                "[start from index 1]",
                "https://drive.google.com/file/d/1WpDdaSZANwdfdIMLIdHW8XrPfAm3Jj1B/preview",
                "https://drive.google.com/file/d/1sZGMwr0dcTfcyRp4FjnczOAcK26mDPmZ/preview",
                "https://drive.google.com/file/d/1mP6_mWs3PLvtOACvxgsrCoGYmd0v6l6A/preview",
                "https://drive.google.com/file/d/1Y6sFXEJNwl05_Co4V5d6IM4AM9MGNqmW/preview",
                "https://drive.google.com/file/d/1XMrKmHfv2GgHCCpVGJiqrcMG2-LSCTeF/preview",
                "https://drive.google.com/file/d/1Kb7x9rmu4RGI3TuywBTaNTQDFj4suisv/preview",
                "https://drive.google.com/file/d/1LAw4UVvEqp-Dz6LonY6fybViIm0Fdekn/preview",
                "https://drive.google.com/file/d/18rO1fbE1jBxtc-_YMGEZWWXPEi7ZCqVF/preview",
                "https://drive.google.com/file/d/1Zso9YUMEjv4owOQOx5mn3lDCcxSSXME9/preview",
                "https://drive.google.com/file/d/1Kh2_CpiDJlJ0xaP_40I0wCEaOdXWYjUD/preview",
                "https://drive.google.com/file/d/1VqOHCxhUlF31W8dHh-O6gnBtW7xnyGBC/preview",
                "https://drive.google.com/file/d/1EtZ41g5JEro2B9qyUdIFHhxY-ndV2PAI/preview",
                "https://drive.google.com/file/d/1gAvxoZcyWU9e1Eun_2YBNDVwLY_Zpqqo/preview",
                "https://drive.google.com/file/d/1F63dhR2GzNNvfw3jLRtt2wmbkz8UMtwk/preview",
                "https://drive.google.com/file/d/1LWbZYioMz99cFcXyM5guAzO5sPPchC3r/preview",
                "https://drive.google.com/file/d/1v-GDln0N5Wq1IrrTTJG9y-RvHYjzmrxh/preview",
                "https://drive.google.com/file/d/1PSqkr5RwfMgwwgLTwr7Djabe8_yxvo_o/preview",
                "https://drive.google.com/file/d/1BmUlTmkjli_2ZwXxBtG8arKdAIecHhXZ/preview"
            ],

            season_2 :
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1b6L910a64d-XfzG81E4Ujf0vtdvBqExF/preview",
                "https://drive.google.com/file/d/14aWxTaEH2wDq3HuX7qM7GAbSBLce7WGJ/preview",
                "https://drive.google.com/file/d/1cYpGfVco6OXihGu4FMYvA7-egT6euN5b/preview",
                "https://drive.google.com/file/d/1gIQ0YN6EPfsXVW9g5g4CzbaESYz6IeIw/preview",
                "https://drive.google.com/file/d/1eYPB6AQ54m73PKTCI0-iq7SICEtwb_s3/preview",
                "https://drive.google.com/file/d/1cjtaUyZJKyVo-KHUTPfs9IWUfbnSbNrj/preview",
                "https://drive.google.com/file/d/17jC5tQvdl31SmIUcEURwTGhMOKntVi6w/preview",
                "https://drive.google.com/file/d/1Jse_z3XePh7Db6mbv-BI0MopvJfZ538n/preview",
                "https://drive.google.com/file/d/1F2RKCqIbyPFFi5urjVRylGCmS7xhdJcD/preview",
                "https://drive.google.com/file/d/1I_tCvGCwN55p6f-mhb8OkAnYGAZAu2GV/preview",
                "https://drive.google.com/file/d/1vIR58svJFakwM7RvY8_ae3JCpuyle8CB/preview",
                "https://drive.google.com/file/d/1uAFIlBX6j3U17yFdRttHI88sYauuyr2h/preview",
                "https://drive.google.com/file/d/1UpZYYazGEMSyquAwpfd_CfuQp2CDx-Hd/preview",
                "https://drive.google.com/file/d/1Xx_5JzqeDMavKvSWBx3zHEDFRQC5fZ-T/preview",
                "https://drive.google.com/file/d/1CAcVdcZKF6Oa9g1DgboYpt3-M0yC__6U/preview",
                "https://drive.google.com/file/d/19apTdVlNK6MEZiZG4pqiR4fo_2I5c75t/preview",
                "https://drive.google.com/file/d/1179PYZna5inrdnOq40XVAHJhXUEUR1mH/preview",
                "https://drive.google.com/file/d/1Otco4HOLd40AEVdK3aHVt-G7lNmmEeGE/preview",
                "https://drive.google.com/file/d/1iTyDlTmV-KqJ5l11QuQjr3ogyOujo1Jj/preview",
                "https://drive.google.com/file/d/1l2cEageWwhSBxUwf1bUnwGrpYQeEDt9W/preview"
            ],

            season_3 : 
            [
                "[Start from index 1]",
                "https://drive.google.com/file/d/1TUiw2RVrk2MISKhWs6qOqRMk_g9UgB6D/preview",
                "https://drive.google.com/file/d/1iJpzSYyQmC-Kw7LtCsYMoqS7de2Zy_zc/preview",
                "https://drive.google.com/file/d/147y95dPkxTDspZ13wYdmdbmbVLBBksLj/preview",
                "https://drive.google.com/file/d/1DfK-Ruk7GJo387_FDFLmSBt52fBztTfa/preview",
                "https://drive.google.com/file/d/1txgJiRf63D8nEP2aZJjTjUteoSaoodpq/preview",
                "https://drive.google.com/file/d/1n2Da7OxWPwHuZBThf4nUJDzke1KSZCvA/preview",
                "https://drive.google.com/file/d/1VtkAI3ZTjet-ITuPcQoAFv5v5Ddkq_H0/preview",
                "https://drive.google.com/file/d/1L8KLFzDB2dYLbt9d4vxBhLCCN0-kveXJ/preview",
                "https://drive.google.com/file/d/1SvttrykaOU3h3tPdJ62Yfq-PHoiPYZOH/preview",
                "https://drive.google.com/file/d/1HchYFbFP07AnIuag2MqJxGDTpZkyNHlA/preview",
                "https://drive.google.com/file/d/1ZwGqgMrGhc9Y8KTAWBwOfB84j015u0wW/preview",
                "https://drive.google.com/file/d/1J32fVh4QpdmAoDmkdedMFBz1kk38WaJ8/preview",
                "https://drive.google.com/file/d/1qTrTOGLKcqUtfGXFT0ruIt7USQx7oXoC/preview",
                "https://drive.google.com/file/d/1OGGEaw9_qz7z3Sks_h65_0O3A8UF0fZA/preview",
                "https://drive.google.com/file/d/1SKQ984-XTopAXd1nCwtlRmkxPC5tTZv3/preview",
                "https://drive.google.com/file/d/1rRKSVbrxKrylUdc3yPntGpyKSBKXp2Oz/preview",
                "https://drive.google.com/file/d/1ksIeJbTaNWaOiFDCxfKJkBaeNCoHvKwj/preview",
                "https://drive.google.com/file/d/1y2Y-Mh7ghpH1-Td0drzbT2LZqJIXDfvS/preview",
                "https://drive.google.com/file/d/1JYJxGjS5oRxRdXdDo3nZnnGtann9B4z8/preview",
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

                //add
                document.getElementById('serie_title_h2').textContent = `Episode: ${i} Title: ${serie_episode_title[serie][season][i]}`
                
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

