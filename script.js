const translationByID = [
    ["home", "p", "Design project for relaxation and technical enthusiasts", "Designový projekt pro relaxaci a technické nadšence"],
    ["home", "a", "View functions", "Prozkoumat Funkce"],
    ["about", "h2", "About project", "O projekte"],
    ["about", "p", "The author offers this project and documentation under contractual terms for the purposes of versatile use, primarily for relaxation. It is suitable for individuals or groups with an interest in design or technically oriented control.", "Autor nabízí tento projekt a dokumentaci za smluvních podmínek pro účely mnohostranného využití, především pro relaxaci. Je vhodný pro jednotlivce nebo skupiny s zájmem o design nebo technicky zaměřené ovládání."],
    ["features", "h2", "Functions and features", "Funkce a vlastnosti"],
    ["contact", "h2", "Contact us", "Kontaktujte nás"],
    ["0", "h3", "Controls", "Ovládaní"],
    ["0", "p", "Rotation, tilt in both directions and lid opening", "Otáčení, náklon v obou směrech a otevírání víka"],
    ["1", "h3", "Electric system", "Elektrický systém"],
    ["1", "p", "Supports 12V, 24V and 220V mains power", "Podpora napětí 12 V, 24 V a napájení ze sítě 220 V"],
    ["2", "h3", "Interior equipment" ,"Vnitřní vybavení"],
    ["2", "p", "External circuits, camera system, monitors, ventilation and air conditioning option", "Externí obvody, kamerový systém, monitory, ventilace a možnost klimatizace"],
    ["-1", "h3", "Design exponent", "Designový exponát"],
    ["-1", "p", "Possibility of display in appropriate public spaces", "Možnost vystavení v odpovídajících veřejných prostorách"],
    ["3.1", "strong", "Phone number:", "Telefon:"],
];

var translated = false

function onClick() {
    for (i = 0; i < translationByID.length; i++){
        var id = translationByID[i][0]
        var tag = translationByID[i][1]
        if (!translated) {
            document.getElementById(id).querySelector(tag).innerHTML = translationByID[i][2]
        }
        else {
            document.getElementById(id).querySelector(tag).innerHTML = translationByID[i][3]
        }
    }
    if (!translated) {
        translated = true
        changeFlag("česká")
        document.getElementById("3.3").innerHTML = "<strong>Note: </strong>Please only SMS"
    } else {
        translated = false
        changeFlag("550567")
        document.getElementById("3.3").innerHTML = "<strong>Poznámka: </strong>Prosím pouze přes SMS"
    }
}

function changeFlag(path) {
    const flagElement = document.getElementById("flag");
    if (path === "česká") {
        flagElement.src = "images/Flag_of_the_Czech_Republic.png";
    } else {
        flagElement.src = "images/Flag_of_the_United_Kingdom.svg.png";
    }
}


function displayNav(){
    return null;
}
    