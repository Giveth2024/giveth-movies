try
{
    function storeMoviesContent()
    {   //movie_name, image_path, iframe_src, download_link 
        movies = {
            //MOVIES
            artemisfowl : [["Artemis Fowl", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Artemis.jpg", "https://drive.google.com/file/d/1WDEjvBOd2_7oj0T4IHrlsui2Fy4r4KLA/preview", "https://drive.usercontent.google.com/download?id=1WDEjvBOd2_7oj0T4IHrlsui2Fy4r4KLA&export=download&authuser=0"]],
            atlas :   [["Atlas", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Atlas.jpg", "https://drive.google.com/file/d/1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j/preview", "https://drive.usercontent.google.com/download?id=1GTpEEKstrYEdYh-adDQdzOM2yX8TMP0j&export=download&authuser=0"]],
            blended : [["Blended", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Blended.jpg", "https://drive.google.com/file/d/1pmPgrQPLtR_G7RFDl6sEche_K8l1cYwQ/preview", "https://drive.usercontent.google.com/download?id=1pmPgrQPLtR_G7RFDl6sEche_K8l1cYwQ&export=download&authuser=0"]],
            stevenuniversethemovie : [["Steven Universe The Movie", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/StevenUniverseTheMovie.jpg", "https://drive.google.com/file/d/1zdR0omW2Sw7vPWnmMDxJslG9PT4t-muE/preview", "https://drive.usercontent.google.com/download?id=1zdR0omW2Sw7vPWnmMDxJslG9PT4t-muE&export=download&authuser=0"]],
            themortalinstrumentscityofbones : [["The Mortal Instruments City Of Bones", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/TheMortalInstrumentsCityOfBones.jpg", "https://drive.google.com/file/d/1ozDpQyTcjF67m9OwOpFEfBcXxLXstlOJ/preview", "https://drive.usercontent.google.com/download?id=1ozDpQyTcjF67m9OwOpFEfBcXxLXstlOJ&export=download&authuser=0"]],
            despicableme4 : [["Despicable Me 4", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Despicable_Me_4.jpg", "https://drive.google.com/file/d/1BvLOnqonhdMy0CrcyaJE7QOU6mws7TVq/preview", "https://drive.usercontent.google.com/download?id=1BvLOnqonhdMy0CrcyaJE7QOU6mws7TVq&export=download&authuser=0"]],
            insideout2 : [["Inside Out 2", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Inside_Out_2.jpg", "https://drive.google.com/file/d/1EmG0G3i3BIuaBBisy86h2snf1lM5dHHk/preview", "https://drive.usercontent.google.com/download?id=1EmG0G3i3BIuaBBisy86h2snf1lM5dHHk&export=download&authuser=0"]],
            coco : [["Coco", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Coco.jpg", "https://drive.google.com/file/d/1ZmLorAzGiI8yU2FziDMxc6H2bY8HqPvs/preview", "https://drive.usercontent.google.com/download?id=1ZmLorAzGiI8yU2FziDMxc6H2bY8HqPvs&export=download&authuser=0"]],
            transformersone : [["Transformers One", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Transformers_One.jpg", "https://drive.google.com/file/d/1KrbodTN3q5T5Vi0yhx6ECxODHJ_frqOx/preview", "https://drive.usercontent.google.com/download?id=1KrbodTN3q5T5Vi0yhx6ECxODHJ_frqOx&export=download&authuser=0"]],
            ultramanrising : [["Ultraman Rising", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Ultraman Rising.jpg", "https://drive.google.com/file/d/1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo/preview", "https://drive.usercontent.google.com/download?id=1iGKuZkbSBch5B9EpHePOfp1kTpQFN-Bo&export=download&authuser=0"]],
            thecasagrandesmovie : [["The Casagrandes Movie", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/The_Casagrandes_Movie.jpg", "https://drive.google.com/file/d/19EackSIzexsxatwzqK9hwtwQTup4Uibd/preview", "https://drive.usercontent.google.com/download?id=19EackSIzexsxatwzqK9hwtwQTup4Uibd&export=download&authuser=0"]],
            thegarfieldmovie : [["The Garfield Movie", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/The_Garfield_Movie.jpg", "https://drive.google.com/file/d/1uYSmjVOwASOxFnpO6vlplvSmkP49LYaT/preview", "https://drive.usercontent.google.com/download?id=1uYSmjVOwASOxFnpO6vlplvSmkP49LYaT&export=download&authuser=0"]],
            megamindvsthedoomsyndicate : [["Megamind vs The Doom Syndicate", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Megamind_vs_the_Doom_Syndicate.jpg", "https://drive.google.com/file/d/19tjzSofKrv99r9vBnhiJzLupHQD99JPJ/preview", "https://drive.usercontent.google.com/download?id=19tjzSofKrv99r9vBnhiJzLupHQD99JPJ&export=download&authuser=0"]],
            blackcloverswordofthewizardking : [["Black Clover Sword of the Wizard King", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Black_Clover_Sword_of_the_wizard_king.jpg", "https://drive.google.com/file/d/1JZ1XcqqIg4j5CuI7NqObqs92dZintSAi/preview", "https://drive.usercontent.google.com/download?id=1JZ1XcqqIg4j5CuI7NqObqs92dZintSAi&export=download&authuser=0"]],
            orionandthedark : [["Orion and the Dark", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Orion_and_the_dark.jpg", "https://drive.google.com/file/d/1h8SegMoyFT9SLgRJ-gy4OIN4ac25hgVf/preview", "https://drive.usercontent.google.com/download?id=1h8SegMoyFT9SLgRJ-gy4OIN4ac25hgVf&export=download&authuser=0"]],
            kungfupanda4 : [["Kung Fu Panda 4", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Kung_Fu_Panda_4.jpg", "https://drive.google.com/file/d/1HZLYW7hqpfQmwfeG1npsvjg6jka1zPa4/preview", "https://drive.usercontent.google.com/download?id=1HZLYW7hqpfQmwfeG1npsvjg6jka1zPa4&export=download&authuser=0"]],
            thewildrobot : [["The Wild Robot", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Wild_Robot.jpg", "https://drive.google.com/file/d/1g2tx8Cog-YH3JM9Ry0BJQH8K5LjeAbmg/preview", "https://drive.usercontent.google.com/download?id=1g2tx8Cog-YH3JM9Ry0BJQH8K5LjeAbmg&export=download&authuser=0"]],
            riseoftheteenagemutantninjaturtlesthemovie : [["Rise Of The Teenage Mutant Ninja Turtles The Movie", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Rise_of_teenage_mutant_ninja_turtles.jpg", "https://drive.google.com/file/d/1yvkCaibIUoV6AhLhIun3LzhNlhVzCb5u/preview", "https://drive.usercontent.google.com/download?id=1yvkCaibIUoV6AhLhIun3LzhNlhVzCb5u&export=download&authuser=0"]],
            woodywoodpeckergoestocamp : [["Woody Wood Pecker Goes To Camp", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Woody_Wood_Pecker_Goes_To_Camp.jpg", "https://drive.google.com/file/d/1AM6InMumv5r500GNtLDdUw4S266tyOZz/preview", "https://drive.usercontent.google.com/download?id=1AM6InMumv5r500GNtLDdUw4S266tyOZz&export=download&authuser=0"]],
            nextgen : [["Next Gen", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Next Gen.jpg", "https://drive.google.com/file/d/1lf72MVzZOAvIg1IIGIyumckA1FVqEzo6/preview", "https://drive.usercontent.google.com/download?id=1lf72MVzZOAvIg1IIGIyumckA1FVqEzo6&export=download&authuser=0"]],
            legomonkiekidembraceyourdestiny : [["Lego Monkie Kid Embrace Your Destiny", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/EmbraceYourDestiny.jpg", "https://drive.google.com/file/d/1trS8OqH_VmkKnAb_uZomxGAbMTjtCIz9/preview", "https://drive.usercontent.google.com/download?id=1trS8OqH_VmkKnAb_uZomxGAbMTjtCIz9&export=download&authuser=0"]],
            legomonkiekidtheemperorswrath : [["Lego Monkie Kid The Emperor's Wrath", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/Emperor_Wrath.jpg", "https://drive.google.com/file/d/1jQpNAaqZcxR9WwKoK-wm7brp88oyBuZg/preview", "https://drive.usercontent.google.com/download?id=1jQpNAaqZcxR9WwKoK-wm7brp88oyBuZg&export=download&authuser=0"]],
            legomonkiekidaheroisborn : [["Lego Monkie Kid A Hero Is Born", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images/Movie Images/A_Hero_Is_Born.jpg", "https://drive.google.com/file/d/1aU1lkzskBt9G6qg8hGiMjMd1bKp86lFU/preview", "https://drive.usercontent.google.com/download?id=1aU1lkzskBt9G6qg8hGiMjMd1bKp86lFU&export=download&authuser=0"]],
            legomonkiekidrevengeofthespiderqueen : [["Lego Monkie Kid Revenge Of The Spider Queen", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/RevengeOfTheSpiderQueen.jpg", "https://drive.google.com/file/d/1QcsjySoH1QmFb7RbAxH4fSrn_GtjL9g1/preview", "https://drive.usercontent.google.com/download?id=1QcsjySoH1QmFb7RbAxH4fSrn_GtjL9g1&export=download&authuser=0"]],
            luck : [["Luck", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/Luck.jpg", "https://drive.google.com/file/d/15Gsaz6aLyLHSYBp1Uws4XB7LuO8vLoKU/preview", "https://drive.usercontent.google.com/download?id=15Gsaz6aLyLHSYBp1Uws4XB7LuO8vLoKU&export=download&authuser=0"]],
            migration: [["Migration", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/Migration.jpg", "https://drive.google.com/file/d/1HuN7UseUu6XxXN09yvom6PBsXC80MENd/preview", "https://drive.usercontent.google.com/download?id=1HuN7UseUu6XxXN09yvom6PBsXC80MENd&export=download&authuser=0"]],
            mummies: [["Mummies", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/Mummies.jpg", "https://drive.google.com/file/d/1nKMzxs2NQJIUpXLtmIEiXoi7QV8Zk_lX/preview", "https://drive.usercontent.google.com/download?id=1nKMzxs2NQJIUpXLtmIEiXoi7QV8Zk_lX&export=download&authuser=0"]],
            nimona: [["Nimona", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/Nimona.jpg", "https://drive.google.com/file/d/1zpzbIm5j9qpFVQE81NhPfeVm05vD0Ny5/preview", "https://drive.usercontent.google.com/download?id=1zpzbIm5j9qpFVQE81NhPfeVm05vD0Ny5&export=download&authuser=0"]],
            pokemondetectivepikachu: [["Pokemon Detective Pikachu", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/PokemonDetectivePikachu.jpg", "https://drive.google.com/file/d/1I2yV1tAZwy3avYtj77nPK6ExcayxI8Ll/preview", "https://drive.usercontent.google.com/download?id=1I2yV1tAZwy3avYtj77nPK6ExcayxI8Ll&export=download&authuser=0"]],
            spidermanacrossthespiderverse: [["Spider Man Across The Spider Verse", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/SpiderManAcrossTheSpiderVerse.jpg", "https://drive.google.com/file/d/1g4KHDy_wrzB_zCeeI_Hx6vnsC0FFV9VZ/preview", "https://drive.usercontent.google.com/download?id=1g4KHDy_wrzB_zCeeI_Hx6vnsC0FFV9VZ&export=download&authuser=0"]],
            thebadguys: [["The Bad Guys", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/TheBadGuys.jpg", "https://drive.google.com/file/d/1X4wAFG74wKD5HMnINdy5M4Lig-Pr_TNd/preview", "https://drive.usercontent.google.com/download?id=1X4wAFG74wKD5HMnINdy5M4Lig-Pr_TNd&export=download&authuser=0"]],
            themonkeyking: [["The Monkey King", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/TheMonkeyKing.jpg", "https://drive.google.com/file/d/1C1bCHK4dT2EhiUNFMxDKN2HiFlhVfEb1/preview", "https://drive.usercontent.google.com/download?id=1C1bCHK4dT2EhiUNFMxDKN2HiFlhVfEb1&export=download&authuser=0"]],
            thesupermariobrosmovie: [["The Super Mario Bros Movie", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/TheSuperMarioBrosMovie.jpg", "https://drive.google.com/file/d/1JggmBlhFgDiHjUQyn4PeF67M09an06MM/preview", "https://drive.usercontent.google.com/download?id=1JggmBlhFgDiHjUQyn4PeF67M09an06MM&export=download&authuser=0"]],
            wish: [["Wish", `../Other_Webpages/watch_movie.html?movie=${decryptedText}`, "../Images//Movie Images/Wish.jpg", "https://drive.google.com/file/d/1B_WCeTWAOqdyU5gFXZaiXi832lazf9Rf/preview", "https://drive.usercontent.google.com/download?id=1B_WCeTWAOqdyU5gFXZaiXi832lazf9Rf&export=download&authuser=0"]],
        }; 
    
        return movies;
    }
    
    function storeSeriesContent()
    {
        // [[serie title, serie page link, image link, [[season[episode title, episode watch link, episodoe download link]]]]]
        series = {
            stevenuniverse : 
            [
                [
                    "Steven Universe", 
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/StevenUniverse.jpg", 
                    [    //Episode titles, watch link, download links
                        [
                            ["Gem Glow",  "https://drive.google.com/file/d/1N4eX8NflYhW4NgKQ4c3VEejEFs6jycfe/preview", "https://drive.google.com/uc?id=1N4eX8NflYhW4NgKQ4c3VEejEFs6jycfe&export=download"],
                            ["Laser Light Cannon",  "https://drive.google.com/file/d/1MVjT0TqDBTPSPeQCujtTCEnUAvrh6gCC/preview", "https://drive.google.com/uc?id=1MVjT0TqDBTPSPeQCujtTCEnUAvrh6gCC&export=download"],
                            ["CheeseBurger BackPack", "https://drive.google.com/file/d/1dtbSPzE1btj_T-RKj9dYljfgCmV9V_9z/preview", "https://drive.google.com/uc?id=1dtbSPzE1btj_T-RKj9dYljfgCmV9V_9z&export=download"],
                            ["Together Breakfast", "https://drive.google.com/file/d/1pbeFtzfyZ1TZU4wjUnU1ywAswaztzyB3/preview", "https://drive.google.com/uc?id=1pbeFtzfyZ1TZU4wjUnU1ywAswaztzyB3&export=download"],
                            ["Frybo", "https://drive.google.com/file/d/1hyuvgQMp1fNAxGfMMAj3xzteLILOJ33Q/preview", "https://drive.google.com/uc?id=1hyuvgQMp1fNAxGfMMAj3xzteLILOJ33Q&export=download"],
                            ["Cat Fingers", "https://drive.google.com/file/d/1-3HgqZ8JdWJoTaW4mRGux0JY8hWRotqN/preview", "https://drive.google.com/uc?id=1-3HgqZ8JdWJoTaW4mRGux0JY8hWRotqN&export=download"],
                            ["Bubble Buddies", "https://drive.google.com/file/d/1qVRtrVqEVSWeCkLx9c8cKDm7r_5U88Vu/preview", "https://drive.google.com/uc?id=1qVRtrVqEVSWeCkLx9c8cKDm7r_5U88Vu&export=download"],
                            ["Serious Steven", "https://drive.google.com/file/d/11VwLi2j4RsBB9x-hCnxCuF0Dt6-IMCmZ/preview", "https://drive.google.com/uc?id=11VwLi2j4RsBB9x-hCnxCuF0Dt6-IMCmZ&export=download"],
                            ["Tiger Millionaire",  "https://drive.google.com/file/d/1E4SEkQRbG_feiSJ_L4JEt3Ky6kESRX9c/preview", "https://drive.google.com/uc?id=1E4SEkQRbG_feiSJ_L4JEt3Ky6kESRX9c&export=download"],
                            ["Steven's Lion", "https://drive.google.com/file/d/1SUEsu5s-yVH1o5N7MYirQu2wgTDozQzZ/preview", "https://drive.google.com/uc?id=1SUEsu5s-yVH1o5N7MYirQu2wgTDozQzZ&export=download"],
                            ["Arcade Mania", "https://drive.google.com/file/d/11ItSVwL8qHOQI_iJ2TnauC-yLV2NKeym/preview", "https://drive.google.com/uc?id=11ItSVwL8qHOQI_iJ2TnauC-yLV2NKeym&export=download"],
                            ["Giant Woman", "https://drive.google.com/file/d/1vs5JLKQ4tuGpOfpleCPjpOon5PVA9E7d/preview", "https://drive.google.com/uc?id=1vs5JLKQ4tuGpOfpleCPjpOon5PVA9E7d&export=download"],
                            ["So Many Birthdays", "https://drive.google.com/file/d/1PM4rplSvxLeWgulTDE5pR_JOsnXpS74v/preview", "https://drive.google.com/uc?id=1PM4rplSvxLeWgulTDE5pR_JOsnXpS74v&export=download"],
                            ["Lars and the Cool Kids", "https://drive.google.com/file/d/1lD_TbtHC6_g89HpSI3TaAwWmR356EPUq/preview", "https://drive.google.com/uc?id=1lD_TbtHC6_g89HpSI3TaAwWmR356EPUq&export=download"],
                            ["Onion Trade", "https://drive.google.com/file/d/16aQ8E50CNuepPNhsXUDCY9uwH4ha3jH1/preview", "https://drive.google.com/uc?id=16aQ8E50CNuepPNhsXUDCY9uwH4ha3jH1&export=download"],
                            ["Steven the sword Fighter", "https://drive.google.com/file/d/1yyz967TC1FKNTocblbYeg_qYk8_gkj24/preview", "https://drive.google.com/uc?id=1yyz967TC1FKNTocblbYeg_qYk8_gkj24&export=download"],
                            ["Lion 2 The Movie", "https://drive.google.com/file/d/1yVlVf-hAMttVoY3IGWu4xpDvtI2yV1Hh/preview", "https://drive.google.com/uc?id=1yVlVf-hAMttVoY3IGWu4xpDvtI2yV1Hh&export=download"],
                            ["Beach Party", "https://drive.google.com/file/d/11pmRE0s7gvQyW__BKqxC-35pNry0H5MF/preview", "https://drive.google.com/uc?id=11pmRE0s7gvQyW__BKqxC-35pNry0H5MF&export=download"],
                            ["Rose's Room", "https://drive.google.com/file/d/14XBOLad7Qzh5ZvvAwhdXUEfGyR4mVKR4/preview", "https://drive.google.com/uc?id=14XBOLad7Qzh5ZvvAwhdXUEfGyR4mVKR4&export=download"],
                            ["Coach Steven", "https://drive.google.com/file/d/1S3QjUOMqyHvzIqL3P9iNMgfFwhIJ2nWI/preview", "https://drive.google.com/uc?id=1S3QjUOMqyHvzIqL3P9iNMgfFwhIJ2nWI&export=download"],
                            ["Joking Victim", "https://drive.google.com/file/d/1cbdSb6YitioTyvkpXI3d9DRjybp_iAJI/preview", "https://drive.google.com/uc?id=1cbdSb6YitioTyvkpXI3d9DRjybp_iAJI&export=download"],
                            ["Steven and the Stevens", "https://drive.google.com/file/d/17MGRNMNCxCz31W05LMCobZDobBqpCLq5/preview", "https://drive.google.com/uc?id=17MGRNMNCxCz31W05LMCobZDobBqpCLq5&export=download"],
                            ["Monster Buddies", "https://drive.google.com/file/d/1CUwwKu0GdJvoODww71GrQMVFp0686KND/preview", "https://drive.google.com/uc?id=1CUwwKu0GdJvoODww71GrQMVFp0686KND&export=download"],
                            ["An indirect Kiss", "https://drive.google.com/file/d/16tWNqSgik2nYJZFAWwfINsENcB6ZaUlA/preview", "https://drive.google.com/uc?id=16tWNqSgik2nYJZFAWwfINsENcB6ZaUlA&export=download"],
                            ["Mirror Gem", "https://drive.google.com/file/d/1klCfm7LgzZVyLyig0wzcxS0uIHETepjc/preview", "https://drive.google.com/uc?id=1klCfm7LgzZVyLyig0wzcxS0uIHETepjc&export=download"],
                            ["Ocean Gem", "https://drive.google.com/file/d/1y-yUQ30xyxt05z7vX1bj8LES00bj2OqY/preview", "https://drive.google.com/uc?id=1y-yUQ30xyxt05z7vX1bj8LES00bj2OqY&export=download"],
                            ["House Guest", "https://drive.google.com/file/d/1i7UuYK_OP6Isr0E0tRRf1cXfRDfwu1Z8/preview", "https://drive.google.com/uc?id=1i7UuYK_OP6Isr0E0tRRf1cXfRDfwu1Z8&export=download"],
                            ["Space Race", "https://drive.google.com/file/d/1PKwMxdcq_inlotzXhNFup1VuR2B9joxU/preview", "https://drive.google.com/uc?id=1PKwMxdcq_inlotzXhNFup1VuR2B9joxU&export=download"],
                            ["Secret Team", "https://drive.google.com/file/d/17HWzBD4Hc4jvpBJ2nv8PFWJ81P2AzHv2/preview", "https://drive.google.com/uc?id=17HWzBD4Hc4jvpBJ2nv8PFWJ81P2AzHv2&export=download"],
                            ["Island Adventure", "https://drive.google.com/file/d/1le24ORujmkJMFxp0nT89BsOq5ppqok7Q/preview", "https://drive.google.com/uc?id=1le24ORujmkJMFxp0nT89BsOq5ppqok7Q&export=download"],
                            ["Keep Beach City Weird", "https://drive.google.com/file/d/106iVcCnMkQS_nyuob86uBdrSdSUItxUE/preview", "https://drive.google.com/uc?id=106iVcCnMkQS_nyuob86uBdrSdSUItxUE&export=download"],
                            ["Fusion Cuisine", "https://drive.google.com/file/d/1qDm1-tBeoK4BxgZcwtNSP3oBo4ANhlSW/preview", "https://drive.google.com/uc?id=1qDm1-tBeoK4BxgZcwtNSP3oBo4ANhlSW&export=download"],
                            ["Garnet's Universe", "https://drive.google.com/file/d/1U4guk1jeVo61yhfD8hwIAsNaUdPgzip4/preview", "https://drive.google.com/uc?id=1U4guk1jeVo61yhfD8hwIAsNaUdPgzip4&export=download"],
                            ["Watermelon Steven", "https://drive.google.com/file/d/1VOS2lUM9d1QDxiDnxJ1fT0TwVW1IYXb4/preview", "https://drive.google.com/uc?id=1VOS2lUM9d1QDxiDnxJ1fT0TwVW1IYXb4&export=download"],
                            ["Lion 3: Straight to Video", "https://drive.google.com/file/d/1nafzJSD1tce4edVeE3hznAaXhRVxywPs/preview", "https://drive.google.com/uc?id=1nafzJSD1tce4edVeE3hznAaXhRVxywPs&export=download"],
                            ["Warp Tour", "https://drive.google.com/file/d/1aI8jIfQQJ2sQK5hQbJrpWafUqGqMdx9G/preview", "https://drive.google.com/uc?id=1aI8jIfQQJ2sQK5hQbJrpWafUqGqMdx9G&export=download"],
                            ["Alone Together", "https://drive.google.com/file/d/1Xf_YeUmpdAzL9fNaL-lOcPjVrDzHmRe0/preview", "https://drive.google.com/uc?id=1Xf_YeUmpdAzL9fNaL-lOcPjVrDzHmRe0&export=download"],
                            ["The Test", "https://drive.google.com/file/d/1HbiCudlJDVE0kIMlZMnb98Pa0qlyt9VR/preview", "https://drive.google.com/uc?id=1HbiCudlJDVE0kIMlZMnb98Pa0qlyt9VR&export=download"],
                            ["Future Vision", "https://drive.google.com/file/d/17kFV0ymDcPsvuKaXLL_9u9Bg9w2URAQt/preview", "https://drive.google.com/uc?id=17kFV0ymDcPsvuKaXLL_9u9Bg9w2URAQt&export=download"],
                            ["On the run", "https://drive.google.com/file/d/1YuyXh5SDxQU12rc9DORPnJ_n8zl-4V6n/preview", "https://drive.google.com/uc?id=1YuyXh5SDxQU12rc9DORPnJ_n8zl-4V6n&export=download"],
                            ["Horror Club", "https://drive.google.com/file/d/1u6DqFspX0l-3xe4J5oqxcEgWXVc0lLjt/preview", "https://drive.google.com/uc?id=1u6DqFspX0l-3xe4J5oqxcEgWXVc0lLjt&export=download"],
                            ["Winter Forecast", "https://drive.google.com/file/d/1kogQMRaP90OtGMXSoMbLEFFTik1TDwsc/preview", "https://drive.google.com/uc?id=1kogQMRaP90OtGMXSoMbLEFFTik1TDwsc&export=download"],
                            ["Maximum Capacity", "https://drive.google.com/file/d/12YPMWTM74ZPKbQXYVn-qYrrFK8NixUlf/preview", "https://drive.google.com/uc?id=12YPMWTM74ZPKbQXYVn-qYrrFK8NixUlf&export=download"],
                            ["Marble Madness", "https://drive.google.com/file/d/1x4zTP2SzBRF9srCnzsgLsVYEpIpyboUM/preview", "https://drive.google.com/uc?id=1x4zTP2SzBRF9srCnzsgLsVYEpIpyboUM&export=download"],
                            ["Roses' Scarbbard", "https://drive.google.com/file/d/1hA4WrRYXM5W5XhF-p6H_H9auNErLTcuW/preview", "https://drive.google.com/uc?id=1hA4WrRYXM5W5XhF-p6H_H9auNErLTcuW&export=download"],
                            ["The Message", "https://drive.google.com/file/d/1UDMtGJkMes3DyDhPN4ywzMeWdKFiPnBt/preview", "https://drive.google.com/uc?id=1UDMtGJkMes3DyDhPN4ywzMeWdKFiPnBt&export=download"],
                            ["Political Power", "https://drive.google.com/file/d/1nspQLSic_2GPyCg6QgaRpIcQjVCTLPKQ/preview", "https://drive.google.com/uc?id=1nspQLSic_2GPyCg6QgaRpIcQjVCTLPKQ&export=download"],
                            ["The return", "https://drive.google.com/file/d/1XVqnRQsBnUGYcY5WM1MVOX044-AGtdxB/preview", "https://drive.google.com/uc?id=1XVqnRQsBnUGYcY5WM1MVOX044-AGtdxB&export=download"],
                            ["JailBreak", "https://drive.google.com/file/d/1GmqEMiywTk-FKlN0s2mkvvFSrJUYICCN/preview", "https://drive.google.com/uc?id=1GmqEMiywTk-FKlN0s2mkvvFSrJUYICCN&export=download"],
                            ["Full Disclosure", "https://drive.google.com/file/d/1jfb-tHl7OF10y9g_YxSh86Ww6Zm-b0Mp/preview", "https://drive.google.com/uc?id=1jfb-tHl7OF10y9g_YxSh86Ww6Zm-b0Mp&export=download"],
                            ["Open Book", "https://drive.google.com/file/d/1TWMRLav1QQxpnZ57wNBy2BBAYYcSBAeW/preview", "https://drive.google.com/uc?id=1TWMRLav1QQxpnZ57wNBy2BBAYYcSBAeW&export=download"],
                            ["Joy Ride", "https://drive.google.com/file/d/1L-TotTWJxnjMbXepzA1LZEgUAhQAvLhc/preview", "https://drive.google.com/uc?id=1L-TotTWJxnjMbXepzA1LZEgUAhQAvLhc&export=download"],
                        ], 
                        [
                            ["Say Uncle", "https://drive.google.com/file/d/1Vabe_S9t829nSpugjcl9xhIAqdXZz5cd/preview", "https://drive.google.com/uc?id=1Vabe_S9t829nSpugjcl9xhIAqdXZz5cd&export=download"],
                            ["Story for Steven", "https://drive.google.com/file/d/1m5lZcVIKY6zL4JuuvEOKAXxp4KFII2oC/preview", "https://drive.google.com/uc?id=1m5lZcVIKY6zL4JuuvEOKAXxp4KFII2oC&export=download"],
                            ["Shirt Club", "https://drive.google.com/file/d/1ApdV46yFBWNHaqbrcEtRSJBq-Pf2SuMG/preview", "https://drive.google.com/uc?id=1ApdV46yFBWNHaqbrcEtRSJBq-Pf2SuMG&export=download"],
                            ["Love Letters", "https://drive.google.com/file/d/1VzX5B8TIS79j8GxFvc93rlqnwA8ooaSe/preview", "https://drive.google.com/uc?id=1VzX5B8TIS79j8GxFvc93rlqnwA8ooaSe&export=download"],
                            ["Reformed", "https://drive.google.com/file/d/1wLVUeTutvDdR_AILTx2VtAgqp7t053r5/preview", "https://drive.google.com/uc?id=1wLVUeTutvDdR_AILTx2VtAgqp7t053r5&export=download"],
                            ["Sworn to the sword", "https://drive.google.com/file/d/132YbYUzjC_CftkSLNT9sNfrmIeb9qLCf/preview", "https://drive.google.com/uc?id=132YbYUzjC_CftkSLNT9sNfrmIeb9qLCf&export=download"],
                            ["Rising Tides, Crashing Skies", "https://drive.google.com/file/d/1rzziHuSRQiCWYVAW7HFzRGnzyua3dsBx/preview", "https://drive.google.com/uc?id=1rzziHuSRQiCWYVAW7HFzRGnzyua3dsBx&export=download"],
                            ["Keeping it Together", "https://drive.google.com/file/d/1d8QvVSxbpT5qKWrf1e3ywYkjPuxpzo-Q/preview", "https://drive.google.com/uc?id=1d8QvVSxbpT5qKWrf1e3ywYkjPuxpzo-Q&export=download"],
                            ["We need to talk", "https://drive.google.com/file/d/1hhCp6AInU_AM5ZWAMXKUpOF58rxLir18/preview", "https://drive.google.com/uc?id=1hhCp6AInU_AM5ZWAMXKUpOF58rxLir18&export=download"],
                            ["Chille Tid", "https://drive.google.com/file/d/1ZlCc_ckuqY56gnGTLCK_FzvcwxZaddeG/preview", "https://drive.google.com/uc?id=1ZlCc_ckuqY56gnGTLCK_FzvcwxZaddeG&export=download"],
                            ["Cry for Help", "https://drive.google.com/file/d/1KUgeFcY5CFglMxXQMrTcp-_TBv2nYG4i/preview", "https://drive.google.com/uc?id=1KUgeFcY5CFglMxXQMrTcp-_TBv2nYG4i&export=download"],
                            ["Keystone Motel", "https://drive.google.com/file/d/16LTi2AyfuEFOdn7HLFPqfGISh6myIKqA/preview", "https://drive.google.com/uc?id=16LTi2AyfuEFOdn7HLFPqfGISh6myIKqA&export=download"],
                            ["Onion Friend", "https://drive.google.com/file/d/1ZNaBsWPXGVZbiCLquJ0wEDL73hlmCJyl/preview", "https://drive.google.com/uc?id=1ZNaBsWPXGVZbiCLquJ0wEDL73hlmCJyl&export=download"],
                            ["Historical Friction", "https://drive.google.com/file/d/1l5O64Hk9zQcYiuNS9b7f7HqKjaOoI0sw/preview", "https://drive.google.com/uc?id=1l5O64Hk9zQcYiuNS9b7f7HqKjaOoI0sw&export=download"],
                            ["Friend Ship", "https://drive.google.com/file/d/13KNyRUIS5a-QTjytm0PR24kll4NJYJi8/preview", "https://drive.google.com/uc?id=13KNyRUIS5a-QTjytm0PR24kll4NJYJi8&export=download"],
                            ["Nightmare Hospital", "https://drive.google.com/file/d/1nRrGx-4AwnOfgGkgMVSfe-tYF7SkMms_/preview", "https://drive.google.com/uc?id=1nRrGx-4AwnOfgGkgMVSfe-tYF7SkMms_&export=download"],
                            ["Sadie's Song", "https://drive.google.com/file/d/1wQg2oSv-sZG7Bi6al5QxKXPZC2FA_4Nj/preview", "https://drive.google.com/uc?id=1wQg2oSv-sZG7Bi6al5QxKXPZC2FA_4Nj&export=download"],
                            ["Catch And Release", "https://drive.google.com/file/d/1TGxSokLOqVTSvAekYkCUmwozxOl4g-Ei/preview", "https://drive.google.com/uc?id=1TGxSokLOqVTSvAekYkCUmwozxOl4g-Ei&export=download"],
                            ["When It Rains", "https://drive.google.com/file/d/1mScjbkn9PhIgjOUOx06joRrDQxQH9Bv6/preview", "https://drive.google.com/uc?id=1mScjbkn9PhIgjOUOx06joRrDQxQH9Bv6&export=download"],
                            ["Back to the Barn", "https://drive.google.com/file/d/1niwyhuXlS8g9QuwvleTgj3YXfE5LHZI0/preview", "https://drive.google.com/uc?id=1niwyhuXlS8g9QuwvleTgj3YXfE5LHZI0&export=download"],
                            ["Too Far", "https://drive.google.com/file/d/1m3TiNDX2WhckUYd-Y3AQeeiSBoX6M0Rb/preview", "https://drive.google.com/uc?id=1m3TiNDX2WhckUYd-Y3AQeeiSBoX6M0Rb&export=download"],
                            ["The Answer", "https://drive.google.com/file/d/1uFC01EGLd8iqBWOu8T0NARSbJ8xsuJdh/preview", "https://drive.google.com/uc?id=1uFC01EGLd8iqBWOu8T0NARSbJ8xsuJdh&export=download"],
                            ["Steven's Birthday", "https://drive.google.com/file/d/1oxbH1oYIT81R-7bOZAviYJC3Y9YS8QE7/preview", "https://drive.google.com/uc?id=1oxbH1oYIT81R-7bOZAviYJC3Y9YS8QE7&export=download"],
                            ["It could've been great", "https://drive.google.com/file/d/1cxZ7f5VeImdHNgLDCoOJNjCkIPU5fm5b/preview", "https://drive.google.com/uc?id=1cxZ7f5VeImdHNgLDCoOJNjCkIPU5fm5b&export=download"],
                            ["Message Recieved", "https://drive.google.com/file/d/1tSulegUv5ndY-JmjMN7Umshw_Gnl6Hnn/preview", "https://drive.google.com/uc?id=1tSulegUv5ndY-JmjMN7Umshw_Gnl6Hnn&export=download"],
                            ["Log Date 7 15 2", "https://drive.google.com/file/d/11gKrp4tvpjgbiC5OIty6wmt1P6MUVFLW/preview", "https://drive.google.com/uc?id=11gKrp4tvpjgbiC5OIty6wmt1P6MUVFLW&export=download"],
                        ],
    
                        [
                            ["Super Watermelon Island", "https://drive.google.com/file/d/1oiCPX_IcLvPsIdbQS-pfMsC6hLIr4KVS/preview", "https://drive.google.com/uc?id=1oiCPX_IcLvPsIdbQS-pfMsC6hLIr4KVS&export=download"],
                            ["Gem Drill", "https://drive.google.com/file/d/1cT1U7l_o7KRH3XTkPJRlRbXTGDQZjseX/preview", "https://drive.google.com/uc?id=1cT1U7l_o7KRH3XTkPJRlRbXTGDQZjseX&export=download"],
                            ["Same Old World", "https://drive.google.com/file/d/1l872t8PrQ2en2tC7xPY0M4vKBeaaMQhx/preview", "https://drive.google.com/uc?id=1l872t8PrQ2en2tC7xPY0M4vKBeaaMQhx&export=download"],
                            ["Barn Mates", "https://drive.google.com/file/d/1C-Vg07yBawnQN8CeiEqzrJ2MUBm625Un/preview", "https://drive.google.com/uc?id=1C-Vg07yBawnQN8CeiEqzrJ2MUBm625Un&export=download"],
                            ["Hit the Diamond", "https://drive.google.com/file/d/1c26V6hVux9H41_L4cNetYKoqu1Sip1gj/preview", "https://drive.google.com/uc?id=1c26V6hVux9H41_L4cNetYKoqu1Sip1gj&export=download"],
                            ["Steven Floats", "https://drive.google.com/file/d/1wWe5FL6uP2svueAoOV1yYFW9jCTgJojT/preview", "https://drive.google.com/uc?id=1wWe5FL6uP2svueAoOV1yYFW9jCTgJojT&export=download"],
                            ["Drop Beat Dad", "https://drive.google.com/file/d/1SdlWRXFYyRLeZSs3M-oKNAduvEx8LHCq/preview", "https://drive.google.com/uc?id=1SdlWRXFYyRLeZSs3M-oKNAduvEx8LHCq&export=download"],
                            ["Mr. Greg", "https://drive.google.com/file/d/1oawXQTsiUzrH8DPN_M7LC06DdMf2P-kt/preview", "https://drive.google.com/uc?id=1oawXQTsiUzrH8DPN_M7LC06DdMf2P-kt&export=download"],
                            ["Too Short To Ride", "https://drive.google.com/file/d/1yLL9ExSB_RXFRJmf6sAxFISmT67Cm0Qs/preview", "https://drive.google.com/uc?id=1yLL9ExSB_RXFRJmf6sAxFISmT67Cm0Qs&export=download"],
                            ["The New Lars", "https://drive.google.com/file/d/1URIYONbGAPJ2gac9ZjN7r3SNE-wDCzN4/preview", "https://drive.google.com/uc?id=1URIYONbGAPJ2gac9ZjN7r3SNE-wDCzN4&export=download"],
                            ["Beach City Drift", "https://drive.google.com/file/d/1WC-L3excyyNUtB5wNvtTy1dlgKM7ajWe/preview", "https://drive.google.com/uc?id=1WC-L3excyyNUtB5wNvtTy1dlgKM7ajWe&export=download"],
                            ["Restaurant Wars", "https://drive.google.com/file/d/1RJo-UFqthC2IWiDOYFbORG_AqdG0rdHa/preview", "https://drive.google.com/uc?id=1RJo-UFqthC2IWiDOYFbORG_AqdG0rdHa&export=download"],
                            ["Kiki's Pizza Delivery Service", "https://drive.google.com/file/d/1MyEcBwxedPLe4acIKLnm3kD6BKpfxPHC/preview", "https://drive.google.com/uc?id=1MyEcBwxedPLe4acIKLnm3kD6BKpfxPHC&export=download"],
                            ["Monster Reunion", "https://drive.google.com/file/d/1hBRVR_1Ci6XHtfjYw0tAp9-fGhSSkERp/preview", "https://drive.google.com/uc?id=1TzNKFbWbf0GzeUdHkvX8RJ8r99bOZ_jQ&export=download"],
                            ["Alone At Sea", "https://drive.google.com/file/d/1TzNKFbWbf0GzeUdHkvX8RJ8r99bOZ_jQ/preview", "https://drive.google.com/uc?id=1hBRVR_1Ci6XHtfjYw0tAp9-fGhSSkERp&export=download"],
                            ["Greg The Babysitter", "https://drive.google.com/file/d/1uMvIjeea2sX9zlBJeAYBt2DWgNbwbHrD/preview", "https://drive.google.com/uc?id=1uMvIjeea2sX9zlBJeAYBt2DWgNbwbHrD&export=download"],
                            ["Gem Hunt", "https://drive.google.com/file/d/1sHBv2SRkDWLen2gAHgRU1gyX-5G74LYp/preview", "https://drive.google.com/uc?id=1sHBv2SRkDWLen2gAHgRU1gyX-5G74LYp&export=download"],
                            ["Crack the Whip", "https://drive.google.com/file/d/12irK06EWGEnxyNC8mi0UULQMP7OU4pAK/preview", "https://drive.google.com/uc?id=12irK06EWGEnxyNC8mi0UULQMP7OU4pAK&export=download"],
                            ["Steven vs Amethyst", "https://drive.google.com/file/d/1jatyr8WFPX-6Kbdx3VqXsCP8L6mgx0Ic/preview", "https://drive.google.com/uc?id=1jatyr8WFPX-6Kbdx3VqXsCP8L6mgx0Ic&export=download"],
                            ["Bismuth", "https://drive.google.com/file/d/15gKBcIzo-0Bw4MF1W5h5RdikwH4PWAdw/preview", "https://drive.google.com/uc?id=15gKBcIzo-0Bw4MF1W5h5RdikwH4PWAdw&export=download"],
                            ["Beta", "https://drive.google.com/file/d/11rr2a5k1qQbq17O5xiDKWcmd_tn3fsLx/preview", "https://drive.google.com/uc?id=11rr2a5k1qQbq17O5xiDKWcmd_tn3fsLx&export=download"],
                            ["Earthlings", "https://drive.google.com/file/d/10Uw8WvNRPXs-1At4fDjBh8IODVmNl1zf/preview", "https://drive.google.com/uc?id=1LPiPkRGAA3KdG9WdLPEKss2EYtivqM0r&export=download"],
                            ["Back to the Moon", "https://drive.google.com/file/d/112yjOO0TtFqiwS5L6e6BZFHGiGWEDrEX/preview", "https://drive.google.com/uc?id=10Uw8WvNRPXs-1At4fDjBh8IODVmNl1zf&export=download"],
                            ["Bubbled",  "https://drive.google.com/file/d/1LPiPkRGAA3KdG9WdLPEKss2EYtivqM0r/preview", "https://drive.google.com/uc?id=112yjOO0TtFqiwS5L6e6BZFHGiGWEDrEX&export=download"],
                        ],
    
                        [
                            ["Kindergarten Kid", "https://drive.google.com/file/d/1n0MO8SRyOsS7MpeXRhj6DjZHix2svFvZ/preview", "https://drive.google.com/uc?id=1n0MO8SRyOsS7MpeXRhj6DjZHix2svFvZ&export=download"],
                            ["Know your Fusion", "https://drive.google.com/file/d/1tq-mkcdNhPJQnEe7umLD0CDt2LzwEUSv/preview", "https://drive.google.com/uc?id=1tq-mkcdNhPJQnEe7umLD0CDt2LzwEUSv&export=download"],
                            ["Buddy's Book", "https://drive.google.com/file/d/1D4t6tj5ePpZR--dW-lL18_94OL7cVgRh/preview", "https://drive.google.com/uc?id=1D4t6tj5ePpZR--dW-lL18_94OL7cVgRh&export=download"],
                            ["Mindful Education", "https://drive.google.com/file/d/1zIwJ21_OlvMZ61V5q_R00xZJ09wt6NWk/preview", "https://drive.google.com/uc?id=1zIwJ21_OlvMZ61V5q_R00xZJ09wt6NWk&export=download"],
                            ["Future Boy Zoltron", "https://drive.google.com/file/d/1iQAI4muKg0s4WyhFRIhUHqh8ydMccSMA/preview", "https://drive.google.com/uc?id=1iQAI4muKg0s4WyhFRIhUHqh8ydMccSMA&export=download"],
                            ["Last One Out Of Beach City", "https://drive.google.com/file/d/1p7RaBtapbC3blaqAIcxzn3mboQ_okVem/preview", "https://drive.google.com/uc?id=1p7RaBtapbC3blaqAIcxzn3mboQ_okVem&export=download"],
                            ["Onion Gang", "https://drive.google.com/file/d/1bOGE72BqTmCepeYp-uDnJXuiJoD23_D2/preview", "https://drive.google.com/uc?id=1bOGE72BqTmCepeYp-uDnJXuiJoD23_D2&export=download"],
                            ["Gem Harvest", "https://drive.google.com/file/d/1x_ZJ5P8_1jnCHW1wcC8RE7Nm6R603sQc/preview", "https://drive.google.com/uc?id=1x_ZJ5P8_1jnCHW1wcC8RE7Nm6R603sQc&export=download"],
                            ["Three Gems and a Baby", "https://drive.google.com/file/d/1j9sO7LcgMLP26PZJBn-j2W6KNAn8ekKC/preview", "https://drive.google.com/uc?id=1j9sO7LcgMLP26PZJBn-j2W6KNAn8ekKC&export=download"],
                            ["Steven's Dream", "https://drive.google.com/file/d/1gQuaWRlSIYIYuGt4ouCLPnuSWHlrgmwa/preview", "https://drive.google.com/uc?id=1gQuaWRlSIYIYuGt4ouCLPnuSWHlrgmwa&export=download"],
                            ["Adventures in Light Distortion", "https://drive.google.com/file/d/1yzzcoUGndZKcenh70Ig0sPu26LmbFMjE/preview", "https://drive.google.com/uc?id=1yzzcoUGndZKcenh70Ig0sPu26LmbFMjE&export=download"],
                            ["Gem Heist", "https://drive.google.com/file/d/1l2Tt-Yr40fsrsfOcOTdu17ie38oGtK2N/preview", "https://drive.google.com/uc?id=1l2Tt-Yr40fsrsfOcOTdu17ie38oGtK2N&export=download"],
                            ["The Zoo", "https://drive.google.com/file/d/1EQAM6VkCdHBuaG9puWLB_oWV_jA1vp21/preview", "https://drive.google.com/uc?id=1EQAM6VkCdHBuaG9puWLB_oWV_jA1vp21&export=download"],
                            ["That Will be All", "https://drive.google.com/file/d/1356b92FYBzGmAnq40e2R_yuG_8O9cTM8/preview", "https://drive.google.com/uc?id=1356b92FYBzGmAnq40e2R_yuG_8O9cTM8&export=download"],
                            ["The New Crystal Gems", "https://drive.google.com/file/d/1UPzjwxx5Ojj7-GmyTr3v4uOru1IkIoPn/preview", "https://drive.google.com/uc?id=1UPzjwxx5Ojj7-GmyTr3v4uOru1IkIoPn&export=download"],
                            ["Storm in the Room", "https://drive.google.com/file/d/102zWk0lsptRV4pzvUw_iVf2NU8x97acn/preview", "https://drive.google.com/uc?id=102zWk0lsptRV4pzvUw_iVf2NU8x97acn&export=download"],
                            ["Rocknaldo", "https://drive.google.com/file/d/1mLK-wjhUhfvZwhJqG4ROAgwTU-0Tdl-I/preview", "https://drive.google.com/uc?id=1mLK-wjhUhfvZwhJqG4ROAgwTU-0Tdl-I&export=download"],
                            ["Tiger Philanthropist", "https://drive.google.com/file/d/1OUkz-N7fwOBkSndl9cQTc2gUKto_2gel/preview", "https://drive.google.com/uc?id=1OUkz-N7fwOBkSndl9cQTc2gUKto_2gel&export=download"],
                            ["Room for Ruby", "https://drive.google.com/file/d/1CWwbDCY8x_6IWgRZ4O-aOvZ_P3sqhDeg/preview", "https://drive.google.com/uc?id=1CWwbDCY8x_6IWgRZ4O-aOvZ_P3sqhDeg&export=download"],
                            ["Lion 4: Alternate Ending", "https://drive.google.com/file/d/15j6f2CN7J0L3GiIvT5JrCxOyMOsNiQCf/preview", "https://drive.google.com/uc?id=15j6f2CN7J0L3GiIvT5JrCxOyMOsNiQCf&export=download"],
                            ["Doug Out", "https://drive.google.com/file/d/1WUBX5FTP-ZDSsF7VJNGmMiTAF3nFAt46/preview", "https://drive.google.com/uc?id=1WUBX5FTP-ZDSsF7VJNGmMiTAF3nFAt46&export=download"],
                            ["The Good Lars", "https://drive.google.com/file/d/1g9DxzdlpOMEZTpN8PLcizf09gINgy3fq/preview", "https://drive.google.com/uc?id=1g9DxzdlpOMEZTpN8PLcizf09gINgy3fq&export=download"],
                            ["Are you my dad?", "https://drive.google.com/file/d/1Y6lcSczsQ6Ne_caJN6VV7A39Qm_YJij5/preview", "https://drive.google.com/uc?id=1Y6lcSczsQ6Ne_caJN6VV7A39Qm_YJij5&export=download"],
                            ["I am my Mom", "https://drive.google.com/file/d/1i4gOEJZmopgZCataKIPLVqKMw8mLolh5/preview", "https://drive.google.com/uc?id=1i4gOEJZmopgZCataKIPLVqKMw8mLolh5&export=download"],
                        ],
    
                        [
                            ["Stuck Together", "https://drive.google.com/file/d/1UZkal0WWNMatpYdTxXvsfvpYQeisgY2G/preview", "https://drive.google.com/uc?id=1UZkal0WWNMatpYdTxXvsfvpYQeisgY2G&export=download"],
                            ["The Trial", "https://drive.google.com/file/d/1Si81ko3c0k6znfsU5lL82fiIS8XbjlmF/preview", "https://drive.google.com/uc?id=1Si81ko3c0k6znfsU5lL82fiIS8XbjlmF&export=download"],
                            ["Off Colors", "https://drive.google.com/file/d/1GNA2lePZsSZDcje5pdvnbjcjnan5tMM4/preview", "https://drive.google.com/uc?id=1GNA2lePZsSZDcje5pdvnbjcjnan5tMM4&export=download"],
                            ["Lar's Head", "https://drive.google.com/file/d/1tdIydndfGac86AieGdjE21TPLQzimjXg/preview", "https://drive.google.com/uc?id=1tdIydndfGac86AieGdjE21TPLQzimjXg&export=download"],
                            ["Dewey Wins", "https://drive.google.com/file/d/1TQJW1B7lI1xLdpL_ZUQAYYuipW_XKOj_/preview", "https://drive.google.com/uc?id=1TQJW1B7lI1xLdpL_ZUQAYYuipW_XKOj_&export=download"],
                            ["Gemcation", "https://drive.google.com/file/d/1EY6M8vefG52bDGD3hqjEk2qQnJp6e6nk/preview", "https://drive.google.com/uc?id=1EY6M8vefG52bDGD3hqjEk2qQnJp6e6nk&export=download"],
                            ["Raising the Barn", "https://drive.google.com/file/d/1Es2NKTDC_vJPXuy5mjUQgP_Lv85LIh_Y/preview", "https://drive.google.com/uc?id=1Es2NKTDC_vJPXuy5mjUQgP_Lv85LIh_Y&export=download"],
                            ["Back to the Kindergarten", "https://drive.google.com/file/d/1QZtxsgzt78Td4IHTjY4CaKtHB5QKDcau/preview", "https://drive.google.com/uc?id=1QZtxsgzt78Td4IHTjY4CaKtHB5QKDcau&export=download"],
                            ["Sadie Killer", "https://drive.google.com/file/d/1udGcShV1hlIuofWuLLpzNcefiq5bmKJs/preview", "https://drive.google.com/uc?id=1udGcShV1hlIuofWuLLpzNcefiq5bmKJs&export=download"],
                            ["Kevin Party", "https://drive.google.com/file/d/14LDYmT-R36nxzR36WRU640fc-UZa_IuJ/preview", "https://drive.google.com/uc?id=14LDYmT-R36nxzR36WRU640fc-UZa_IuJ&export=download"],
                            ["Lars of the Stars", "https://drive.google.com/file/d/192fRreeO2ESBKZJv3ESCc3m1dKQlX3q8/preview", "https://drive.google.com/uc?id=192fRreeO2ESBKZJv3ESCc3m1dKQlX3q8&export=download"],
                            ["Jungle Moon", "https://drive.google.com/file/d/1BudMdm1ZCVZS9gmmyMpC0eA8lQWYoX2t/preview", "https://drive.google.com/uc?id=1BudMdm1ZCVZS9gmmyMpC0eA8lQWYoX2t&export=download"],
                            ["Your Mother And Mine", "https://drive.google.com/file/d/1WuMwSquNRNKkxGgCE7hQwvwNaHUeXPDE/preview", "https://drive.google.com/uc?id=1WuMwSquNRNKkxGgCE7hQwvwNaHUeXPDE&export=download"],
                            ["The Big Show", "https://drive.google.com/file/d/1_NFpWykCTM23srseFakrp2AlYCE80R7E/preview", "https://drive.google.com/uc?id=1_NFpWykCTM23srseFakrp2AlYCE80R7E&export=download"],
                            ["Pool Hoping", "https://drive.google.com/file/d/1xJkFOTu-RRMsQc9YrZOsa_yEgvqQ99D7/preview", "https://drive.google.com/uc?id=1xJkFOTu-RRMsQc9YrZOsa_yEgvqQ99D7&export=download"],
                            ["Letters to Lars", "https://drive.google.com/file/d/1_HD5qbupZxTEwJe3iQdZMKnhMvH7LfFZ/preview", "https://drive.google.com/uc?id=1_HD5qbupZxTEwJe3iQdZMKnhMvH7LfFZ&export=download"],
                            ["Can't Go Back", "https://drive.google.com/file/d/149cawcZQWG_W2P1CwogUA_QoAfenF1oq/preview", "https://drive.google.com/uc?id=149cawcZQWG_W2P1CwogUA_QoAfenF1oq&export=download"],
                            ["A single Pale Rose", "https://drive.google.com/file/d/1zk3PCkYwO0jGd1NTWz_6yuAjaHxdef3Z/preview", "https://drive.google.com/uc?id=1zk3PCkYwO0jGd1NTWz_6yuAjaHxdef3Z&export=download"],
                            ["Now we're only falling Apart", "https://drive.google.com/file/d/1FnPDXJh6ifPmxFeJCYiW33kQLxZt5mG-/preview", "https://drive.google.com/uc?id=1FnPDXJh6ifPmxFeJCYiW33kQLxZt5mG-&export=download"],
                            ["What's your problem", "https://drive.google.com/file/d/12vP8RIvS_Np6RkAH-A0jlR2FuN_D53Ux/preview", "https://drive.google.com/uc?id=12vP8RIvS_Np6RkAH-A0jlR2FuN_D53Ux&export=download"],
                            ["The Question", "https://drive.google.com/file/d/1ZN0FpXQPp3FBYDn2OczjnzZ5A8H1wePr/preview", "https://drive.google.com/uc?id=1ZN0FpXQPp3FBYDn2OczjnzZ5A8H1wePr&export=download"],
                            ["Made of Honor", "https://drive.google.com/file/d/1lQQ2Wkh1MoWx2flHs1Y-rMJU57nsnsOC/preview", "https://drive.google.com/uc?id=1lQQ2Wkh1MoWx2flHs1Y-rMJU57nsnsOC&export=download"],
                            ["Reunited", "https://drive.google.com/file/d/1ynB_miS10zkEaHAMt8w2DJhZ02so71Ie/preview", "https://drive.google.com/uc?id=1ynB_miS10zkEaHAMt8w2DJhZ02so71Ie&export=download"],
                            ["Legs from here to homeworld", "https://drive.google.com/file/d/1170CQOLE-qAA1xl45uXa-ZDfR37YgG_0/preview", "https://drive.google.com/uc?id=1170CQOLE-qAA1xl45uXa-ZDfR37YgG_0&export=download"],
                            ["Familiar", "https://drive.google.com/file/d/19miSul8cJn5x32Wdw8dD_fvf5Hf9MqVa/preview", "https://drive.google.com/uc?id=19miSul8cJn5x32Wdw8dD_fvf5Hf9MqVa&export=download"],
                            ["Together Alone", "https://drive.google.com/file/d/1JI-045EagKhylughrqrLROpL5mw5EZwh/preview", "https://drive.google.com/uc?id=1JI-045EagKhylughrqrLROpL5mw5EZwh&export=download"],
                            ["Escapism", "https://drive.google.com/file/d/1D9iJcNHJCuXMyJv80n50-APNdLqFZyS2/preview", "https://drive.google.com/uc?id=1D9iJcNHJCuXMyJv80n50-APNdLqFZyS2&export=download"],
                            ["Change your mind", "https://drive.google.com/file/d/1blL8SCxsb4bUoAgFAfYQZWpRRs26Pmao/preview", "https://drive.google.com/uc?id=1blL8SCxsb4bUoAgFAfYQZWpRRs26Pmao&export=download"],
                        ]
                    ] 
                ]
            ],
    
        // [[serie title, serie page link, image link, [[season[episode title, episode watch link, episodoe download link]]]]]
            gravityfalls : 
            [
                [
                    "Gravity Falls",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Gravity Falls.jpg",
                    [
                        [           
                            ["Tourist Trapped", "https://drive.google.com/file/d/17nNGHoUjB1oWyeooUNULBcIGw-rhVhC4/preview", "https://drive.google.com/uc?id=17nNGHoUjB1oWyeooUNULBcIGw-rhVhC4&export=download"],
                            ["The Legend of the Gobblewonker", "https://drive.google.com/file/d/1KBxQt8d1a63mwJWA1VOO47cax0KtqCbr/preview", "https://drive.google.com/uc?id=1KBxQt8d1a63mwJWA1VOO47cax0KtqCbr&export=download"],
                            ["Headhunters", "https://drive.google.com/file/d/1tgtN3_w4dvmRg9w4xaF1pECQWdB_r69O/preview", "https://drive.google.com/uc?id=1tgtN3_w4dvmRg9w4xaF1pECQWdB_r69O&export=download"],
                            ["The Hand That Rocks The Mabel", "https://drive.google.com/file/d/1acwv90SS5_CHkyJmRyiQVRBjaywLEjOh/preview", "https://drive.google.com/uc?id=1acwv90SS5_CHkyJmRyiQVRBjaywLEjOh&export=download"],
                            ["The Inconveniencing", "https://drive.google.com/file/d/1lLZSfr5_pZY_1FA1mg3eBm9kI7nGFC8J/preview", "https://drive.google.com/uc?id=1lLZSfr5_pZY_1FA1mg3eBm9kI7nGFC8J&export=download"],
                            ["Dipper Vs Manliness", "https://drive.google.com/file/d/18Lk3fKxq27z3b3p3upp90tJnwSR2MVvr/preview", "https://drive.google.com/uc?id=18Lk3fKxq27z3b3p3upp90tJnwSR2MVvr&export=download"],
                            ["Double Dipper", "https://drive.google.com/file/d/1NKCQdsk7iy-G-FLNTsPFAUO8SLKzmtJL/preview", "https://drive.google.com/uc?id=1NKCQdsk7iy-G-FLNTsPFAUO8SLKzmtJL&export=download"],
                            ["Irrational Treasure", "https://drive.google.com/file/d/1vci9oUWN3WdDHP3TINBR8OiwyxyHSwLf/preview", "https://drive.google.com/uc?id=1vci9oUWN3WdDHP3TINBR8OiwyxyHSwLf&export=download"],
                            ["Time Traveler's Pig", "https://drive.google.com/file/d/11OK4EXQzsIY0Uw5MgQ3cJfX2UgG7dRFJ/preview", "https://drive.google.com/uc?id=11OK4EXQzsIY0Uw5MgQ3cJfX2UgG7dRFJ&export=download"],
                            ["Fight Fighters", "https://drive.google.com/file/d/1PL7dzQbeAEtNUQboAka7PiKT-qTVjeHs/preview", "https://drive.google.com/uc?id=1PL7dzQbeAEtNUQboAka7PiKT-qTVjeHs&export=download"],
                            ["Little Dipper", "https://drive.google.com/file/d/1MJ9Xot8grx6QnJRA8m6eTvbUWhkJMxFz/preview", "https://drive.google.com/uc?id=1MJ9Xot8grx6QnJRA8m6eTvbUWhkJMxFz&export=download"],
                            ["Summerween", "https://drive.google.com/file/d/13snYpNHyBzCcrre5VcGKThb1ZvFDh-Qc/preview", "https://drive.google.com/uc?id=13snYpNHyBzCcrre5VcGKThb1ZvFDh-Qc&export=download"],
                            ["Boss Mabel", "https://drive.google.com/file/d/12EBkBaq0O_jIQ01bbTUEnY_6uZodlnvX/preview", "https://drive.google.com/uc?id=12EBkBaq0O_jIQ01bbTUEnY_6uZodlnvX&export=download"],
                            ["Bottomless Pit!", "https://drive.google.com/file/d/19lkKazWiRgKkgQKjmbeoTulSC1sPr5om/preview", "https://drive.google.com/uc?id=19lkKazWiRgKkgQKjmbeoTulSC1sPr5om&export=download"],
                            ["The Deep End", "https://drive.google.com/file/d/1KvO4ADlbB68_htYWI-5DqR5mk55yvgEn/preview", "https://drive.google.com/uc?id=1KvO4ADlbB68_htYWI-5DqR5mk55yvgEn&export=download"],
                            ["Carpet Diem", "https://drive.google.com/file/d/1E0JKeAwRla_oCb0PogTo6tj8OzLwZ4FT/preview", "https://drive.google.com/uc?id=1E0JKeAwRla_oCb0PogTo6tj8OzLwZ4FT&export=download"],
                            ["Boyz Crazy", "https://drive.google.com/file/d/1LVaUGL3pVfmslbCdIOOHDVKFzl1ceOC7/preview", "https://drive.google.com/uc?id=1LVaUGL3pVfmslbCdIOOHDVKFzl1ceOC7&export=download"],
                            ["The Land Before Swine", "https://drive.google.com/file/d/1jS_nnNXJNaplIKDJK-7enbsS50pABnVK/preview", "https://drive.google.com/uc?id=1jS_nnNXJNaplIKDJK-7enbsS50pABnVK&export=download"],
                            ["Dreamscaperers", "https://drive.google.com/file/d/1bRi_FJyHt1BYH5m6JrhlkgbXRZDnfcPW/preview", "https://drive.google.com/uc?id=1bRi_FJyHt1BYH5m6JrhlkgbXRZDnfcPW&export=download"],
                            ["Gideon Rises", "https://drive.google.com/file/d/1kARoYRIPB7gpvbUkHt_8rWiDUpq6qigI/preview", "https://drive.google.com/uc?id=1kARoYRIPB7gpvbUkHt_8rWiDUpq6qigI&export=download"]
                        ],
                        [
                            ["Scary-oke", "https://drive.google.com/file/d/1T6DrFgVJcBlstavSygsWJr7I1s3rafRD/preview", "https://drive.google.com/uc?id=1T6DrFgVJcBlstavSygsWJr7I1s3rafRD&export=download"],
                            ["Into the Bunker", "https://drive.google.com/file/d/1B-eMJ_HDonjDo8cERauArUfl1wQoFRly/preview", "https://drive.google.com/uc?id=1B-eMJ_HDonjDo8cERauArUfl1wQoFRly&export=download"],
                            ["The Golf War", "https://drive.google.com/file/d/19URviOjtET5JLDwFTRrl-Hal43Rsnqyd/preview", "https://drive.google.com/uc?id=19URviOjtET5JLDwFTRrl-Hal43Rsnqyd&export=download"],
                            ["Sock Opera", "https://drive.google.com/file/d/1byYu6hYg3cI9YYhrI01hrRXycZrC65ft/preview", "https://drive.google.com/uc?id=1byYu6hYg3cI9YYhrI01hrRXycZrC65ft&export=download"],
                            ["Soos and the real Girl", "https://drive.google.com/file/d/1U7PO4yPrR9HQDrwB8tMd1vNv4NjH6SpA/preview", "https://drive.google.com/uc?id=1U7PO4yPrR9HQDrwB8tMd1vNv4NjH6SpA&export=download"],
                            ["Little Gift Shop of Horrors", "https://drive.google.com/file/d/1WWoh-ylCIpdVMODL1dmg3ZVGDsidGFzw/preview", "https://drive.google.com/uc?id=1WWoh-ylCIpdVMODL1dmg3ZVGDsidGFzw&export=download"],
                            ["Society of the Blind Eye", "https://drive.google.com/file/d/1iWW9DGAo86j6eoC6JT7AcExhMsR3xl8a/preview", "https://drive.google.com/uc?id=1iWW9DGAo86j6eoC6JT7AcExhMsR3xl8a&export=download"],
                            ["Blendin's Game", "https://drive.google.com/file/d/1-i-W9Jkwr8QPD5trGYgCoaiTsPu-lOBW/preview", "https://drive.google.com/uc?id=1-i-W9Jkwr8QPD5trGYgCoaiTsPu-lOBW&export=download"],
                            ["The Love God", "https://drive.google.com/file/d/1blwzWlCLfq27o-O9Tee67UBZcOeapNfP/preview", "https://drive.google.com/uc?id=1blwzWlCLfq27o-O9Tee67UBZcOeapNfP&export=download"],
                            ["NorthWest Mansion Mystery", "https://drive.google.com/file/d/1_fBCg3ZdvIAd2GfeVB01N9_LzWakeTTd/preview", "https://drive.google.com/uc?id=1_fBCg3ZdvIAd2GfeVB01N9_LzWakeTTd&export=download"],
                            ["Not What He Seems", "https://drive.google.com/file/d/1oObHOOcAEw8jJ5IkQx9RYhfTzxsHacnv/preview", "https://drive.google.com/uc?id=1oObHOOcAEw8jJ5IkQx9RYhfTzxsHacnv&export=download"],
                            ["A Tale Of Two Stans", "https://drive.google.com/file/d/1K_uZA3iB7szgvkwbFjZjXe69cPXmsjso/preview", "https://drive.google.com/uc?id=1K_uZA3iB7szgvkwbFjZjXe69cPXmsjso&export=download"],
                            ["Dungeons, Dungeons and More Dungeons", "https://drive.google.com/file/d/17fp-T77JiT1nMIU61jlkKqrRO6hqMEfh/preview", "https://drive.google.com/uc?id=17fp-T77JiT1nMIU61jlkKqrRO6hqMEfh&export=download"],
                            ["The Stanchurian Candidate", "https://drive.google.com/file/d/1AoIrazwZpJSuWz0FQU_0foOoBvr_yVCk/preview", "https://drive.google.com/uc?id=1AoIrazwZpJSuWz0FQU_0foOoBvr_yVCk&export=download"],
                            ["The Last Mabelcorn", "https://drive.google.com/file/d/1gKy24A8NhzZmFTYbA_1hdDo5vaJkrN4L/preview", "https://drive.google.com/uc?id=1gKy24A8NhzZmFTYbA_1hdDo5vaJkrN4L&export=download"],
                            ["Roadside Attraction", "https://drive.google.com/file/d/1P309xWE7cNplnHjl7Fcm4E6AvzI6SZmC/preview", "https://drive.google.com/uc?id=1P309xWE7cNplnHjl7Fcm4E6AvzI6SZmC&export=download"],
                            ["Dipper and Mabel vs. The Future", "https://drive.google.com/file/d/1Gc5cy8-mvfy9zm6HAMSS_OaAT-UIPWE3/preview", "https://drive.google.com/uc?id=1Gc5cy8-mvfy9zm6HAMSS_OaAT-UIPWE3&export=download"],
                            ["Weirdmageddon", "https://drive.google.com/file/d/1zrRdQK4VpOyis9nRvhNlHAb-hDW6WFIM/preview", "https://drive.google.com/uc?id=1zrRdQK4VpOyis9nRvhNlHAb-hDW6WFIM&export=download"],
                            ["Escape from reality", "https://drive.google.com/file/d/143uzW_Ar4fjl_xPVW2zw-86BpWxBh-4n/preview", "https://drive.google.com/uc?id=143uzW_Ar4fjl_xPVW2zw-86BpWxBh-4n&export=download"],
                            ["Take Back the Falls && Somewhere in the woods", "https://drive.google.com/file/d/1M4gYCpKGxgnomJx1Px1WU3_XGeJu56RP/preview", "https://drive.google.com/uc?id=1M4gYCpKGxgnomJx1Px1WU3_XGeJu56RP&export=download"],
                        ]
                    ] 
                ]
            ],
    
            loki : 
            [
                [
                    "Loki",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Loki.jpg",
                    [
                        [
                            ["Glorius Purpose", "https://drive.google.com/file/d/1lz0nOc_KxeIlLPNvmE4PltoyApdBXIK8/preview", "https://drive.google.com/uc?id=1lz0nOc_KxeIlLPNvmE4PltoyApdBXIK8&export=download"],
                            ["The Variant", "https://drive.google.com/file/d/1T9bQu5xeMID6tIyp181_TTwBU5Ivo9O_/preview", "https://drive.google.com/uc?id=1T9bQu5xeMID6tIyp181_TTwBU5Ivo9O_&export=download"],
                            ["Lamentis", "https://drive.google.com/file/d/1snGIiVXXsLJ-sKk_iyEkgZt8aH1XrH4b/preview", "https://drive.google.com/uc?id=1snGIiVXXsLJ-sKk_iyEkgZt8aH1XrH4b&export=download"],
                            ["The Nexus Event", "https://drive.google.com/file/d/1O1XHeopHpexzIo079dwyCgp9dL3hel3B/preview", "https://drive.google.com/uc?id=1O1XHeopHpexzIo079dwyCgp9dL3hel3B&export=download"],
                            ["Journey To the Mystery", "https://drive.google.com/file/d/1Xs-_vW4ier5Zn-pc8lWhxnw9Mp8LFd8R/preview", "https://drive.google.com/uc?id=1Xs-_vW4ier5Zn-pc8lWhxnw9Mp8LFd8R&export=download"],
                            ["For All Time Always", "https://drive.google.com/file/d/1hA8Cx7psNNGBm-VfQmd7hYBUzGs3Sq3f/preview", "https://drive.google.com/uc?id=1hA8Cx7psNNGBm-VfQmd7hYBUzGs3Sq3f&export=download"],
                        ],
            
                        [
                            ["Ouroboros", "https://drive.google.com/file/d/1ckKZ6N9dVZJsgegiiLcJhmLEyy6c3xvb/preview", "https://drive.google.com/uc?id=1ckKZ6N9dVZJsgegiiLcJhmLEyy6c3xvb&export=download"],
                            ["Breaking Brad", "https://drive.google.com/file/d/1lK2iLtbEZoQQ7JVDTTelCKXzJ0M0AcYH/preview", "https://drive.google.com/uc?id=1lK2iLtbEZoQQ7JVDTTelCKXzJ0M0AcYH&export=download"],
                            ["1893", "https://drive.google.com/file/d/189aN9TVQEyXHxHOBIxEe21ZgLZ5Q16uN/preview", "https://drive.google.com/uc?id=189aN9TVQEyXHxHOBIxEe21ZgLZ5Q16uN&export=download"],
                            ["Heart of the TVA", "https://drive.google.com/file/d/1m7OaX0NMGFSh_XIR2jqGlW5c5ug0GDPJ/preview", "https://drive.google.com/uc?id=1m7OaX0NMGFSh_XIR2jqGlW5c5ug0GDPJ&export=download"],
                            ["Science Fiction", "https://drive.google.com/file/d/1fM4ihyMostBoplysmcds89ZVkWdeFEih/preview", "https://drive.google.com/uc?id=1fM4ihyMostBoplysmcds89ZVkWdeFEih&export=download"],
                            ["Glorius Purpose", "https://drive.google.com/file/d/1F0AmSJ-RZLyHHgFCX-0bLVuNcAIRrqHR/preview", "https://drive.google.com/uc?id=1F0AmSJ-RZLyHHgFCX-0bLVuNcAIRrqHR&export=download"],
                        ]
                    ] 
                ]
            ],
    
            ben10: 
            [
                [
                    "Ben 10",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Ben10.jpg",
                    [
                        [
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1lz0nOc_KxeIlLPNvmE4PltoyApdBXIK8/preview", "https://drive.google.com/uc?id=1lz0nOc_KxeIlLPNvmE4PltoyApdBXIK8&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1T9bQu5xeMID6tIyp181_TTwBU5Ivo9O_/preview", "https://drive.google.com/uc?id=1T9bQu5xeMID6tIyp181_TTwBU5Ivo9O_&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1snGIiVXXsLJ-sKk_iyEkgZt8aH1XrH4b/preview", "https://drive.google.com/uc?id=1snGIiVXXsLJ-sKk_iyEkgZt8aH1XrH4b&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1O1XHeopHpexzIo079dwyCgp9dL3hel3B/preview", "https://drive.google.com/uc?id=1O1XHeopHpexzIo079dwyCgp9dL3hel3B&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1Xs-_vW4ier5Zn-pc8lWhxnw9Mp8LFd8R/preview", "https://drive.google.com/uc?id=1Xs-_vW4ier5Zn-pc8lWhxnw9Mp8LFd8R&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1hA8Cx7psNNGBm-VfQmd7hYBUzGs3Sq3f/preview", "https://drive.google.com/uc?id=1hA8Cx7psNNGBm-VfQmd7hYBUzGs3Sq3f&export=download"],
                        ],
            
                        [
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1ckKZ6N9dVZJsgegiiLcJhmLEyy6c3xvb/preview", "https://drive.google.com/uc?id=1ckKZ6N9dVZJsgegiiLcJhmLEyy6c3xvb&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1lK2iLtbEZoQQ7JVDTTelCKXzJ0M0AcYH/preview", "https://drive.google.com/uc?id=1lK2iLtbEZoQQ7JVDTTelCKXzJ0M0AcYH&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/189aN9TVQEyXHxHOBIxEe21ZgLZ5Q16uN/preview", "https://drive.google.com/uc?id=189aN9TVQEyXHxHOBIxEe21ZgLZ5Q16uN&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1m7OaX0NMGFSh_XIR2jqGlW5c5ug0GDPJ/preview", "https://drive.google.com/uc?id=1m7OaX0NMGFSh_XIR2jqGlW5c5ug0GDPJ&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1fM4ihyMostBoplysmcds89ZVkWdeFEih/preview", "https://drive.google.com/uc?id=1fM4ihyMostBoplysmcds89ZVkWdeFEih&export=download"],
                            ["Fix Ben 10!!Error Do not Watch!!!🛑🛑🛑", "https://drive.google.com/file/d/1F0AmSJ-RZLyHHgFCX-0bLVuNcAIRrqHR/preview", "https://drive.google.com/uc?id=1F0AmSJ-RZLyHHgFCX-0bLVuNcAIRrqHR&export=download"],
                        ]
                    ] 
                ]
            ],
    
            riseoftheteenagemutantninjaturtles : 
            [
                [
                    "Rise Of The Teenage Mutant Ninja Turtles",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Rise_Of_The_TMNT.jpg",
                    [
                        [
                            ["Mystic Mayham", "https://drive.google.com/file/d/1BOlFJFg4KeQK5zRbCKTov7rd2mm87Uq0/preview", "https://drive.google.com/uc?id=1BOlFJFg4KeQK5zRbCKTov7rd2mm87Uq0&export=download"],
                            ["Donnies' Gifts & Origami", "https://drive.google.com/file/d/1McbGDA4SQbw32_O_ZpYQTA9lyFSsPNf2/preview", "https://drive.google.com/uc?id=1McbGDA4SQbw32_O_ZpYQTA9lyFSsPNf2&export=download"],
                            ["War and Pizza & NewsWorthy", "https://drive.google.com/file/d/1rhZUvLaqFstb-D8BN59PzSmy_rCHT9Sf/preview", "https://drive.google.com/uc?id=1rhZUvLaqFstb-D8BN59PzSmy_rCHT9Sf&export=download"],
                            ["Down with The Sickness & Repo Mantis", "https://drive.google.com/file/d/1a2uUrS9hcfTz6rD5kJ1F7PCoKoY2I3xt/preview", "https://drive.google.com/uc?id=1a2uUrS9hcfTz6rD5kJ1F7PCoKoY2I3xt&export=download"],
                            ["Shell in a Cell & Minotaur Maze", "https://drive.google.com/file/d/14FWcQ78bbMzGdXyy5LoIXz66beJOgkTw/preview", "https://drive.google.com/uc?id=14FWcQ78bbMzGdXyy5LoIXz66beJOgkTw&export=download"],
                            ["The Fast and the Furriest & Mascot Melee", "https://drive.google.com/file/d/1g5sN7Pr9oKUN5wDzskmHjC_ZhED2Gu9n/preview", "https://drive.google.com/uc?id=1g5sN7Pr9oKUN5wDzskmHjC_ZhED2Gu9n&export=download"],
                            ["The Longest Fight & Hypno Part Deux", "https://drive.google.com/file/d/1Dsrk2G_gmcBIEPrXS9oXZN_-wYVBY8cs/preview", "https://drive.google.com/uc?id=1Dsrk2G_gmcBIEPrXS9oXZN_-wYVBY8cs&export=download"],
                            ["The Gumbus & Mrs Cuddles", "https://drive.google.com/file/d/1aADSEPGR-SG0Z92WyF47dAUn4muX_0BS/preview", "https://drive.google.com/uc?id=1aADSEPGR-SG0Z92WyF47dAUn4muX_0BS&export=download"],
                            ["Stuck on you & Al Be Back", "https://drive.google.com/file/d/1xorprwTd0vyRzNWCRo-s2l6cD8K_hwow/preview", "https://drive.google.com/uc?id=1xorprwTd0vyRzNWCRo-s2l6cD8K_hwow&export=download"],
                            ["Bug Busters", "https://drive.google.com/file/d/1a6EYqrNxFtbNE3afh-d9jto849cssziW/preview", "https://drive.google.com/uc?id=1a6EYqrNxFtbNE3afh-d9jto849cssziW&export=download"],
                            ["The Evil League of Mutants", "https://drive.google.com/file/d/1AY86dxJA9cel5hio8kv9S7XK42GoXQND/preview", "https://drive.google.com/uc?id=1AY86dxJA9cel5hio8kv9S7XK42GoXQND&export=download"],
                            ["The Purple Jacket & Pizza Pit", "https://drive.google.com/file/d/1szHq6rqGkt_orKe3jZQbW1eLNvKUN18S/preview", "https://drive.google.com/uc?id=1szHq6rqGkt_orKe3jZQbW1eLNvKUN18S&export=download"],
                            ["Smart Liar & Hot Soup: The Game", "https://drive.google.com/file/d/1KwbwKSVFrKmZOmJTci_I0kbTWaf0HJ_Z/preview", "https://drive.google.com/uc?id=1KwbwKSVFrKmZOmJTci_I0kbTWaf0HJ_Z&export=download"],
                            ["Late Fee & Bull Hop", "https://drive.google.com/file/d/1l9iF1RCnKACKzt-zt3hENhTIVWwXzWPi/preview", "https://drive.google.com/uc?id=1l9iF1RCnKACKzt-zt3hENhTIVWwXzWPi&export=download"],
                            ["Mind Meld & Nothing But Truffle", "https://drive.google.com/file/d/1ddDQ6rNr6V56wt8YQrayTTffACNLHGKV/preview", "https://drive.google.com/uc?id=1ddDQ6rNr6V56wt8YQrayTTffACNLHGKV&export=download"],
                            ["Portal Jacked & Hypno And Warren, Sitting in a Tree", "https://drive.google.com/file/d/159ubax3eaWJshk-73VKZVY2_CHVOgBfE/preview", "https://drive.google.com/uc?id=159ubax3eaWJshk-73VKZVY2_CHVOgBfE&export=download"],
                            ["Operation: Normal & Sparring Partner", "https://drive.google.com/file/d/1lglXcjrDbAGFEkWrWR_bEnquT5jk0fV2/preview", "https://drive.google.com/uc?id=1lglXcjrDbAGFEkWrWR_bEnquT5jk0fV2&export=download"],
                            ["Shadow Of Evil", "https://drive.google.com/file/d/19bY8a0QSyJq3oMdYv4AHwJz_kdcs5xlB/preview", "https://drive.google.com/uc?id=19bY8a0QSyJq3oMdYv4AHwJz_kdcs5xlB&export=download"],
                            ["You Got Served & How To Make Enemies and People Bend to Your Will", "https://drive.google.com/file/d/1OhfaMd2FU5OeD6kTWkJBzClAjkvGKai4/preview", "https://drive.google.com/uc?id=1OhfaMd2FU5OeD6kTWkJBzClAjkvGKai4&export=download"],
                            ["Mystic Library & The Purple Game", "https://drive.google.com/file/d/1_lmcd0xeZgSRLl6YuGkh62eZKwTEuyNe/preview", "https://drive.google.com/uc?id=1_lmcd0xeZgSRLl6YuGkh62eZKwTEuyNe&export=download"],
                        ],
            
                        [
                            ["Flushed But Never Forgotten & Lair Games", "https://drive.google.com/file/d/12zNP97I9KiOhBpkcQZrQJe9Angt7EEsy/preview", "https://drive.google.com/uc?id=12zNP97I9KiOhBpkcQZrQJe9Angt7EEsy&export=download"],
                            ["Man vs. Sewer & The Mutant Menace", "https://drive.google.com/file/d/1iIW__Via75kpzzoC26RPAZ6_X7A_YjY_/preview", "https://drive.google.com/uc?id=1iIW__Via75kpzzoC26RPAZ6_X7A_YjY_&export=download"],
                            ["Turtle-dega Nights: The Ballad of Rat Man & The Ancient Art of Ninja Hide and Seek", "https://drive.google.com/file/d/1pMl6Eqqgp8ayMKtokZsjlmK2f6qoOP5i/preview", "https://drive.google.com/uc?id=1pMl6Eqqgp8ayMKtokZsjlmK2f6qoOP5i&export=download"],
                            ["One Mans Junk & Snow Day", "https://drive.google.com/file/d/1OBQcq1FovIEia4BX6gOLwC_FRk0hs7VK/preview", "https://drive.google.com/uc?id=1OBQcq1FovIEia4BX6gOLwC_FRk0hs7VK&export=download"],
                            ["Cloak and Swaggart & Jupiter Jim Ahoy!", "https://drive.google.com/file/d/1F-fuXmjwiXDQwSOLnSd2S-8u1096Ud-L/preview", "https://drive.google.com/uc?id=1F-fuXmjwiXDQwSOLnSd2S-8u1096Ud-L&export=download"],
                            ["Insane in the Mama Train", "https://drive.google.com/file/d/1FE06fmH-yKaVxBqL5CcbTo5T_7yGNY_E/preview", "https://drive.google.com/uc?id=1FE06fmH-yKaVxBqL5CcbTo5T_7yGNY_E&export=download"],
                            ["End Game", "https://drive.google.com/file/d/1a0Dg0Aj1dg7bXAQ6XWu97RteeGWDjCpy/preview", "https://drive.google.com/uc?id=1a0Dg0Aj1dg7bXAQ6XWu97RteeGWDjCpy&export=download"],
                            ["Many Unhappy Returns", "https://drive.google.com/file/d/1cBC86sSltKrm9KYwRcZXauIrpHEM-Jfl/preview", "https://drive.google.com/uc?id=1cBC86sSltKrm9KYwRcZXauIrpHEM-Jfl&export=download"],
                            ["Todd Scouts & Goyles, Goyles, Goyles", "https://drive.google.com/file/d/1OwHzwiQZeyXxfstwoAdDnVCaBVlEPnvA/preview", "https://drive.google.com/uc?id=1OwHzwiQZeyXxfstwoAdDnVCaBVlEPnvA&export=download"],
                            ["Breaking Purple & Repairin Baron", "https://drive.google.com/file/d/1ljq6Z22kTzA1OLVkLRFep6I0e3uzjzwO/preview", "https://drive.google.com/uc?id=1ljq6Z22kTzA1OLVkLRFep6I0e3uzjzwO&export=download"],
                            ["Air Turtle & Pizza Puffs", "https://drive.google.com/file/d/10VebDyJwCM84vieQ0IbmqGlE2iunlEMQ/preview", "https://drive.google.com/uc?id=10VebDyJwCM84vieQ0IbmqGlE2iunlEMQ&export=download"],
                            ["Sidekick Ahoy & The Hidden City Job", "https://drive.google.com/file/d/1kA1IUiFkHducMfaY1t0Ad5vhLMVX7Rdu/preview", "https://drive.google.com/uc?id=1kA1IUiFkHducMfaY1t0Ad5vhLMVX7Rdu&export=download"],
                            ["Always be Brownies & Mystery Meat", "https://drive.google.com/file/d/1GqTKl_-FubtsBTB1JfqQZTndlh83Yq0e/preview", "https://drive.google.com/uc?id=1GqTKl_-FubtsBTB1JfqQZTndlh83Yq0e&export=download"],
                            ["Donnie vs. Witch Town & Raph's Ride-Along", "https://drive.google.com/file/d/1OA45q90Cm7Y2HBe-z8161lilDpFWd-7X/preview", "https://drive.google.com/uc?id=1OA45q90Cm7Y2HBe-z8161lilDpFWd-7X&export=download"],
                            ["Hidden City's Most Wanted & Bad Hair Day", "https://drive.google.com/file/d/17DuVpl-AfJdN9JVtkGXpW1vspKe_a-A7/preview", "https://drive.google.com/uc?id=17DuVpl-AfJdN9JVtkGXpW1vspKe_a-A7&export=download"],
                            ["Fists of Furry & The Clothes Don't Make the Turtle", "https://drive.google.com/file/d/13cCJ5otl-ZRWn-Qi8Q5_KA-9gouZyoYC/preview", "https://drive.google.com/uc?id=13cCJ5otl-ZRWn-Qi8Q5_KA-9gouZyoYC&export=download"],
                            ["Battle Nexus: New York", "https://drive.google.com/file/d/1UpNayRtxMs2L_ECx_rIVsUwp4ZOedWu_/preview", "https://drive.google.com/uc?id=1UpNayRtxMs2L_ECx_rIVsUwp4ZOedWu_&export=download"],
                            ["Final Part 1 & Final Part 2", "https://drive.google.com/file/d/1meS9GbjJyjVgZBO-mcFS0LHzDq47wdh2/preview", "https://drive.google.com/uc?id=1meS9GbjJyjVgZBO-mcFS0LHzDq47wdh2&export=download"],
                            ["Final Part 3 & Final Part 4", "https://drive.google.com/file/d/1avzLtdSClZ8TqhigA6OazGPe9vjEgBq6/preview", "https://drive.google.com/uc?id=1avzLtdSClZ8TqhigA6OazGPe9vjEgBq6&export=download"],
                        ]
                    ] 
                ]
            ],
    
            knuckles : 
            [
                [
                    "Knuckles",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Knuckles.jpg",
                    [
                        [
                            ["The Warrior", "https://drive.google.com/file/d/1r5BNFBM9bz_U4zMWF_rKr5gVLPbVwAmB/preview", "https://drive.google.com/uc?id=1r5BNFBM9bz_U4zMWF_rKr5gVLPbVwAmB&export=download"],
                            ["Don't ever Say I wasn't there for you", "https://drive.google.com/file/d/11Fs97ekvzdECQCtkzi0Ye01nz1PaVAKv/preview", "https://drive.google.com/uc?id=11Fs97ekvzdECQCtkzi0Ye01nz1PaVAKv&export=download"],
                            ["The Shabbat Dinner", "https://drive.google.com/file/d/12hvXrKTs-727njl2COeo7kZalv9iZJ-y/preview", "https://drive.google.com/uc?id=12hvXrKTs-727njl2COeo7kZalv9iZJ-y&export=download"],
                            ["The Disaster of Flames", "https://drive.google.com/file/d/1PgJQDmYULLvRlxLaKGUnoasu652lS9i4/preview", "https://drive.google.com/uc?id=1PgJQDmYULLvRlxLaKGUnoasu652lS9i4&export=download"],
                            ["Reno, Baby", "https://drive.google.com/file/d/1uoY4JAYuXPimxaCxhG_Jrs11HQnGPYTF/preview", "https://drive.google.com/uc?id=1uoY4JAYuXPimxaCxhG_Jrs11HQnGPYTF&export=download"],
                            ["What happens in Reno, Stays in Reno", "https://drive.google.com/file/d/1jSnlWTco649ZWY2_KlhftzOuUZLdU9LV/preview", "https://drive.google.com/uc?id=1jSnlWTco649ZWY2_KlhftzOuUZLdU9LV&export=download"],
                        ]
                    ]
                ]
            ],
    
            phineasandferb : 
            [
                [
                    "Phineas and Ferb",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/Phineas_and_Ferb.jpg",
                    [
                        [
                            ["RollerCoaster & Candace Loses Her Head", "https://drive.google.com/file/d/1TYcaV0J1kF4dJLowEfqVpSW5ShVKv13Q/preview", "https://drive.google.com/uc?id=1TYcaV0J1kF4dJLowEfqVpSW5ShVKv13Q&export=download"],
                            ["The Fast and The Phineas & Lawn Gnome Beach Party", "https://drive.google.com/file/d/1AUHiEoHZ8J_Pf4xk2nlEuvedJEHyChWO/preview", "https://drive.google.com/uc?id=1AUHiEoHZ8J_Pf4xk2nlEuvedJEHyChWO&export=download"],
                            ["The Magnificent View & Swinter", "https://drive.google.com/file/d/1RhnMrimZF2VYBGpo0vetWOTsCyEGYmkW/preview", "https://drive.google.com/uc?id=1RhnMrimZF2VYBGpo0vetWOTsCyEGYmkW&export=download"],
                            ["Are you my Mummy & Flop Starz", "https://drive.google.com/file/d/1VcYCOy7d8Bj-jZhz0Gy5UTssESR6VAF1/preview", "https://drive.google.com/uc?id=1VcYCOy7d8Bj-jZhz0Gy5UTssESR6VAF1&export=download"],
                            ["Raging Bully & Lights Candace Action", "https://drive.google.com/file/d/1p_JhStCB6I64c501lVyR34fqA-p5pc5l/preview", "https://drive.google.com/uc?id=1p_JhStCB6I64c501lVyR34fqA-p5pc5l&export=download"],
                            ["Get that Bigfoot outa My Face Tree & Tree to Get Ready", "https://drive.google.com/file/d/1J1nM_VmwXF5JatJSuykJ-QuLkBIncyNC/preview", "https://drive.google.com/uc?id=1J1nM_VmwXF5JatJSuykJ-QuLkBIncyNC&export=download"],
                            ["Its About Time", "https://drive.google.com/file/d/1EFxaWMaYduQP2TNGr7ESci514KOhDVYQ/preview", "https://drive.google.com/uc?id=1EFxaWMaYduQP2TNGr7ESci514KOhDVYQ&export=download"],
                            ["Jerk De Soleil & Toy To The World", "https://drive.google.com/file/d/1xFHvzhzmNG8_X3SUMLxHy5X4HzAhWKn3/preview", "https://drive.google.com/uc?id=1xFHvzhzmNG8_X3SUMLxHy5X4HzAhWKn3&export=download"],
                            ["One Good Score Ought to Do It ", "https://drive.google.com/file/d/1vRvEH1m_xZ4ro5d5YtV0fvHGt5h1J0YC/preview", "https://drive.google.com/uc?id=1vRvEH1m_xZ4ro5d5YtV0fvHGt5h1J0YC&export=download"],
                            ["A Hard Day's Knight & I, Brobot", "https://drive.google.com/file/d/1gnITMvVejs4AuAzUPqLLHRdffGx9K16f/preview", "https://drive.google.com/uc?id=1gnITMvVejs4AuAzUPqLLHRdffGx9K16f&export=download"],
                            ["Mom's Birthday & Journey to the Center of Candace", "https://drive.google.com/file/d/1lCsw-Wcv5Kns8lLftqndCFSvW57K1GH9/preview", "https://drive.google.com/uc?id=1lCsw-Wcv5Kns8lLftqndCFSvW57K1GH9&export=download"],
                            ["Run Away RunAway & I Scream, You Scream", "https://drive.google.com/file/d/1f6UDeEH6xgYEQX1AMjFDu0L1ggbLaGdX/preview", "https://drive.google.com/uc?id=1f6UDeEH6xgYEQX1AMjFDu0L1ggbLaGdX&export=download"],
                            ["Its a Mud Mud Mud Mud World & The Ballard of Badbeard", "https://drive.google.com/file/d/1QLfmplQigBYzFweetogXXRQUbahHBuJV/preview", "https://drive.google.com/uc?id=1QLfmplQigBYzFweetogXXRQUbahHBuJV&export=download"],
                            ["Dude We're Getting the Band Back together", "https://drive.google.com/file/d/13uHp4XglW9vdYmwiwe-5ioseAfdeSymO/preview", "https://drive.google.com/uc?id=13uHp4XglW9vdYmwiwe-5ioseAfdeSymO&export=download"],
                            ["Ready for the Bettys & The Flying Fish Monger", "https://drive.google.com/file/d/1OTwqoEhBAjlAsgNvBwQfAiBlO6iIFjCn/preview", "https://drive.google.com/uc?id=1OTwqoEhBAjlAsgNvBwQfAiBlO6iIFjCn&export=download"],
                            ["Phineas and Ferb Get Busted", "https://drive.google.com/file/d/1RFx6i2BT7hxpErguN9fWf2TBsnJMdU7I/preview", "https://drive.google.com/uc?id=1RFx6i2BT7hxpErguN9fWf2TBsnJMdU7I&export=download"],
                            ["Greece Lighting & Leave The Busting To Us", "https://drive.google.com/file/d/1c4uHg0JbNCyK3TgR1MC6S5f7y3ujp6iW/preview", "https://drive.google.com/uc?id=1c4uHg0JbNCyK3TgR1MC6S5f7y3ujp6iW&export=download"],
                            ["Crack That Whip & The Best Lazy Day Ever ", "https://drive.google.com/file/d/1URAFo9SWps7O3jj5-8QHrHjethP1ydIL/preview", "https://drive.google.com/uc?id=1URAFo9SWps7O3jj5-8QHrHjethP1ydIL&export=download"],
                            ["Boyfriend from 27000 BC & Voyage to the Bottom of Buford", "https://drive.google.com/file/d/1qUVHjU4zxWmopOUxubmEWX9nLbp0xwgG/preview", "https://drive.google.com/uc?id=1qUVHjU4zxWmopOUxubmEWX9nLbp0xwgG&export=download"],
                            ["Put that Putter away & Does The Duckbill Make Me Look Fat", "https://drive.google.com/file/d/198ZdrTDBIsn58fFNo16Y2yVVpgiBi6JX/preview", "https://drive.google.com/uc?id=198ZdrTDBIsn58fFNo16Y2yVVpgiBi6JX&export=download"],
                            ["Traffic Cam Caper & Bowl-R-Ama Drama", "https://drive.google.com/file/d/1WtUstBq41uoG-mctnPmj9Drib5JeQjKY/preview", "https://drive.google.com/uc?id=1WtUstBq41uoG-mctnPmj9Drib5JeQjKY&export=download"],
                            ["The Monster of Phineas N Ferbstein & Oil On Candace", "https://drive.google.com/file/d/1suazQPmXGhdjFzAKYzMlRcHwn6qDQHU5/preview", "https://drive.google.com/uc?id=1suazQPmXGhdjFzAKYzMlRcHwn6qDQHU5&export=download"],
                            ["Unfair Science Fair & Unfair Science Fair Redux (Another Story)", "https://drive.google.com/file/d/1JU50d-F4gS5ckmCIHCtJpXjcoB08jk5-/preview", "https://drive.google.com/uc?id=1JU50d-F4gS5ckmCIHCtJpXjcoB08jk5-&export=download"],
                            ["Out to Launch", "https://drive.google.com/file/d/1UYZjFlPi3nyD4J-_1fFF1ngAy_4vsWTh/preview", "https://drive.google.com/uc?id=1UYZjFlPi3nyD4J-_1fFF1ngAy_4vsWTh&export=download"],
                            ["Got Game & Comet Kermillian", "https://drive.google.com/file/d/1vyzJjyHSvMR2PRfWATU9Px4S7QJEma_k/preview", "https://drive.google.com/uc?id=1vyzJjyHSvMR2PRfWATU9Px4S7QJEma_k&export=download"],
                            ["Out of Toon & Hail Doofania", "https://drive.google.com/file/d/1ziYDMwoK_rbSHCN1GdAvCbP4zrIiBEtI/preview", "https://drive.google.com/uc?id=1ziYDMwoK_rbSHCN1GdAvCbP4zrIiBEtI&export=download"],
                        ],
            
                        [
                            ["The Lake Nose Monster", "https://drive.google.com/file/d/1eFWc7PRMhtYGlGGUXITj1galC9Me-TKf/preview", "https://drive.google.com/uc?id=1eFWc7PRMhtYGlGGUXITj1galC9Me-TKf&export=download"],
                            ["Interview With a Platypus & Tip of The Day", "https://drive.google.com/file/d/138llCVAvKmx5CB2CGKnNFsxie5hvaDHZ/preview", "https://drive.google.com/uc?id=138llCVAvKmx5CB2CGKnNFsxie5hvaDHZ&export=download"],
                            ["Attack of The 50 Foot Sister & Backyard Aquarium", "https://drive.google.com/file/d/1GWlYPgsDswDv-AlOfdgMSQyP1cNhVFaA/preview", "https://drive.google.com/uc?id=1GWlYPgsDswDv-AlOfdgMSQyP1cNhVFaA&export=download"],
                            ["Day Of the Living Gelatin & Elementary My Dear Stacy", "https://drive.google.com/file/d/1RJXIvqwFZgOXEp5-Vp3ZnbyjOYJduZa5/preview", "https://drive.google.com/uc?id=1RJXIvqwFZgOXEp5-Vp3ZnbyjOYJduZa5&export=download"],
                            ["Don't Even Blink & Chez Platypus", "https://drive.google.com/file/d/1vRDZmzd_rMIUFl6M1Kp35ETSq2GMOGg5/preview", "https://drive.google.com/uc?id=1vRDZmzd_rMIUFl6M1Kp35ETSq2GMOGg5&export=download"],
                            ["Perry Lays An Egg & Gaming The System", "https://drive.google.com/file/d/1ao1uY7nqmaNWSC6pIgZXZkfDPAnj5cEY/preview", "https://drive.google.com/uc?id=1ao1uY7nqmaNWSC6pIgZXZkfDPAnj5cEY&export=download"],
                            ["The Chronicles Of Meap ", "https://drive.google.com/file/d/1IwtsHsA9d3ISI_OWGhZIQtzPYKg9Qoxw/preview", "https://drive.google.com/uc?id=1IwtsHsA9d3ISI_OWGhZIQtzPYKg9Qoxw&export=download"],
                            ["Thaddeus and Thor & De Plane De Plane", "https://drive.google.com/file/d/1qcas8ky8VCV5XKBgcHEmlU6WSth7-_Kx/preview", "https://drive.google.com/uc?id=1qcas8ky8VCV5XKBgcHEmlU6WSth7-_Kx&export=download"],
                            ["Let's Take a Quiz & At The car Wash", "https://drive.google.com/file/d/1nT7Y_8fLZ_Kt_ysuGziO6X-4yrzoN69n/preview", "https://drive.google.com/uc?id=1nT7Y_8fLZ_Kt_ysuGziO6X-4yrzoN69n&export=download"],
                            ["Oh, There You Are, Perry & Swiss Family Phineas", "https://drive.google.com/file/d/1BaDx16fm6wXcUVXn1nIYfWPVFsjBdDaX/preview", "https://drive.google.com/uc?id=1BaDx16fm6wXcUVXn1nIYfWPVFsjBdDaX&export=download"],
                            ["Hide and Seek & That Sinking Feeling", "https://drive.google.com/file/d/1oon1qCHWpcLsix0EEs1e-ryQql4XKRin/preview", "https://drive.google.com/uc?id=1oon1qCHWpcLsix0EEs1e-ryQql4XKRin&export=download"],
                            ["The Baljeatles & Vanessassary Roughness", "https://drive.google.com/file/d/1HtkAbSo78aDsrRVV1pGidvMztM1wBnrT/preview", "https://drive.google.com/uc?id=1HtkAbSo78aDsrRVV1pGidvMztM1wBnrT&export=download"],
                            ["No More Bunny Business & Spa Day", "https://drive.google.com/file/d/1IHoH1vAWVVSXVbnYoRu7obUre8C9f2Cf/preview", "https://drive.google.com/uc?id=1IHoH1vAWVVSXVbnYoRu7obUre8C9f2Cf&export=download"],
                            ["Phineas and Ferb Quantum Boogalo ", "https://drive.google.com/file/d/17GglOmHMjacRmGqwtazU56KciGCpFod5/preview", "https://drive.google.com/uc?id=17GglOmHMjacRmGqwtazU56KciGCpFod5&export=download"],
                            ["Phineas And Ferb Musical Cliptastic Countdown ", "https://drive.google.com/file/d/1ijDYjBTQIHP2C0evjlYwu5a6FINb2rK5/preview", "https://drive.google.com/uc?id=1ijDYjBTQIHP2C0evjlYwu5a6FINb2rK5&export=download"],
                            ["Bubble Boys & Isabella and the Temple of Sap", "https://drive.google.com/file/d/1PWpoZiIk2hsSqREITRQmc3fYxZr2lfaD/preview", "https://drive.google.com/uc?id=1PWpoZiIk2hsSqREITRQmc3fYxZr2lfaD&export=download"],
                            ["Cheer Up Candace & Fireside Girl Jamboree", "https://drive.google.com/file/d/1Z5SAcMYfq8auABYyT7N5c9LgnUANKDSx/preview", "https://drive.google.com/uc?id=1Z5SAcMYfq8auABYyT7N5c9LgnUANKDSx&export=download"],
                            ["The Bully Code & Finding Mary McGuffin", "https://drive.google.com/file/d/1hdrN4i8vBBp2BpC_ttsWsvODPNbj14Pz/preview", "https://drive.google.com/uc?id=1hdrN4i8vBBp2BpC_ttsWsvODPNbj14Pz&export=download"],
                            ["Picture This & Nerdy Dancin", "https://drive.google.com/file/d/1va6Ibp49iZ0_G1DZ4k0NU0ocz3IzwKPk/preview", "https://drive.google.com/uc?id=1va6Ibp49iZ0_G1DZ4k0NU0ocz3IzwKPk&export=download"],
                            ["What Do It Do? & Atlantis", "https://drive.google.com/file/d/1buD-ZOnVMvdMdIC0ZkxlaBHlvqdJVogo/preview", "https://drive.google.com/uc?id=1buD-ZOnVMvdMdIC0ZkxlaBHlvqdJVogo&export=download"],
                            ["Phineas and Ferb Christmas Vacation ", "https://drive.google.com/file/d/1-sG90q3JqzVTsi5jjwV5gUcL53F9v8Ky/preview", "https://drive.google.com/uc?id=1-sG90q3JqzVTsi5jjwV5gUcL53F9v8Ky&export=download"],
                            ["Just Passing Through & Candace's Big Day", "https://drive.google.com/file/d/1IJXunpTeF7NXvWAlXql4r9lBzj5yXAGr/preview", "https://drive.google.com/uc?id=1IJXunpTeF7NXvWAlXql4r9lBzj5yXAGr&export=download"],
                            ["I was a middle aged Robot & Suddenly Suzy", "https://drive.google.com/file/d/13j9sim4CE3MgmMlFGl-JcYlAzUQoGlC9/preview", "https://drive.google.com/uc?id=13j9sim4CE3MgmMlFGl-JcYlAzUQoGlC9&export=download"],
                            ["Undercover Carl &  Hip Hip Parade", "https://drive.google.com/file/d/1WU7OZhCldQAnb9aq5SO-lji19RagZKLz/preview", "https://drive.google.com/uc?id=1WU7OZhCldQAnb9aq5SO-lji19RagZKLz&export=download"],
                            ["Invasion of the Ferb Snatchers & Ain't No Kddie Ride", "https://drive.google.com/file/d/14doePJnt3u8wHMSfpVqB4e_i7wkUFcWk/preview", "https://drive.google.com/uc?id=14doePJnt3u8wHMSfpVqB4e_i7wkUFcWk&export=download"],
                            ["Not Phineas and Ferb & Phineas and Ferb-Busters", "https://drive.google.com/file/d/192qQSBVZOtcpUqzeUy7QSVRtWZNm4Xjd/preview", "https://drive.google.com/uc?id=192qQSBVZOtcpUqzeUy7QSVRtWZNm4Xjd&export=download"],
                            ["The Lizard Whisperer & Robot Rodeo", "https://drive.google.com/file/d/1hkzlE50FyYAz5fpkDzqFLEMg-_p9Xy2C/preview", "https://drive.google.com/uc?id=1hkzlE50FyYAz5fpkDzqFLEMg-_p9Xy2C&export=download"],
                            ["The Beak", "https://drive.google.com/file/d/12-3lQmSGOCvKYlM5hnq1642X-_DoO24b/preview", "https://drive.google.com/uc?id=12-3lQmSGOCvKYlM5hnq1642X-_DoO24b&export=download"],
                            ["She's the Mayor & The Lemonade Stand", "https://drive.google.com/file/d/1DcDSfIUzhQziYAZwgxL2Ewaojm79D7yV/preview", "https://drive.google.com/uc?id=1DcDSfIUzhQziYAZwgxL2Ewaojm79D7yV&export=download"],
                            ["Phineas and Ferb Hawaiian Vacation Part 1 & Phineas and Ferb Hawaiian Vacation Part 2", "https://drive.google.com/file/d/134cxip78fE7ToybMhjJpgemtdW_2UBHJ/preview", "https://drive.google.com/uc?id=134cxip78fE7ToybMhjJpgemtdW_2UBHJ&export=download"],
                            ["Phineas and Ferb Summer Belongs To you", "https://drive.google.com/file/d/1RpBHWtzNZSyOSx0-Lpz48V4XhIek5V6n/preview", "https://drive.google.com/uc?id=1RpBHWtzNZSyOSx0-Lpz48V4XhIek5V6n&export=download"],
                            ["Nerbs of a Father", "https://drive.google.com/file/d/1SQ_9GLn7QRdbOxc-AONk5dWvRIhsSMG7/preview", "https://drive.google.com/uc?id=1SQ_9GLn7QRdbOxc-AONk5dWvRIhsSMG7&export=download"],
                            ["Wizard of Odd ", "https://drive.google.com/file/d/1IuyhCI5DDPaVHRIvhfPPSFw4SqtXfieF/preview", "https://drive.google.com/uc?id=1IuyhCI5DDPaVHRIvhfPPSFw4SqtXfieF&export=download"],
                            ["We call it Maze & Ladies and Gentlemen Meet Max Modem", "https://drive.google.com/file/d/1LM1pHSl6_SoiP12__We1T30nyPxWD4Pz/preview", "https://drive.google.com/uc?id=1LM1pHSl6_SoiP12__We1T30nyPxWD4Pz&export=download"],
                            ["The Secret of Success & The Doof Side of The Moon", "https://drive.google.com/file/d/126h5ezljc25hrknjHwgk09Ie6y1p6uj-/preview", "https://drive.google.com/uc?id=126h5ezljc25hrknjHwgk09Ie6y1p6uj-&export=download"],
                            ["Split Personality & Brain Drain", "https://drive.google.com/file/d/1EigtgzGMNaUmFHw0sgKFahF_F8TKRO_s/preview", "https://drive.google.com/uc?id=1EigtgzGMNaUmFHw0sgKFahF_F8TKRO_s&export=download"],
                            ["RollerCoaster: The Musical!", "https://drive.google.com/file/d/1jmfu_SKoXXmGsPKqWPAq3GryZ2vnlvIh/preview", "https://drive.google.com/uc?id=1jmfu_SKoXXmGsPKqWPAq3GryZ2vnlvIh&export=download"],
                            ["Make Play & Candace Gets Busted", "https://drive.google.com/file/d/1sj_LNNZYCN3n3h7wojghs3wPEntTV0cs/preview", "https://drive.google.com/uc?id=1sj_LNNZYCN3n3h7wojghs3wPEntTV0cs&export=download"],
                        ],
            
                        [
                            ["Run, Candace, Run & Last Train to Bustville", "https://drive.google.com/file/d/1at3QAJRMAgfm0obXuS2fSMqvZ-hR3B9S/preview", "https://drive.google.com/uc?id=1at3QAJRMAgfm0obXuS2fSMqvZ-hR3B9S&export=download"],
                            ["The Great Indoors & Canderemy", "https://drive.google.com/file/d/1ik6egr3R4Csfw6JdxG8UhrRmEMRrx9ws/preview", "https://drive.google.com/uc?id=1ik6egr3R4Csfw6JdxG8UhrRmEMRrx9ws&export=download"],
                            ["The Belly of the Beast & Moon Farm", "https://drive.google.com/file/d/1gphUOl_vo-Beaa_Aabh1c_KDGA5p9yRF/preview", "https://drive.google.com/uc?id=1gphUOl_vo-Beaa_Aabh1c_KDGA5p9yRF&export=download"],
                            ["Phineas and Ferb Clip-O-Rama", "https://drive.google.com/file/d/1w4NR0NDDWLUx9GDCcZ8I90LG0-xMupIA/preview", "https://drive.google.com/uc?id=1w4NR0NDDWLUx9GDCcZ8I90LG0-xMupIA&export=download"],
                            ["Ask a Foolish Question & Misperceived Monotreme", "https://drive.google.com/file/d/1LafW-ncxrHi3nxIDtxynI66uJGuwXxpl/preview", "https://drive.google.com/uc?id=1LafW-ncxrHi3nxIDtxynI66uJGuwXxpl&export=download"],
                            ["Candace Disconnected & Magic Carpet Ride", "https://drive.google.com/file/d/1-LgzMlLiq-fURgAkxvM9fA5z-umxHLLr/preview", "https://drive.google.com/uc?id=1-LgzMlLiq-fURgAkxvM9fA5z-umxHLLr&export=download"],
                            ["Bad Hair Day & Meatloaf Surpise", "https://drive.google.com/file/d/1wmOR9wT349kVz0ANIai12MV5sskdUdTV/preview", "https://drive.google.com/uc?id=1wmOR9wT349kVz0ANIai12MV5sskdUdTV&export=download"],
                            ["Tri-Stone Area: 27,000 BC & Doof Dynasty", "https://drive.google.com/file/d/1dkwXDQ1mWo5RmC59Yqc0V3JhIGBfr_od/preview", "https://drive.google.com/uc?id=1dkwXDQ1mWo5RmC59Yqc0V3JhIGBfr_od&export=download"],
                            ["Phineas and Ferb Interrupted & A Real Boy", "https://drive.google.com/file/d/14HvI8dmRepalelUc2eu98jBlfdo09BnO/preview", "https://drive.google.com/uc?id=14HvI8dmRepalelUc2eu98jBlfdo09BnO&export=download"],
                            ["Mommy Can You hear Me & Road Trip", "https://drive.google.com/file/d/1ugzi2mIJCEb661WHrFqBipAsafSt5Jmw/preview", "https://drive.google.com/uc?id=1ugzi2mIJCEb661WHrFqBipAsafSt5Jmw&export=download"],
                            ["Skiddley Whiffers & Tour de Ferb", "https://drive.google.com/file/d/1zYeJXARIitIgXMTjV_KgUUDtB-L38Bu5/preview", "https://drive.google.com/uc?id=1zYeJXARIitIgXMTjV_KgUUDtB-L38Bu5&export=download"],
                            ["My Fair Goalie ", "https://drive.google.com/file/d/1X0-fHNR9aoiRNZOOwYhVz-14pbI30P8X/preview", "https://drive.google.com/uc?id=1X0-fHNR9aoiRNZOOwYhVz-14pbI30P8X&export=download"],
                            ["Perry the Actorpus & Bullseye!", "https://drive.google.com/file/d/12OBuX_igJgWhQ2khSReH588wXykBMPeS/preview", "https://drive.google.com/uc?id=12OBuX_igJgWhQ2khSReH588wXykBMPeS&export=download"],
                            ["That's the Spirit & The Curse of Candace", "https://drive.google.com/file/d/1jcQ2jrJsFmaTZRK2M5YZVauzof5PY8IZ/preview", "https://drive.google.com/uc?id=1jcQ2jrJsFmaTZRK2M5YZVauzof5PY8IZ&export=download"],
                            ["Escape from Phineas Tower & anpytalp eht to sniameR ehT ", "https://drive.google.com/file/d/1yJcwZi6354pQKuSs1yiSm9EnuMCp4TQW/preview", "https://drive.google.com/uc?id=1yJcwZi6354pQKuSs1yiSm9EnuMCp4TQW&export=download"],
                            ["Ferb Latin & Lotsa Latkes", "https://drive.google.com/file/d/1zyTZuzti_Pt7rdcOXem2OjEMtbIazmP7/preview", "https://drive.google.com/uc?id=1zyTZuzti_Pt7rdcOXem2OjEMtbIazmP7&export=download"],
                            ["A Phineas and Ferb Family Christmas", "https://drive.google.com/file/d/1d6H1K7kNZpQgUbu4gJLrp7xU2l0xB-4j/preview", "https://drive.google.com/uc?id=1d6H1K7kNZpQgUbu4gJLrp7xU2l0xB-4j&export=download"],
                            ["What a Croc & Ferb TV", "https://drive.google.com/file/d/1A9x7z1dFAEwZFqB3Y7KgcIZBsblRPJne/preview", "https://drive.google.com/uc?id=1A9x7z1dFAEwZFqB3Y7KgcIZBsblRPJne&export=download"],
                            ["Mom's in th House & Minor Monogram", "https://drive.google.com/file/d/1h8KSe0Jmfb3VKqEtDM6JNKCGobbbTofL/preview", "https://drive.google.com/uc?id=1h8KSe0Jmfb3VKqEtDM6JNKCGobbbTofL&export=download"],
                            ["Excaliferb", "https://drive.google.com/file/d/1VH-rk6v_oSxQsX0Em3NXOIDhhPB40QN6/preview", "https://drive.google.com/uc?id=1VH-rk6v_oSxQsX0Em3NXOIDhhPB40QN6&export=download"],
                            ["Monster from the Id & Gi-Ants", "https://drive.google.com/file/d/1aeESVsLXhw3HV13pGGfLrP21bYFhH-0d/preview", "https://drive.google.com/uc?id=1aeESVsLXhw3HV13pGGfLrP21bYFhH-0d&export=download"],
                            ["Agent doof & Phineas and Ferb and the Temple of Juatchadoon", "https://drive.google.com/file/d/17h6qDAKi5AelyXP0oiKj5lE4GITgvMeV/preview", "https://drive.google.com/uc?id=17h6qDAKi5AelyXP0oiKj5lE4GITgvMeV&export=download"],
                            ["Delivery of Destiny & Let's Bounce", "https://drive.google.com/file/d/1Tu2vpSrycgBYewmJfM2jhjsu7IRsML0P/preview", "https://drive.google.com/uc?id=1Tu2vpSrycgBYewmJfM2jhjsu7IRsML0P&export=download"],
                            ["Quitest Day Ever & Bully Bromance Breakup", "https://drive.google.com/file/d/1IQ3hca6TURnmj6DYmcdPCKLDpOEvCne-/preview", "https://drive.google.com/uc?id=1IQ3hca6TURnmj6DYmcdPCKLDpOEvCne-&export=download"],
                            ["The Doonkelberry Imperative & Buford Confidential", "https://drive.google.com/file/d/1WDWAV_8TiH6j9Cksmw5SGJLwCJm5HUz8/preview", "https://drive.google.com/uc?id=1WDWAV_8TiH6j9Cksmw5SGJLwCJm5HUz8&export=download"],
                            ["Sleepwalk Surpise & Sci-Fie Pie Fly", "https://drive.google.com/file/d/1D8JicutouWhmDaZHyfOGq37kW8ng2uO_/preview", "https://drive.google.com/uc?id=1D8JicutouWhmDaZHyfOGq37kW8ng2uO_&export=download"],
                            ["Meapless in Seattle", "https://drive.google.com/file/d/1kAi0lqMbfmBlu7rHU8jxL5GhkfSjJoQR/preview", "https://drive.google.com/uc?id=1kAi0lqMbfmBlu7rHU8jxL5GhkfSjJoQR&export=download"],
                            ["The Mom Attractor & Cranius Maximus", "https://drive.google.com/file/d/1ZmrSxd-wVh2VqOuPm4DXDlPT_CjzYHxg/preview", "https://drive.google.com/uc?id=1ZmrSxd-wVh2VqOuPm4DXDlPT_CjzYHxg&export=download"],
                            ["Sipping with the Enemy & Tri-State Treasure: Boot of Secrets", "https://drive.google.com/file/d/1FAWPNY36Wdme83nTlbtNtvcXcTvQcHhI/preview", "https://drive.google.com/uc?id=1FAWPNY36Wdme83nTlbtNtvcXcTvQcHhI&export=download"],
                            ["Doofapus & Norm Unleashed", "https://drive.google.com/file/d/1z9ACj_JA_ecKHb6QQIZH_CnjeYodWfll/preview", "https://drive.google.com/uc?id=1z9ACj_JA_ecKHb6QQIZH_CnjeYodWfll&export=download"],
                            ["When Worlds Collide & Road to Danville", "https://drive.google.com/file/d/1TKsbgZfs6utdsIht2sscwCdrsd4a3Faz/preview", "https://drive.google.com/uc?id=1TKsbgZfs6utdsIht2sscwCdrsd4a3Faz&export=download"],
                            ["Where's Perry? ", "https://drive.google.com/file/d/1EcD1M_R45Lub2tDow-cOD4C0FEp21Pdq/preview", "https://drive.google.com/uc?id=1EcD1M_R45Lub2tDow-cOD4C0FEp21Pdq&export=download"],
                            ["Where's Perry? (Part Two)", "https://drive.google.com/file/d/1kC6WgIAJkaLzeRcJJcRBbsLxEfOrikeJ/preview", "https://drive.google.com/uc?id=1kC6WgIAJkaLzeRcJJcRBbsLxEfOrikeJ&export=download"],
                            ["Blackout & What'd I Miss", "https://drive.google.com/file/d/1JcZfZjV_PDRXqIX_CRd-qvURhr6DOSgI/preview", "https://drive.google.com/uc?id=1JcZfZjV_PDRXqIX_CRd-qvURhr6DOSgI&export=download"],
                            ["This is your BackStory", "https://drive.google.com/file/d/1THlvQFRy82GOV87NjQaBpQqH-6z-Yt3L/preview", "https://drive.google.com/uc?id=1THlvQFRy82GOV87NjQaBpQqH-6z-Yt3L&export=download"],
                        ],
            
                        [
                            ["Fly on the wall & My sweet Ride", "https://drive.google.com/file/d/1vm4pi2GAjSIaaYPfMDgjLlJta7nkpnli/preview", "https://drive.google.com/uc?id=1vm4pi2GAjSIaaYPfMDgjLlJta7nkpnli&export=download"],
                            ["For your ice only & Happy New Year", "https://drive.google.com/file/d/1C7Xlo7U3iTx9tTPDGYU3LFSgb9nIP5bG/preview", "https://drive.google.com/uc?id=1C7Xlo7U3iTx9tTPDGYU3LFSgb9nIP5bG&export=download"],
                            ["Bully Bust & Backyard Hodge Podge", "https://drive.google.com/file/d/10gRkmBpwfyMb22xDtDfqVqDrLbEqHJh-/preview", "https://drive.google.com/uc?id=10gRkmBpwfyMb22xDtDfqVqDrLbEqHJh-&export=download"],
                            ["Der Kinderlumper & Just desserts ", "https://drive.google.com/file/d/1Oen6Nq7raGFTjJt4M7-ku8pyLJFMYIT2/preview", "https://drive.google.com/uc?id=1Oen6Nq7raGFTjJt4M7-ku8pyLJFMYIT2&export=download"],
                            ["Bee Day", "https://drive.google.com/file/d/12lVKIUHf3hBaf8lo3LG8Kq_0k7xIbtb0/preview", "https://drive.google.com/uc?id=12lVKIUHf3hBaf8lo3LG8Kq_0k7xIbtb0&export=download"],
                            ["Sidetracked", "https://drive.google.com/file/d/1TO9TsnghdgVLZh6PWhYjJu_4vAdG4z1A/preview", "https://drive.google.com/uc?id=1TO9TsnghdgVLZh6PWhYjJu_4vAdG4z1A&export=download"],
                            ["Knot My Problem & Mind Share", "https://drive.google.com/file/d/1tM3AGggvxiq-FWtFtrgNCJMKZCWUE3tX/preview", "https://drive.google.com/uc?id=1tM3AGggvxiq-FWtFtrgNCJMKZCWUE3tX&export=download"],
                            ["Primal Perry", "https://drive.google.com/file/d/1-K6RxuDWwm61qQkTfNsFM4ULJr6YifX6/preview", "https://drive.google.com/uc?id=1-K6RxuDWwm61qQkTfNsFM4ULJr6YifX6&export=download"],
                            ["La Candace-Cabra & Happy Birthday, Isabella", "https://drive.google.com/file/d/1WDkS2Khfe54Cs0fDRtPDqK4xrTAMb0pq/preview", "https://drive.google.com/uc?id=1WDkS2Khfe54Cs0fDRtPDqK4xrTAMb0pq&export=download"],
                            ["Great Balls of Water & Where's Pinky", "https://drive.google.com/file/d/1ounaSbmMBMQcDKEW2xLjJudWKPJ0pzpc/preview", "https://drive.google.com/uc?id=1ounaSbmMBMQcDKEW2xLjJudWKPJ0pzpc&export=download"],
                            ["Phineas and Ferb: Mission Marvel", "https://drive.google.com/file/d/19co7of6-tCHnVC0uyKEMirkabQpmTd0K/preview", "https://drive.google.com/uc?id=19co7of6-tCHnVC0uyKEMirkabQpmTd0K&export=download"],
                            ["Thanks But No Thanks & Troy Story", "https://drive.google.com/file/d/14DVxVpzgayLDezZrxrlwZUV3Cmweq0he/preview", "https://drive.google.com/uc?id=14DVxVpzgayLDezZrxrlwZUV3Cmweq0he&export=download"],
                            ["Love at First Byte & One Good Turn", "https://drive.google.com/file/d/10HCLgPtThOpaFYe4CLKe0Afnxtz6XDIS/preview", "https://drive.google.com/uc?id=10HCLgPtThOpaFYe4CLKe0Afnxtz6XDIS&export=download"],
                            ["Cheers for Fears & Just Our Luck", "https://drive.google.com/file/d/1tOvjoshXCtJmz9EA4yJUd8kjXC-3Boss/preview", "https://drive.google.com/uc?id=1tOvjoshXCtJmz9EA4yJUd8kjXC-3Boss&export=download"],
                            ["Return Policy & Imperfect Storm", "https://drive.google.com/file/d/1oh7DcDY_I8snZkQG8fBm7BtanKIc2vJv/preview", "https://drive.google.com/uc?id=1oh7DcDY_I8snZkQG8fBm7BtanKIc2vJv&export=download"],
                            ["Steampunx & It's No Picnic", "https://drive.google.com/file/d/1XhcDmQAx683QFYBFrpC9igfQtr0U7PYx/preview", "https://drive.google.com/uc?id=1XhcDmQAx683QFYBFrpC9igfQtr0U7PYx&export=download"],
                            ["Terrifying Tri-State Trilogy of Terror", "https://drive.google.com/file/d/1XW4zd6yhTxFc9nvQQX41UJefO1lV9u_g/preview", "https://drive.google.com/uc?id=1XW4zd6yhTxFc9nvQQX41UJefO1lV9u_g&export=download"],
                            ["Druselsteinoween", "https://drive.google.com/file/d/1BFYyxxkNsK0uRJnsxeHMSXKPndNWkTsZ/preview", "https://drive.google.com/uc?id=1BFYyxxkNsK0uRJnsxeHMSXKPndNWkTsZ&export=download"],
                            ["The Kimpaloon Ultimatum ", "https://drive.google.com/file/d/1eIyiYHrMsf0vDCe60DV0gWUwoNPu_T_y/preview", "https://drive.google.com/uc?id=1eIyiYHrMsf0vDCe60DV0gWUwoNPu_T_y&export=download"],
                            ["Doof 101 & Father's Day", "https://drive.google.com/file/d/14vuVlZMoIHo1y4tWfbxdlO0PF_i2PN8o/preview", "https://drive.google.com/uc?id=14vuVlZMoIHo1y4tWfbxdlO0PF_i2PN8o&export=download"],
                            ["Operation Crumb Cake & Mandace", "https://drive.google.com/file/d/1pocS8aR2pUH2-3NeLoIZrkvSAtxxjP5h/preview", "https://drive.google.com/uc?id=1pocS8aR2pUH2-3NeLoIZrkvSAtxxjP5h&export=download"],
                            ["Tales from the Resistance Back to the 2nd Dimension", "https://drive.google.com/file/d/1tgrnMkHm8fr4J7W6qopglAQcqPYvRPXd/preview", "https://drive.google.com/uc?id=1tgrnMkHm8fr4J7W6qopglAQcqPYvRPXd&export=download"],
                            ["The Return of the Rogue Rabbt & Live and Let Drive", "https://drive.google.com/file/d/1vqQtqVGQMnAUwXjM6vUK3kwO6JEJCPoC/preview", "https://drive.google.com/uc?id=1vqQtqVGQMnAUwXjM6vUK3kwO6JEJCPoC&export=download"],
                            ["Lost in Danville & The Inator Method", "https://drive.google.com/file/d/13-r39DZ1QeEpktiopGq0FJGmyGgC2FXJ/preview", "https://drive.google.com/uc?id=13-r39DZ1QeEpktiopGq0FJGmyGgC2FXJ&export=download"],
                            ["Act your Age", "https://drive.google.com/file/d/1fayLK8bu-Y6X1LlJ45GNcWI142aVVBaJ/preview", "https://drive.google.com/uc?id=1fayLK8bu-Y6X1LlJ45GNcWI142aVVBaJ&export=download"],
                            ["Phineas and Ferb Save Summer Part 1 & 2", "https://drive.google.com/file/d/1t8vdRQDxuNsd1DXneNe-gOWG4XMshjZ6/preview", "https://drive.google.com/uc?id=1t8vdRQDxuNsd1DXneNe-gOWG4XMshjZ6&export=download"],
                            ["Night of the living pharmacists & ", "https://drive.google.com/file/d/1aPqSWgitaRHGexpzRMwRnzXFqxcBwNCm/preview", "https://drive.google.com/uc?id=1aPqSWgitaRHGexpzRMwRnzXFqxcBwNCm&export=download"],
                            ["Phineas and Ferb Star Wars", "https://drive.google.com/file/d/1OKeOjpc92DLjH4tuimvnpNPTJKoze-3U/preview", "https://drive.google.com/uc?id=1OKeOjpc92DLjH4tuimvnpNPTJKoze-3U&export=download"],
                            ["Phineas and Ferb Last Day of Summer", "https://drive.google.com/file/d/1V-c2MJjRMouDCXYdMNmY36ZqQpv84dyn/preview", "https://drive.google.com/uc?id=1V-c2MJjRMouDCXYdMNmY36ZqQpv84dyn&export=download"],
                            ["O.W.C.A -> Organization Without a Cool Acronym", "https://drive.google.com/file/d/1nn9JzB2xUMvnyfNSCiuHaPkwlMT7_GAL/preview", "https://drive.google.com/uc?id=1nn9JzB2xUMvnyfNSCiuHaPkwlMT7_GAL&export=download"],
                        ]
                    ]
                ]
            ],
    
            //Fix ben 10 and place Hero Academia Here
    
            theamazingworldofgumball : 
            [
                [
                    "The Amazing World Of Gumball",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/The_Amazing_World_Of_Gumball.jpg",
                    [
                        [
                            ["The Third & The Debt", "https://drive.google.com/file/d/1WpDdaSZANwdfdIMLIdHW8XrPfAm3Jj1B/preview", "https://drive.google.com/uc?id=1WpDdaSZANwdfdIMLIdHW8XrPfAm3Jj1B&export=download"],
                            ["The Pressure & The Printing", "https://drive.google.com/file/d/1sZGMwr0dcTfcyRp4FjnczOAcK26mDPmZ/preview", "https://drive.google.com/uc?id=1sZGMwr0dcTfcyRp4FjnczOAcK26mDPmZ&export=download"],
                            ["The Responsible & The Dress", "https://drive.google.com/file/d/1mP6_mWs3PLvtOACvxgsrCoGYmd0v6l6A/preview", "https://drive.google.com/uc?id=1mP6_mWs3PLvtOACvxgsrCoGYmd0v6l6A&export=download"],
                            ["The Laziest & The Ghost", "https://drive.google.com/file/d/1Y6sFXEJNwl05_Co4V5d6IM4AM9MGNqmW/preview", "https://drive.google.com/uc?id=1Y6sFXEJNwl05_Co4V5d6IM4AM9MGNqmW&export=download"],
                            ["The Mystery & The Prank", "https://drive.google.com/file/d/1XMrKmHfv2GgHCCpVGJiqrcMG2-LSCTeF/preview", "https://drive.google.com/uc?id=1XMrKmHfv2GgHCCpVGJiqrcMG2-LSCTeF&export=download"],
                            ["The Gi & The Kiss", "https://drive.google.com/file/d/1Kb7x9rmu4RGI3TuywBTaNTQDFj4suisv/preview", "https://drive.google.com/uc?id=1Kb7x9rmu4RGI3TuywBTaNTQDFj4suisv&export=download"],
                            ["The Party & The Refund", "https://drive.google.com/file/d/1LAw4UVvEqp-Dz6LonY6fybViIm0Fdekn/preview", "https://drive.google.com/uc?id=1LAw4UVvEqp-Dz6LonY6fybViIm0Fdekn&export=download"],
                            ["The Robot & The Picnic", "https://drive.google.com/file/d/18rO1fbE1jBxtc-_YMGEZWWXPEi7ZCqVF/preview", "https://drive.google.com/uc?id=18rO1fbE1jBxtc-_YMGEZWWXPEi7ZCqVF&export=download"],
                            ["The Goons & The Secret", "https://drive.google.com/file/d/1Zso9YUMEjv4owOQOx5mn3lDCcxSSXME9/preview", "https://drive.google.com/uc?id=1Zso9YUMEjv4owOQOx5mn3lDCcxSSXME9&export=download"],
                            ["The Sock & The Genius", "https://drive.google.com/file/d/1Kh2_CpiDJlJ0xaP_40I0wCEaOdXWYjUD/preview", "https://drive.google.com/uc?id=1Kh2_CpiDJlJ0xaP_40I0wCEaOdXWYjUD&export=download"],
                            ["The Mustache & The Date", "https://drive.google.com/file/d/1VqOHCxhUlF31W8dHh-O6gnBtW7xnyGBC/preview", "https://drive.google.com/uc?id=1VqOHCxhUlF31W8dHh-O6gnBtW7xnyGBC&export=download"],
                            ["The Club & The Wand", "https://drive.google.com/file/d/1EtZ41g5JEro2B9qyUdIFHhxY-ndV2PAI/preview", "https://drive.google.com/uc?id=1EtZ41g5JEro2B9qyUdIFHhxY-ndV2PAI&export=download"],
                            ["The Ape & The Poltergeist", "https://drive.google.com/file/d/1gAvxoZcyWU9e1Eun_2YBNDVwLY_Zpqqo/preview", "https://drive.google.com/uc?id=1gAvxoZcyWU9e1Eun_2YBNDVwLY_Zpqqo&export=download"],
                            ["The Quest & The Spoon", "https://drive.google.com/file/d/1F63dhR2GzNNvfw3jLRtt2wmbkz8UMtwk/preview", "https://drive.google.com/uc?id=1F63dhR2GzNNvfw3jLRtt2wmbkz8UMtwk&export=download"],
                            ["The Car & The Curse", "https://drive.google.com/file/d/1LWbZYioMz99cFcXyM5guAzO5sPPchC3r/preview", "https://drive.google.com/uc?id=1LWbZYioMz99cFcXyM5guAzO5sPPchC3r&export=download"],
                            ["The Microwave & The Meddler", "https://drive.google.com/file/d/1v-GDln0N5Wq1IrrTTJG9y-RvHYjzmrxh/preview", "https://drive.google.com/uc?id=1v-GDln0N5Wq1IrrTTJG9y-RvHYjzmrxh&export=download"],
                            ["The Helmet & The Fight", "https://drive.google.com/file/d/1PSqkr5RwfMgwwgLTwr7Djabe8_yxvo_o/preview", "https://drive.google.com/uc?id=1PSqkr5RwfMgwwgLTwr7Djabe8_yxvo_o&export=download"],
                            ["The End & The DVD", "https://drive.google.com/file/d/1BmUlTmkjli_2ZwXxBtG8arKdAIecHhXZ/preview", "https://drive.google.com/uc?id=1BmUlTmkjli_2ZwXxBtG8arKdAIecHhXZ&export=download"],
                        ],
            
                        [
                            ["The Knights & The Colossus", "https://drive.google.com/file/d/1b6L910a64d-XfzG81E4Ujf0vtdvBqExF/preview", "https://drive.google.com/uc?id=1b6L910a64d-XfzG81E4Ujf0vtdvBqExF&export=download"],
                            ["The Fridge & The Remote", "https://drive.google.com/file/d/14aWxTaEH2wDq3HuX7qM7GAbSBLce7WGJ/preview", "https://drive.google.com/uc?id=14aWxTaEH2wDq3HuX7qM7GAbSBLce7WGJ&export=download"],
                            ["The Flower & The Banana", "https://drive.google.com/file/d/1cYpGfVco6OXihGu4FMYvA7-egT6euN5b/preview", "https://drive.google.com/uc?id=1cYpGfVco6OXihGu4FMYvA7-egT6euN5b&export=download"],
                            ["The Phone & The Job", "https://drive.google.com/file/d/1gIQ0YN6EPfsXVW9g5g4CzbaESYz6IeIw/preview", "https://drive.google.com/uc?id=1gIQ0YN6EPfsXVW9g5g4CzbaESYz6IeIw&export=download"],
                            ["Halloween & The Treasure", "https://drive.google.com/file/d/1eYPB6AQ54m73PKTCI0-iq7SICEtwb_s3/preview", "https://drive.google.com/uc?id=1eYPB6AQ54m73PKTCI0-iq7SICEtwb_s3&export=download"],
                            ["The Words & The Apology", "https://drive.google.com/file/d/1cjtaUyZJKyVo-KHUTPfs9IWUfbnSbNrj/preview", "https://drive.google.com/uc?id=1cjtaUyZJKyVo-KHUTPfs9IWUfbnSbNrj&export=download"],
                            ["The Skull & Christmas", "https://drive.google.com/file/d/17jC5tQvdl31SmIUcEURwTGhMOKntVi6w/preview", "https://drive.google.com/uc?id=17jC5tQvdl31SmIUcEURwTGhMOKntVi6w&export=download"],
                            ["The Watch & The Bet", "https://drive.google.com/file/d/1Jse_z3XePh7Db6mbv-BI0MopvJfZ538n/preview", "https://drive.google.com/uc?id=1Jse_z3XePh7Db6mbv-BI0MopvJfZ538n&export=download"],
                            ["The Bumpkin & The Flakers", "https://drive.google.com/file/d/1F2RKCqIbyPFFi5urjVRylGCmS7xhdJcD/preview", "https://drive.google.com/uc?id=1F2RKCqIbyPFFi5urjVRylGCmS7xhdJcD&export=download"],
                            ["The Authority & The virus", "https://drive.google.com/file/d/1I_tCvGCwN55p6f-mhb8OkAnYGAZAu2GV/preview", "https://drive.google.com/uc?id=1I_tCvGCwN55p6f-mhb8OkAnYGAZAu2GV&export=download"],
                            ["The Pony & The Storm", "https://drive.google.com/file/d/1vIR58svJFakwM7RvY8_ae3JCpuyle8CB/preview", "https://drive.google.com/uc?id=1vIR58svJFakwM7RvY8_ae3JCpuyle8CB&export=download"],
                            ["The Dream & The Sidekick", "https://drive.google.com/file/d/1uAFIlBX6j3U17yFdRttHI88sYauuyr2h/preview", "https://drive.google.com/uc?id=1uAFIlBX6j3U17yFdRttHI88sYauuyr2h&export=download"],
                            ["The Hero & The Photo", "https://drive.google.com/file/d/1UpZYYazGEMSyquAwpfd_CfuQp2CDx-Hd/preview", "https://drive.google.com/uc?id=1UpZYYazGEMSyquAwpfd_CfuQp2CDx-Hd&export=download"],
                            ["The Tag & The Lesson", "https://drive.google.com/file/d/1Xx_5JzqeDMavKvSWBx3zHEDFRQC5fZ-T/preview", "https://drive.google.com/uc?id=1Xx_5JzqeDMavKvSWBx3zHEDFRQC5fZ-T&export=download"],
                            ["The Limit & The Game", "https://drive.google.com/file/d/1CAcVdcZKF6Oa9g1DgboYpt3-M0yC__6U/preview", "https://drive.google.com/uc?id=1CAcVdcZKF6Oa9g1DgboYpt3-M0yC__6U&export=download"],
                            ["The Promise & The Voice", "https://drive.google.com/file/d/19apTdVlNK6MEZiZG4pqiR4fo_2I5c75t/preview", "https://drive.google.com/uc?id=19apTdVlNK6MEZiZG4pqiR4fo_2I5c75t&export=download"],
                            ["The Boombox & The Castle", "https://drive.google.com/file/d/1179PYZna5inrdnOq40XVAHJhXUEUR1mH/preview", "https://drive.google.com/uc?id=1179PYZna5inrdnOq40XVAHJhXUEUR1mH&export=download"],
                            ["The Tape & The Sweaters", "https://drive.google.com/file/d/1Otco4HOLd40AEVdK3aHVt-G7lNmmEeGE/preview", "https://drive.google.com/uc?id=1Otco4HOLd40AEVdK3aHVt-G7lNmmEeGE&export=download"],
                            ["The Internet & The Plan", "https://drive.google.com/file/d/1iTyDlTmV-KqJ5l11QuQjr3ogyOujo1Jj/preview", "https://drive.google.com/uc?id=1iTyDlTmV-KqJ5l11QuQjr3ogyOujo1Jj&export=download"],
                            ["The World & The Finale", "https://drive.google.com/file/d/1l2cEageWwhSBxUwf1bUnwGrpYQeEDt9W/preview", "https://drive.google.com/uc?id=1l2cEageWwhSBxUwf1bUnwGrpYQeEDt9W&export=download"],
                        ],
            
                        [
                            ["The Kids & The Fan", "https://drive.google.com/file/d/1TUiw2RVrk2MISKhWs6qOqRMk_g9UgB6D/preview",  "https://drive.google.com/uc?id=1TUiw2RVrk2MISKhWs6qOqRMk_g9UgB6D&export=download"],
                            ["The Coach & The Joy", "https://drive.google.com/file/d/1iJpzSYyQmC-Kw7LtCsYMoqS7de2Zy_zc/preview",  "https://drive.google.com/uc?id=1iJpzSYyQmC-Kw7LtCsYMoqS7de2Zy_zc&export=download"],
                            ["The Recipe & The Puppy", "https://drive.google.com/file/d/147y95dPkxTDspZ13wYdmdbmbVLBBksLj/preview",  "https://drive.google.com/uc?id=147y95dPkxTDspZ13wYdmdbmbVLBBksLj&export=download"],
                            ["The Name & The Extras", "https://drive.google.com/file/d/1DfK-Ruk7GJo387_FDFLmSBt52fBztTfa/preview",  "https://drive.google.com/uc?id=1DfK-Ruk7GJo387_FDFLmSBt52fBztTfa&export=download"],
                            ["The Gripes & The Vacation", "https://drive.google.com/file/d/1txgJiRf63D8nEP2aZJjTjUteoSaoodpq/preview",  "https://drive.google.com/uc?id=1txgJiRf63D8nEP2aZJjTjUteoSaoodpq&export=download"],
                            ["The Fraud & The Void", "https://drive.google.com/file/d/1n2Da7OxWPwHuZBThf4nUJDzke1KSZCvA/preview", "https://drive.google.com/uc?id=1n2Da7OxWPwHuZBThf4nUJDzke1KSZCvA&export=download"],
                            ["The Boss & The Move", "https://drive.google.com/file/d/1VtkAI3ZTjet-ITuPcQoAFv5v5Ddkq_H0/preview",   "https://drive.google.com/uc?id=1VtkAI3ZTjet-ITuPcQoAFv5v5Ddkq_H0&export=download"],
                            ["The Law & The Allergy", "https://drive.google.com/file/d/1L8KLFzDB2dYLbt9d4vxBhLCCN0-kveXJ/preview",   "https://drive.google.com/uc?id=1L8KLFzDB2dYLbt9d4vxBhLCCN0-kveXJ&export=download"],
                            ["The Mothers & The Password", "https://drive.google.com/file/d/1SvttrykaOU3h3tPdJ62Yfq-PHoiPYZOH/preview",   "https://drive.google.com/uc?id=1SvttrykaOU3h3tPdJ62Yfq-PHoiPYZOH&export=download"],
                            ["The Procrastinators & The Shell", "https://drive.google.com/file/d/1HchYFbFP07AnIuag2MqJxGDTpZkyNHlA/preview",   "https://drive.google.com/uc?id=1HchYFbFP07AnIuag2MqJxGDTpZkyNHlA&export=download"],
                            ["The Mirror & The Burden", "https://drive.google.com/file/d/1ZwGqgMrGhc9Y8KTAWBwOfB84j015u0wW/preview",   "https://drive.google.com/uc?id=1ZwGqgMrGhc9Y8KTAWBwOfB84j015u0wW&export=download"],
                            ["The Bros & The Man", "https://drive.google.com/file/d/1J32fVh4QpdmAoDmkdedMFBz1kk38WaJ8/preview",   "https://drive.google.com/uc?id=1J32fVh4QpdmAoDmkdedMFBz1kk38WaJ8&export=download"],
                            ["The Pizza & The Lie", "https://drive.google.com/file/d/1qTrTOGLKcqUtfGXFT0ruIt7USQx7oXoC/preview",   "https://drive.google.com/uc?id=1qTrTOGLKcqUtfGXFT0ruIt7USQx7oXoC&export=download"],
                            ["The Butterfly & The Question", "https://drive.google.com/file/d/1OGGEaw9_qz7z3Sks_h65_0O3A8UF0fZA/preview",   "https://drive.google.com/uc?id=1OGGEaw9_qz7z3Sks_h65_0O3A8UF0fZA&export=download"],
                            ["The Oracle & The Safety", "https://drive.google.com/file/d/1SKQ984-XTopAXd1nCwtlRmkxPC5tTZv3/preview",   "https://drive.google.com/uc?id=1SKQ984-XTopAXd1nCwtlRmkxPC5tTZv3&export=download"],
                            ["The Friend & The Saint", "https://drive.google.com/file/d/1rRKSVbrxKrylUdc3yPntGpyKSBKXp2Oz/preview",   "https://drive.google.com/uc?id=1rRKSVbrxKrylUdc3yPntGpyKSBKXp2Oz&export=download"],
                            ["The Society & The SPoiler", "https://drive.google.com/file/d/1ksIeJbTaNWaOiFDCxfKJkBaeNCoHvKwj/preview",   "https://drive.google.com/uc?id=1ksIeJbTaNWaOiFDCxfKJkBaeNCoHvKwj&export=download"],
                            ["The Countdown & The Nobody", "https://drive.google.com/file/d/1y2Y-Mh7ghpH1-Td0drzbT2LZqJIXDfvS/preview"," https://drive.google.com/uc?id=1y2Y-Mh7ghpH1-Td0drzbT2LZqJIXDfvS&export=download"],
                            ["The Downer & The Egg", "https://drive.google.com/file/d/1Pc-imsmx0F-jhH2OxbkUBHwA1Kh47aKx/preview", "https://drive.google.com/uc?id=1Pc-imsmx0F-jhH2OxbkUBHwA1Kh47aKx&export=download"],
                            ["The Triangle & The Money", "https://drive.google.com/file/d/1JYJxGjS5oRxRdXdDo3nZnnGtann9B4z8/preview", "https://drive.google.com/uc?id=1JYJxGjS5oRxRdXdDo3nZnnGtann9B4z8&export=download"],
                        ]
                    ]
                ]
            ],
    
            thelegendofkorra : 
            [
                [
                    "The Legend Of Korra",
                    `../Other_Webpages/watch_serie.html?movie=${decryptedText}`, 
                    "../Images/Series Images/TheLegendOfKorra.jpg",
                    [
                        [
                            ["Welcome to Republic City",    "https://drive.google.com/file/d/1yBLyWR0p_3YDcG3RgO78Jv4Gl0cmdRuF/preview",  "https://drive.google.com/uc?id=1yBLyWR0p_3YDcG3RgO78Jv4Gl0cmdRuF&export=download"],
                            ["Leaf in the Wind",            "https://drive.google.com/file/d/1eEu9Cd0JiuXha77yow9tWoKu5CqpITwi/preview",  "https://drive.google.com/uc?id=1eEu9Cd0JiuXha77yow9tWoKu5CqpITwi&export=download"],
                            ["The Revalation",              "https://drive.google.com/file/d/1iGXMCiWE9aI7lxKGWcH2UYu_KHc2NOj1/preview",  "https://drive.google.com/uc?id=1iGXMCiWE9aI7lxKGWcH2UYu_KHc2NOj1&export=download"],
                            ["The voice in the Night",      "https://drive.google.com/file/d/1HmuB-DP_aOWRB8n7TaKBzYrBCFQ12M0A/preview",  "https://drive.google.com/uc?id=1HmuB-DP_aOWRB8n7TaKBzYrBCFQ12M0A&export=download"],
                            ["The Spirit of Competition",   "https://drive.google.com/file/d/1o3zBUUHXBcIqIIThDDuedctDpyDeaIHV/preview",  "https://drive.google.com/uc?id=1o3zBUUHXBcIqIIThDDuedctDpyDeaIHV&export=download"],
                            ["And The winner is",           "https://drive.google.com/file/d/1zxKimD9w_629hWlaU0VLzR3BtGrOfpOZ/preview",  "https://drive.google.com/uc?id=1zxKimD9w_629hWlaU0VLzR3BtGrOfpOZ&export=download"],
                            ["The aftermath",               "https://drive.google.com/file/d/1Q5jcwqBZ1wtqlqkLMvN8U89Vt1Ls2aUH/preview",  "https://drive.google.com/uc?id=1Q5jcwqBZ1wtqlqkLMvN8U89Vt1Ls2aUH&export=download"],
                            ["When Extremes Meet",          "https://drive.google.com/file/d/12gbQuhSyfMNoSMmSY5vLW8GQz7QJttmN/preview",  "https://drive.google.com/uc?id=12gbQuhSyfMNoSMmSY5vLW8GQz7QJttmN&export=download"],
                            ["Out of the past",             "https://drive.google.com/file/d/1gQPRNnh1QUGvfLaDJujC-YH1uXBaT0Uf/preview",  "https://drive.google.com/uc?id=1gQPRNnh1QUGvfLaDJujC-YH1uXBaT0Uf&export=download"],
                            ["Turning The Tides",           "https://drive.google.com/file/d/12K-ABB5paQuaccHyDEujA1Qa7tc-WJHp/preview",  "https://drive.google.com/uc?id=12K-ABB5paQuaccHyDEujA1Qa7tc-WJHp&export=download"],
                            ["Skeletons in the Closet",     "https://drive.google.com/file/d/1migJT9NwPD6Eai63AmsnOgbEuW-jSNkH/preview",  "https://drive.google.com/uc?id=1migJT9NwPD6Eai63AmsnOgbEuW-jSNkH&export=download"],
                            ["Endgame",                     "https://drive.google.com/file/d/19jy1KeJxbmkdgHGVpdcR1LSvVXTu-DAa/preview",  "https://drive.google.com/uc?id=19jy1KeJxbmkdgHGVpdcR1LSvVXTu-DAa&export=download"],
                        ],
                        
                        [
                            ["A New Spiritual Age",      "https://drive.google.com/file/d/1uwv5sqpF6WW36blNGbzF-bhOUFEAfZq0/preview", "https://drive.google.com/uc?id=1uwv5sqpF6WW36blNGbzF-bhOUFEAfZq0&export=download"],
                            ["Night of A Thousand stars","https://drive.google.com/file/d/1TFbD14oR-JNLWt9P843tEE1KHtVjOqV3/preview", "https://drive.google.com/uc?id=1TFbD14oR-JNLWt9P843tEE1KHtVjOqV3&export=download"],
                            ["Darkness Falls",           "https://drive.google.com/file/d/1R_j89DF2Y3sVW3TJfrVGFCG9DUF20B9G/preview", "https://drive.google.com/uc?id=1R_j89DF2Y3sVW3TJfrVGFCG9DUF20B9G&export=download"],
                            ["Harmonic Convergence",     "https://drive.google.com/file/d/1DQ_weiAMefazDM1OcvoPxjJSbMOsr-Jl/preview", "https://drive.google.com/uc?id=1DQ_weiAMefazDM1OcvoPxjJSbMOsr-Jl&export=download"],
                            ["Light In The Dark",        "https://drive.google.com/file/d/12tFuAO-mIKEIWJ-ojFL9YIKMeDcI642s/preview", "https://drive.google.com/uc?id=12tFuAO-mIKEIWJ-ojFL9YIKMeDcI642s&export=download"],
                            ["The Rebel spirit",         "https://drive.google.com/file/d/1ypqZ7J2gV7l0Hrm7hdWkdjJ3IwOgioZZ/preview", "https://drive.google.com/uc?id=1ypqZ7J2gV7l0Hrm7hdWkdjJ3IwOgioZZ&export=download"],
                            ["The Southern lights",      "https://drive.google.com/file/d/1lvMZlNxYIQsw37hiaS2yt_hyhtsANUis/preview", "https://drive.google.com/uc?id=1lvMZlNxYIQsw37hiaS2yt_hyhtsANUis&export=download"],
                            ["Civil Wars Part 1",        "https://drive.google.com/file/d/1PzzU7K6znuZyakv5cj9z3fLwYfN2LrN0/preview", "https://drive.google.com/uc?id=1PzzU7K6znuZyakv5cj9z3fLwYfN2LrN0&export=download"],
                            ["Civil Wars Part 2",        "https://drive.google.com/file/d/1hOP309txlGk_kJzUigAPlaFyAsE5b4rx/preview", "https://drive.google.com/uc?id=1hOP309txlGk_kJzUigAPlaFyAsE5b4rx&export=download"],
                            ["Peacekeepers",             "https://drive.google.com/file/d/1EF8Qfms2LRGim6N_GbxffHQ2-mZv5Xpr/preview", "https://drive.google.com/uc?id=1EF8Qfms2LRGim6N_GbxffHQ2-mZv5Xpr&export=download"],
                            ["The Sting",                "https://drive.google.com/file/d/1AHBd4uxmNkFTWVPUq9_S8594FvtCgk__/preview", "https://drive.google.com/uc?id=1AHBd4uxmNkFTWVPUq9_S8594FvtCgk__&export=download"],
                            ["The Beginnings Part 1",    "https://drive.google.com/file/d/1NKruxbF6oC56rp_WtaKkTwc1cueEGlmH/preview", "https://drive.google.com/uc?id=1NKruxbF6oC56rp_WtaKkTwc1cueEGlmH&export=download"],
                            ["The Beginnings Part 2",    "https://drive.google.com/file/d/19JMa6KOcfDb-OXI9P-SB3Q3z4OwGWT6Y/preview", "https://drive.google.com/uc?id=19JMa6KOcfDb-OXI9P-SB3Q3z4OwGWT6Y&export=download"],
                            ["The Guide",                "https://drive.google.com/file/d/1wrjrzfZRfKO_e6GN_ZyVIp-UCGrPsFwj/preview", "https://drive.google.com/uc?id=1wrjrzfZRfKO_e6GN_ZyVIp-UCGrPsFwj&export=download"],
                        ],
                        
                        [
                            ["A breath of fresh air",  "https://drive.google.com/file/d/1SgANwmZuHUPbDwV76RrgCggIsjWb7Gd6/preview", "https://drive.google.com/uc?id=1SgANwmZuHUPbDwV76RrgCggIsjWb7Gd6&export=download"],
                            ["Rebirth",                "https://drive.google.com/file/d/1yVqrUzw_IvS62_6-Fz95nhG8SqeDVxyt/preview", "https://drive.google.com/uc?id=1yVqrUzw_IvS62_6-Fz95nhG8SqeDVxyt&export=download"],
                            ["The earth Queen",        "https://drive.google.com/file/d/1dbhDyVaDo7xOdgwWVSUsmDsC5AGAAa0W/preview", "https://drive.google.com/uc?id=1dbhDyVaDo7xOdgwWVSUsmDsC5AGAAa0W&export=download"],
                            ["In Harms way",           "https://drive.google.com/file/d/13Xr2y6e73qe7Go34ySwUxkA904peA4Lv/preview", "https://drive.google.com/uc?id=13Xr2y6e73qe7Go34ySwUxkA904peA4Lv&export=download"],
                            ["The Metal clan",         "https://drive.google.com/file/d/1RTFomPDa58LAeRJQwU4NmZzL7_uU1__X/preview", "https://drive.google.com/uc?id=1RTFomPDa58LAeRJQwU4NmZzL7_uU1__X&export=download"],
                            ["Old Wounds",             "https://drive.google.com/file/d/1aCtjj8GYsDziQovesphUFIy2jmuj4-pf/preview", "https://drive.google.com/uc?id=1aCtjj8GYsDziQovesphUFIy2jmuj4-pf&export=download"],
                            ["Original Airbenders",    "https://drive.google.com/file/d/133HqUt5OVBlTpHfFEuUeUtlcF-ks4Ltf/preview", "https://drive.google.com/uc?id=133HqUt5OVBlTpHfFEuUeUtlcF-ks4Ltf&export=download"],
                            ["The Terror Within",      "https://drive.google.com/file/d/1B1VML0hWAjmHovRMnJDvr1NCl3HQ5HcF/preview", "https://drive.google.com/uc?id=1B1VML0hWAjmHovRMnJDvr1NCl3HQ5HcF&export=download"],
                            ["The Stakeout",           "https://drive.google.com/file/d/1a4KpJqfEkXT5XI-yI43AZkbwaLZiEd0k/preview", "https://drive.google.com/uc?id=1a4KpJqfEkXT5XI-yI43AZkbwaLZiEd0k&export=download"],
                            ["Long live The queen",    "https://drive.google.com/file/d/1syYJ8_XbgnSt62_5gD3a9u-PnfKiNvOj/preview", "https://drive.google.com/uc?id=1syYJ8_XbgnSt62_5gD3a9u-PnfKiNvOj&export=download"],
                            ["The Ultimatum",          "https://drive.google.com/file/d/1CSwiyBs1sHZvqhz-gASSFUlcy6ReO2qr/preview", "https://drive.google.com/uc?id=1CSwiyBs1sHZvqhz-gASSFUlcy6ReO2qr&export=download"],
                            ["Enter The Void",         "https://drive.google.com/file/d/1JJTNbvL6AiStbpDWjprsrdC0SzoP_W_q/preview", "https://drive.google.com/uc?id=1JJTNbvL6AiStbpDWjprsrdC0SzoP_W_q&export=download"],
                            ["Venom of the red lotus", "https://drive.google.com/file/d/1fkOoQnCwG27xL2fO32Ldex6LmhFkq5BQ/preview", "https://drive.google.com/uc?id=1fkOoQnCwG27xL2fO32Ldex6LmhFkq5BQ&export=download"],
                        ],
                        
                        [
                            ["Operation Beifong",      "https://drive.google.com/file/d/1Z14i2cQ4oZr3oFr-HiQyfn3AmC5xXFC1/preview", "https://drive.google.com/uc?id=1Z14i2cQ4oZr3oFr-HiQyfn3AmC5xXFC1&export=download"],
                            ["Kuviras Gambit",         "https://drive.google.com/file/d/1s_MSGjMMPasgWwR7OuuY-GVc32TBJ7nG/preview", "https://drive.google.com/uc?id=1s_MSGjMMPasgWwR7OuuY-GVc32TBJ7nG&export=download"],
                            ["Day of the Colossus",    "https://drive.google.com/file/d/15myzizBAaN2qXRZvHwlcN8DJD-zP0RUJ/preview", "https://drive.google.com/uc?id=15myzizBAaN2qXRZvHwlcN8DJD-zP0RUJ&export=download"],
                            ["The last Stand",         "https://drive.google.com/file/d/1wuWXogxjEndr3sXWu-zDukrwlN-UceA4/preview", "https://drive.google.com/uc?id=1wuWXogxjEndr3sXWu-zDukrwlN-UceA4&export=download"],
                            ["After All These Years",  "https://drive.google.com/file/d/1Kf1-S8mvwApX5bYxbP9w0aVi7JKRrINk/preview", "https://drive.google.com/uc?id=1Kf1-S8mvwApX5bYxbP9w0aVi7JKRrINk&export=download"],
                            ["Korra Alone",            "https://drive.google.com/file/d/166U2d34F6x4B-0QfW4zT3ycrFldOm99h/preview", "https://drive.google.com/uc?id=166U2d34F6x4B-0QfW4zT3ycrFldOm99h&export=download"],
                            ["The Coronation",         "https://drive.google.com/file/d/1R9XfRUqO0Y1CwESBknOARZ6wTrSjOLYf/preview", "https://drive.google.com/uc?id=1R9XfRUqO0Y1CwESBknOARZ6wTrSjOLYf&export=download"],
                            ["The Calling",            "https://drive.google.com/file/d/1sQlt5xB4vrkVTFWDjHwRbuSnlJp-8OTh/preview", "https://drive.google.com/uc?id=1sQlt5xB4vrkVTFWDjHwRbuSnlJp-8OTh&export=download"],
                            ["Enemy At the Gates",     "https://drive.google.com/file/d/1xyVk1iD59BC0OAx0wAH8oUUPEjNd6kXy/preview", "https://drive.google.com/uc?id=1xyVk1iD59BC0OAx0wAH8oUUPEjNd6kXy&export=download"],
                            ["Battle of Zoafu",        "https://drive.google.com/file/d/1db_4PYS2t7DVVo0BJVUpmcWtuGPjRxvF/preview", "https://drive.google.com/uc?id=1db_4PYS2t7DVVo0BJVUpmcWtuGPjRxvF&export=download"],
                            ["The Reunion",            "https://drive.google.com/file/d/1V0Q3B5JFajoolEtq7cLeQPHSZRkPIUzh/preview", "https://drive.google.com/uc?id=1V0Q3B5JFajoolEtq7cLeQPHSZRkPIUzh&export=download"],
                            ["The Rememberances",      "https://drive.google.com/file/d/1Rv0PkY5uA4R0kGro5Yh_PzLh9hsQbe1c/preview", "https://drive.google.com/uc?id=1Rv0PkY5uA4R0kGro5Yh_PzLh9hsQbe1c&export=download"],
                            ["Beyond The Wilds",       "https://drive.google.com/file/d/1T0ZBrQSPyXnie3VWKR36etyiAaMOUbr-/preview", "https://drive.google.com/uc?id=1T0ZBrQSPyXnie3VWKR36etyiAaMOUbr-&export=download"],
                        ]
                    ]
                ]
            ],
            
        }   
    
        return series
    }

    moviesObject = storeMoviesContent();
    seriesObject = storeSeriesContent();

    localStorage.setItem("movies_object", JSON.stringify(moviesObject));
    localStorage.setItem("series_object", JSON.stringify(seriesObject));
    
    // let failed = document.getElementById("failed");
    // failed.style.display = "none";
    let item_title = undefined;
    let item_src = undefined;
    let item_image = undefined;
    let item_iframe = undefined;
    let item_download = undefined;
    
    
    //Decrypt the content
    //Get the searched value
    let urlValue = new URL(window.location.href);
    urlValue = urlValue.searchParams.get("searchValue");
    
    var encryptedText = urlValue ?? "default value";
    
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutedAlphabet = "zyxwvutsrqponmlkjihgfedcba"; // Reversed alphabet for this example
    
    // Decryption function
    function decrypt(encryptedText) {
        return encryptedText
            .split("")     // Split text into individual characters
            .map(char => {
                // Find the index of the character in the substituted alphabet
                const index = substitutedAlphabet.indexOf(char);
                // Replace with the corresponding character in the original alphabet
                return index !== -1 ? originalAlphabet[index] : char; // Keep non-alphabet characters as is
            })
            .join("");     // Rejoin the decrypted characters into a string
    }
    
    var decryptedText = decrypt(encryptedText);
    
    
    //function to store the movies and series in an array
    
    // function to sort the content array and get what we want
    function getContent(text, anObject, aSeriesObject)
    {
    
        //Check of the movie
        if (anObject[text])
            {
                for(let item = 0; item < Object.keys(anObject).length - 1; item++)
                {
                // Filter its contents
                    for (let i = item; i < Object.values(anObject).length; i++)
                    {
                        //Display all the element
                        for (let j = 0; j < 5; j++)
                        {
                                if (j === 0)
                            {
                                item_title = anObject[text][i][j];
                            }
                            if (j === 1)
                            {
                                item_src = anObject[text][i][j];
                            }
                            if (j === 2)
                            {
                                item_image = anObject[text][i][j];
                            }
                            if (j === 3)
                            {
                                item_iframe = anObject[text][i][j];
                            }
                            if (j === 4)
                            {
                                item_download = anObject[text][i][j];
                            }                 
                        }
                        displayHtml(item_title , item_src, item_image, item_iframe, item_download); 
                        
                    }
            
            }
        }
        else if (aSeriesObject[text])
        {
            for(let item = 0; item < Object.keys(aSeriesObject).length; item++)
            {  
                if(aSeriesObject[text])
                {
                    for (let m = item; m < Object.values(aSeriesObject).length; m++)
                    {
                        
                        //Access items inside the serie
                        for (let n = 0; n < 4; n++)
                        {
                            if (n === 0 )
                            {
                                serie_Title = aSeriesObject[text][m][n]
                        
                            }
                            if (n === 1 )
                            {
                                serie_Source = aSeriesObject[text][m][n]
                        
                            }
                            if (n === 2 )
                            {
                                serie_Image = aSeriesObject[text][m][n]
                        
                            }
                            if (n === 3 )
                            {
                                serie_Information = aSeriesObject[text][m][n]
                        
                            }
                        }
                        serieFunctionHtml(serie_Title, serie_Source, serie_Image, serie_Information) 
                    }
                }
             }
        }
        else
        {            
            console.log(`No value for ${text} found in the library. Try again or contact the developer for any suggestions via the contact page...`);
        }
                    
    }
    
    getContent(decryptedText, moviesObject, seriesObject);
    
    function displayHtml(title, source, image, iframe, download)
    {
        const divElement = document.getElementById("results-container");
    
        // Create a link tag
        link_elment = document.createElement("a");
        link_elment.id = "result_link";
        link_elment.className = "link";
        link_elment.setAttribute("href", `${source}`);
    
        divElement.appendChild(link_elment);
    
        // create an image element
        image_element = document.createElement("img");
        image_element.className = "movie_image";
        image_element.setAttribute("alt", `${title}`);
        image_element.setAttribute("src", `${image}`);
    
        //create an image holder
        divHolder = document.createElement("div");
        divHolder.className = "movie_image_holder";
    
        divHolder.appendChild(image_element);
        link_elment.appendChild(divHolder);
    
        //create a paragrapgh for the movie name
        p_tag = document.createElement("p");
        p_tag.className = "movie_name";
        p_tag.textContent = `${title}`
    
        link_elment.appendChild(p_tag);
    
        //Get the iframe and download links and store them in an iframe element
        localStorage.setItem("movie_title", `${title}`)
        localStorage.setItem("iframe_link", `${iframe}`);
        localStorage.setItem("download_link", `${download}`);
    }
    
    function serieFunctionHtml(title, source, image, info) 
    {
        const divElement = document.getElementById("results-container");
    
        // Create a link tag
        link_elment = document.createElement("a");
        link_elment.id = "result_link";
        link_elment.className = "link";
        link_elment.setAttribute("href", `${source}`);
    
        divElement.appendChild(link_elment);
    
        // create an image element
        image_element = document.createElement("img");
        image_element.className = "movie_image";
        image_element.setAttribute("alt", `${title}`);
        image_element.setAttribute("src", `${image}`);
    
        //create an image holder
        divHolder = document.createElement("div");
        divHolder.className = "movie_image_holder";
    
        divHolder.appendChild(image_element);
        link_elment.appendChild(divHolder);
    
        //create a paragrapgh for the movie name
        p_tag = document.createElement("p");
        p_tag.className = "movie_name";
        p_tag.textContent = `${title}`
    
        link_elment.appendChild(p_tag);
    
        localStorage.setItem("serie_titles", `${title}`);
        localStorage.setItem("serie_info", JSON.stringify(info));
    }
       

}
catch (error)
{
    console.log("All errors handled:", error);
}