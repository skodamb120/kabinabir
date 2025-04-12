var navBarOpened = false

function onClick() {
    const lang = document.documentElement.lang
    if (lang == "cs") {
        window.location.replace("../en/index.html")
        document.getElementById("flag").src = "../images/Flag_of_the_Czech_Republic.png"
        return
    }
    window.location.replace("../cz/index.html")
    document.getElementById("flag").src = "../images/Flag_of_the_United_Kingdom.svg.png"

    
    
}


function displayNav(){
    

    var r = document.querySelector("nav");

    if (r != null) {
        
        if (navBarOpened == true){

            // hiding navigation bar

            r.style.setProperty("display", "none")
            navBarOpened = false;
            return
        }

        // displaying navigation bar

        r.style.setProperty("display", "grid");
        navBarOpened = true;
}

}