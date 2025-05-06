const gallery = ['../images/0_watermarked.jpg',
                 '../images/1.jpg',
                 '../images/2.jpg',
                '../images/HPIM1155.JPG'];
var index = 0;

function open_gallery(){
    document.getElementById("gallery").style.display = 'flex';
    document.getElementById("img-count").innerHTML = `${index + 1} / ${gallery.length}`;
}

function close_gallery(){
    document.getElementById("gallery").style.display = 'none';
}

function change_img(direction){
    next_img = (direction + index + gallery.length) % gallery.length
    index = next_img
    document.getElementById("gallery-img").src = gallery[index]
    document.getElementById("img-count").innerHTML = `${index + 1} / ${gallery.length}`;
}

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
