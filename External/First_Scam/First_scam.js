SrtSim = () =>{
    AudioScam = document.getElementById("Audio");
    AudioScam.loop = true;
    AudioScam.load();
    AudioScam.play();
    scamtext();
    // setInterval(function () {
    //     var flash = document.getElementById("phone");
    //     var val1 = Math.round(Math.random() * 255);
    //     var val2 = Math.round(Math.random() * 255);
    //     var val3 = Math.round(Math.random() * 255);
    //     flash.style.color = "rgb("  + val1 + "," + val2 + "," + val3 + ");";
    // }, 1000);
}

scamtext = () => {
    txt = document.getElementById("scams");

    for (var x = 0; x < 25; x++){
        var text = document.createElement("div");
        text.style.color = "rgba(0, 255, 68 , 1)";
        text.style.fontSize = "25px";
        text.style.width = "250%";
        for(var i = 0; i < 40; i ++){
                text.innerHTML += " ERROR  DATA CORRUPTED";
            }
        txt.appendChild(text);
    }
}
Scammed = () => {
    alert(" You Just Got Scammed! But Lucky this was Just a Simulation. A Good tip is that You never click on these type of flashy looking websites. Microsoft or any offical will never contact you! To solve this, you just simply close the tab.");
}