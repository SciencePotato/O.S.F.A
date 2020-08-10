let progress = document.getElementById("progress");
let Height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY/ Height) * 100;
    progress.style.width = progressHeight + '%';
}
let ExtLink = document.getElementById("EXP");

Initial = () =>{
    PageVal = 0;
    document.getElementById("ExWeb").style.display = "none";
}

firstchange = () => {
    ExtLink.href = "";
    document.getElementById("ExWeb").style.display = "none";
}
secondchange = () => {
    ExtLink.href = "External/First_Scam/First_scam.html";
    document.getElementById("ExWeb").style.display = "block";
}
thirdchange = () => {
    ExtLink.href = "External/Second_Scam/Second_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
}
fourthchange = () => {
    ExtLink.href = "External/Third_Scam/Third_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
}
