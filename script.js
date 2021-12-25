function change(element) {
    var a = element.innerHTML;
    switch (a) {
        case "1":
            document.getElementById("pit").innerHTML = "Buy and download music.";
            break;
        case "2":
            document.getElementById("pit").innerHTML = "Check some music-topics on forum.";
            break;
        case "3":
            document.getElementById("pit").innerHTML = "Listen cool and impressive music.";
            break;
    }
}