//Get the id of the iframe
// iframe = document.getElementById("movie_iframe");

    
    
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
            TransformersOne : ["https://drive.google.com/file/d/1kF6L-4vbQ-zY3LNGu_OnCNTp0ka_amcM/preview"],
            UltramanRising : ["https://drive.google.com/file/d/1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo/preview"]            
        };
        
        //Links for watching ads
        const Ads_Sources = {
            Parkitect : "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P"
            
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
            TransformersOne : ["https://drive.usercontent.google.com/download?id=1kF6L-4vbQ-zY3LNGu_OnCNTp0ka_amcM&export=download&authuser=0"],
            UltramanRising : ["https://drive.usercontent.google.com/download?id=1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo&export=download&authuser=0"]

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
            UltramanRising : "Ultraman Rising"
        };

        // Set the iframe based on the selected video
    if (movieSources[movie])
    {
        iframe.src = movieSources[movie][0];
        console.log(iframe.src);
        iframe.setAttribute('frameborder', '0');

        //Update the download link
        movie_link.setAttribute("href", Download_links[movie]);

        //Update the movie title
        movie_title.textContent = titles[movie];
    }
    else
    {
        //Display an Add
        iframe.src = Ads_Sources.Parkitect;
    }
}

//Return the value from the iframe source and send it to the Drive Function Click event.
function Drive_Function_Value()
{
        return iframe.src;
}

// Call the function to do its thing when the page loads
window.onload = updateVideo()

function Drive_Function()
{
    iframe.setAttribute("src" , Drive_Function_Value());
}

// onclick="window.open('https://drive.google.com/', '_blank')"

// {/* <iframe src="https://drive.google.com/file/d/1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j/preview" width="640" height="480" allow="autoplay"></iframe> */}

{/* <iframe src="https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


