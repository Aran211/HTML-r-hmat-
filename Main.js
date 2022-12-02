function Menu() {
    var x = document.getElementById("myTopnav"); //muutuja
    if (x.className === "topnav") { //kui klassinimi ülemine riba
    x.className += " responsive"; // liidab juurde ehk näitab et aktiivne ehk hoverib peal
    } else { //vastasel juhul
    x.className = "topnav"; // lihtsalt on seal, kui ple aktiivne
    }
}


