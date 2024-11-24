const objectForMovies = JSON.parse(localStorage.getItem("movies_object"));
let urlValue = new URL(window.location.href);
urlValue = urlValue.searchParams.get("movie");

let text = urlValue.toLowerCase().trim().replaceAll(" ", "");

if (objectForMovies[text])
    {
        for(let item = 0; item < Object.keys(objectForMovies).length - 1; item++)
        {
        // Filter its contents
            for (let i = item; i < Object.values(objectForMovies).length; i++)
            {
                //Display all the element
                for (let j = 0; j < 5; j++)
                {
                    if (j === 0)
                    {
                        let item_title = objectForMovies[text][i][j];
                        document.getElementById("movie_title").textContent = `${item_title}`;
                    }
                    if (j === 3)
                    {
                        let item_iframe = objectForMovies[text][i][j];
                        document.getElementById("movie_iframe").setAttribute("src", `${item_iframe}`);
                        function Drive_Function()
                        {
                            document.getElementById("movie_iframe").setAttribute("src", `${item_iframe}`);
                        }
                    }
                    if (j === 4)
                    {
                        let item_download = objectForMovies[text][i][j];
                        document.getElementById("movie_download_link").setAttribute("href", `${item_download}`) ;
                    }                 
                }

                
                
            }
    
    }
}

// Educational Purposes Only 
footer_text = document.querySelector(`.text`);

education_element = document.createElement("p");
education_element.id = "educ_id";
education_element.textContent = "This website is for Educational Purposes Only";
education_element.style.fontSize = "12.5px";
education_element.style.marginTop = "5px"
footer_text.appendChild(education_element);