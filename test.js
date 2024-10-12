const serie_episode_title = {
    StevenUniverse: {
        season_1: [
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

    GravityFalls: {
        season_1: [
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

        season_2: [
            "Start from index 1",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21"
        ]
    }
};

// Access Gravity Falls seasons
const gravityFalls = serie_episode_title.GravityFalls;

console.log(gravityFalls)

// Loop through all seasons dynamically
for (let season in gravityFalls) {
    // Display the season title (e.g., "Season 1" instead of "season_1")
    const seasonTitle = season.replace('_', ' ').toUpperCase();
    console.log(`\n${seasonTitle} Episodes:`);  // "\n" adds a new line for clarity
    
    // Loop through the episodes within each season
    for (let i = 1; i < gravityFalls[season].length; i++) { // Start from index 1 to skip the first element
        console.log(`- Episode ${i}: ${gravityFalls[season][i]}`);
    }
}
