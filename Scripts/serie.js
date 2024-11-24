const objectForSeries = JSON.parse(localStorage.getItem("series_object"));
const div_Holders = document.getElementById("serie_links_holder");
const iframe_element = document.getElementById("serie_iframe");
const h1 = document.getElementById("serie_title");
const h2 = document.getElementById("serie_title_h2");

let urlValue = new URL(window.location.href);
urlValue = urlValue.searchParams.get("serie");

let text = urlValue.toLowerCase().trim().replaceAll(" ", "");

if (objectForSeries[text])
{
    for(let item = 0; item < Object.keys(objectForSeries).length; item++)
    {  
        if(objectForSeries[text])
        {
            for (let m = item; m < Object.values(objectForSeries).length; m++)
            {
                
                //Access items inside the serie
                for (let n = 0; n < 4; n++)
                {
                    if (n === 0 )
                    {
                        let serie_Title = objectForSeries[text][m][n];
                        h1.textContent = `${serie_Title}`;
                
                    }

                    if (n === 3 )
                    {
                        let serie_Information = objectForSeries[text][m][n];
                        if (serie_Information)
                        {          
                            for (let element = 0; element < serie_Information.length; element++)
                            {
                                let counter = element;
                                counter = counter + 1;
                                //create a p element
                                p_serie_title = document.createElement("p");
                                p_serie_title.className = "season_number_class";
                                p_serie_title.id = `season_number_id_${counter}`;
                                p_serie_title.textContent = `season ${counter}`;
                
                                //inside the link holder
                                div_Holders.appendChild(p_serie_title);
                
                                for(let item = 0; item < serie_Information[element].length; item++)
                                {
                                    //Create a box that will hold the watch and download links
                                    box = document.createElement("div");
                                    box.className = "link_box";
                
                                    div_Holders.appendChild(box);
                
                                    for (let index = 0; index < serie_Information[element][item].length; index++) {
                                        if (index === 0)
                                        {
                                            let counter = item;
                                            counter = counter + 1;
                                                                //Create a button
                                            var button = document.createElement("button");
                                            button.className = "serie_button_class";
                                            button.id = `serie_button_${item}`;
                                            button.textContent = `Episode ${counter} : ${serie_Information[element][item][index]}`;
                
                                            box.appendChild(button);
                                                                
                                            button.addEventListener("click", function() {
                                                h2.textContent = `${serie_Information[element][item][index]}`;
                    
                                            });
                                        }
                                        if (index === 1)
                                        {
                                            button.addEventListener("click", function() {
                                                iframe_element.setAttribute("src",` ${serie_Information[element][item][index]}`)
                                                document.getElementById("up").scrollIntoView({behavior : 'smooth' });
                    
                                            });
                                        }
                                        if (index === 2)
                                        {
                                            let a_link = document.createElement("a");
                                            a_link.id = `serie_download_link_${item}`;
                                            a_link.className = "series_download_links";
                                            a_link.setAttribute("href", `${serie_Information[element][item][index]}`);
                                            a_link.textContent = "⬇";
                
                                            box.appendChild(a_link);
                                                                
                                        }
                                    }
                                }
                            }
                            
                            // localStorage.clear();
                            
                        }
                
                    }
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
