  
//Funtion to extract the url video parameter name
function getUrlParameter(name)
{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
    
    // Function to be updated based on the video parameter
    function updateVideo()
{
        const movie = getUrlParameter('movie'); // Get the video parameter from the URL
        iframe = document.getElementById("movie_iframe");
        movie_link = document.getElementById("movie_download_link");
        movie_title = document.getElementById("movie_title");
        
        //Define the video sources
        // links for watching movies
        const movieSources = {
            ArtemisFowl : ["https://drive.google.com/file/d/1WDEjvBOd2_7oj0T4IHrlsui2Fy4r4KLA/preview"],
            Atlas : ["https://drive.google.com/file/d/1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j/preview"],
            Blended : ["https://drive.google.com/file/d/1pmPgrQPLtR_G7RFDl6sEche_K8l1cYwQ/preview"],
            StevenUniverseTheMovie : ["https://drive.google.com/file/d/1zdR0omW2Sw7vPWnmMDxJslG9PT4t-muE/preview"],
            TheMortalInstrumentsCityOfBones : ["https://drive.google.com/file/d/1ozDpQyTcjF67m9OwOpFEfBcXxLXstlOJ/preview"],
            DespicableMe4 : ["https://drive.google.com/file/d/1BvLOnqonhdMy0CrcyaJE7QOU6mws7TVq/preview"],
            InsideOut2 : ["https://drive.google.com/file/d/1EmG0G3i3BIuaBBisy86h2snf1lM5dHHk/preview"],
            Coco : ["https://drive.google.com/file/d/1ZmLorAzGiI8yU2FziDMxc6H2bY8HqPvs/preview" ],
            TransformersOne : ["https://drive.google.com/file/d/1KrbodTN3q5T5Vi0yhx6ECxODHJ_frqOx/preview"],
            UltramanRising : ["https://drive.google.com/file/d/1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo/preview"],
            TheCasagrandesMovie : ["https://drive.google.com/file/d/19EackSIzexsxatwzqK9hwtwQTup4Uibd/preview"], 
            TheGarfieldMovie : ["https://drive.google.com/file/d/1uYSmjVOwASOxFnpO6vlplvSmkP49LYaT/preview"], 
            MegamindvsTheDoomSyndicate : ["https://drive.google.com/file/d/19tjzSofKrv99r9vBnhiJzLupHQD99JPJ/preview"],
            BlackCloverSwordoftheWizardKing : ["https://drive.google.com/file/d/1JZ1XcqqIg4j5CuI7NqObqs92dZintSAi/preview"],
            OrionandtheDark : ["https://drive.google.com/file/d/1h8SegMoyFT9SLgRJ-gy4OIN4ac25hgVf/preview"],
            KungFuPanda4 : ["https://drive.google.com/file/d/1HZLYW7hqpfQmwfeG1npsvjg6jka1zPa4/preview"],
            TheWildRobot : ["https://drive.google.com/file/d/1g2tx8Cog-YH3JM9Ry0BJQH8K5LjeAbmg/preview"],
            RiseOfTheTeenageMutantNinjaTurtlesTheMovie : ["https://drive.google.com/file/d/1yvkCaibIUoV6AhLhIun3LzhNlhVzCb5u/preview"],
            WoodyWoodPeckerGoesToCamp : ["https://drive.google.com/file/d/1AM6InMumv5r500GNtLDdUw4S266tyOZz/preview"],
            NextGen : ["https://drive.google.com/file/d/1lf72MVzZOAvIg1IIGIyumckA1FVqEzo6/preview"]
        };
        
        //Links for downloading videos.
        const Download_links =
        {
            ArtemisFowl : ["https://drive.usercontent.google.com/download?id=1WDEjvBOd2_7oj0T4IHrlsui2Fy4r4KLA&export=download&authuser=0"],
            Atlas : ["https://drive.usercontent.google.com/download?id=1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j&export=download&authuser=0"],
            Blended : ["https://drive.usercontent.google.com/download?id=1pmPgrQPLtR_G7RFDl6sEche_K8l1cYwQ&export=download&authuser=0"],
            StevenUniverseTheMovie : ["https://drive.usercontent.google.com/download?id=1zdR0omW2Sw7vPWnmMDxJslG9PT4t-muE&export=download&authuser=0"],
            TheMortalInstrumentsCityOfBones : ["https://drive.usercontent.google.com/download?id=1ozDpQyTcjF67m9OwOpFEfBcXxLXstlOJ&export=download&authuser=0"],
            DespicableMe4 : ["https://drive.usercontent.google.com/download?id=1BvLOnqonhdMy0CrcyaJE7QOU6mws7TVq&export=download&authuser=0"],
            InsideOut2 : ["https://drive.usercontent.google.com/download?id=1EmG0G3i3BIuaBBisy86h2snf1lM5dHHk&export=download&authuser=0"],
            Coco : ["https://drive.usercontent.google.com/download?id=1ZmLorAzGiI8yU2FziDMxc6H2bY8HqPvs&export=download&authuser=0"],
            TransformersOne : ["https://drive.usercontent.google.com/download?id=1KrbodTN3q5T5Vi0yhx6ECxODHJ_frqOx&export=download&authuser=0"],
            UltramanRising : ["https://drive.usercontent.google.com/download?id=1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo&export=download&authuser=0"],
            TheCasagrandesMovie: ["https://drive.usercontent.google.com/download?id=19EackSIzexsxatwzqK9hwtwQTup4Uibd&export=download&authuser=0"],
            TheGarfieldMovie : ["https://drive.usercontent.google.com/download?id=1uYSmjVOwASOxFnpO6vlplvSmkP49LYaT&export=download&authuser=0"],
            MegamindvsTheDoomSyndicate : ["https://drive.usercontent.google.com/download?id=19tjzSofKrv99r9vBnhiJzLupHQD99JPJ&export=download&authuser=0"],
            BlackCloverSwordoftheWizardKing : ["https://drive.usercontent.google.com/download?id=1JZ1XcqqIg4j5CuI7NqObqs92dZintSAi&export=download&authuser=0"],
            OrionandtheDark : ["https://drive.usercontent.google.com/download?id=1h8SegMoyFT9SLgRJ-gy4OIN4ac25hgVf&export=download&authuser=0"],
            KungFuPanda4 : ["https://drive.usercontent.google.com/download?id=1HZLYW7hqpfQmwfeG1npsvjg6jka1zPa4&export=download&authuser=0"],
            TheWildRobot : ["https://drive.usercontent.google.com/download?id=1g2tx8Cog-YH3JM9Ry0BJQH8K5LjeAbmg&export=download&authuser=0"],
            RiseOfTheTeenageMutantNinjaTurtlesTheMovie : ["https://drive.usercontent.google.com/download?id=1yvkCaibIUoV6AhLhIun3LzhNlhVzCb5u&export=download&authuser=0"],
            WoodyWoodPeckerGoesToCamp : ["https://drive.usercontent.google.com/download?id=1AM6InMumv5r500GNtLDdUw4S266tyOZz&export=download&authuser=0"],
            NextGen : ["https://drive.usercontent.google.com/download?id=1lf72MVzZOAvIg1IIGIyumckA1FVqEzo6&export=download&authuser=0"]
        };

        //Deal with titles
        const titles = {
            ArtemisFowl : "Artemis Fowl",
            Atlas : "Atlas",
            Blended : "Blended",
            StevenUniverseTheMovie : "Steven Universe The Movie",
            TheMortalInstrumentsCityOfBones : "The Mortal Instruments City Of Bones",
            DespicableMe4 : "Despicable Me 4",
            InsideOut2 : "Inside Out 2",
            Coco : "Coco",
            TransformersOne : "Transformers One",
            UltramanRising : "Ultraman Rising",
            TheCasagrandesMovie : "The Casagrandes Movie",
            TheGarfieldMovie : "The Garfield Movie",
            MegamindvsTheDoomSyndicate : "Megamind vs The Doom Syndicate",
            BlackCloverSwordoftheWizardKing : "Black Clover Sword of the Wizard King",
            OrionandtheDark : "Orion and the Dark",
            KungFuPanda4 : "Kung Fu Panda 4",
            TheWildRobot : "The Wild Robot",
            RiseOfTheTeenageMutantNinjaTurtlesTheMovie : "Rise Of The Teenage Mutant Ninja Turtles The Movie",
            WoodyWoodPeckerGoesToCamp : "Woody Wood Pecker Goes To Camp",
            NextGen : "Next Gen"
        };

        // Set the iframe based on the selected video
    if (movieSources[movie])
    {
        iframe.src = movieSources[movie][0];
        iframe.setAttribute('frameborder', '0');

        //Update the download link
        movie_link.setAttribute("href", Download_links[movie]);

        //Update the movie title
        movie_title.textContent = titles[movie];
    }
    else
    {
        //Display an Add
        console.log("Contact developer")
    }
}

// Function to handle URL parameter changes without reloading the page
window.addEventListener('popstate', updateVideo);

// Call updateVideo when the page loads to set the initial video
window.onload = function() {
    updateVideo();
};

//Return the value from the iframe source and send it to the Drive Function Click event.
function Drive_Function_Value()
{
    return iframe.src;
}

function Drive_Function()
{
    iframe.setAttribute("src" , Drive_Function_Value());
}

// Toggle the menu when the hamburger icon is clicked
const menu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});