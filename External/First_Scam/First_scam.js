SrtSim = () =>{
    AudioScam = document.getElementById("Audio");
    AudioScam.loop = true;
    AudioScam.load();
    AudioScam.play();
    scamtext();
}

scamtext = () => {
    txt = document.getElementById("scams");

    for (var x = 0; x < 25; x++){
        var text = document.createElement("div");
        text.style.color = "rgba(0, 255, 68 , 1)";
        text.style.fontSize = "22px";
        text.style.width = "250%";
        for(var i = 0; i < 45; i ++){
            text.innerHTML += " ERROR  DATA CORRUPTED";
        }
        txt.appendChild(text);
    }
}
Scammed = () => {
    alert("You Just Got Scammed! But Lucky this was Just a Simulation. A Good tip is that You never click on these type of flashy looking websites. Microsoft or any offical company will never contact through a website! To solve this, you just simply close the tab.");
}