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
            
            Atlas : ["https://drive.google.com/file/d/1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j/preview"]
            
        };
        
        //Links for watching ads
        const Ads_Sources = {
            Parkitect : "https://www.youtube.com/embed/206ZciQfaTo?si=2aphoVwleM7WwD3P"
            
        };
        
        //Links for downloading videos.
        const Download_links =
        {
            ArtemisFowl : ["https://drive.usercontent.google.com/download?id=1WDEjvBOd2_7oj0T4IHrlsui2Fy4r4KLA&export=download&authuser=0"],

            Atlas : ["https://drive.usercontent.google.com/download?id=1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j&export=download&authuser=0"]
        };

        //Deal with titles
        const titles = {
            ArtemisFowl : "Artemis Fowl",
            Atlas : "Atlas",
            Blended : "Blended"
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


