let progress = document.getElementById("progress");
let Height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY/ Height) * 100;
    progress.style.width = progressHeight + '%';
}
let ExtLink = document.getElementById("EXP");

Initial = () =>{
    document.getElementById("ExWeb").style.display = "none";
}

firstchange = () => {
    ExtLink.href = "";
    document.getElementById("ExWeb").style.display = "none";
    document.getElementById("infohead").innerHTML = "Introduction";
    document.getElementById("videos").src = "vids/Overall.mp4";
    
}
secondchange = () => {
    ExtLink.href = "External/First_Scam/First_scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Fake Website Scam";
    document.getElementById("videos").src = "vids/FakeWeb.mp4";

}
thirdchange = () => {
    ExtLink.href = "External/Second_Scam/Second_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Fake Giveaway Scam";
    document.getElementById("videos").src = "vids/FakeGive2.mp4";

}
fourthchange = () => {
    ExtLink.href = "External/Third_Scam/Third_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Whale Scam";
    document.getElementById("videos").src = "vids/FakeMail.mp4";

}
