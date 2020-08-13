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
    document.getElementById("otherblob").style.visibility = "visible";
    document.getElementById("information").style.overflowy = "scroll";
    document.getElementById("whatisit").innerHTML = "What is O.S.F.A?";
    document.getElementById("whatisit2").innerHTML = "We are O.S.F.A , Online Safety For All, our goal with this website is to educated you the reader regarding the most classic scams.";
    
}
secondchange = () => {
    ExtLink.href = "External/First_Scam/First_scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Fake Website Scam";
    document.getElementById("videos").src = "vids/FakeWeb.mp4";
    document.getElementById("otherblob").style.visibility = "hidden";
    document.getElementById("whatisit").innerHTML = "What are 'Fake websites'?";
    document.getElementById("whatisit2").innerHTML = "Fake websites are really popular even to this day. The website itself tries to immitate Microsoft or other branded offical to scare the users. By doing that they give the user a false sense of threat and lure you into a scam. You could simply ignore these type of website, a good thing to know is Microsoft will never contact you through website nor will they alert if your computer get infected by virus. So whenever you see this type of fishing website you basically just close the tab out and continue on with your day.";

}
thirdchange = () => {
    ExtLink.href = "External/Second_Scam/Second_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Fake Giveaway Scam";
    document.getElementById("videos").src = "vids/FakeGive2.mp4";
    document.getElementById("otherblob").style.visibility = "hidden";
    document.getElementById("whatisit").innerHTML = "What are 'Fake giveaways'?";
    document.getElementById("whatisit2").innerHTML = "Fake Currency giveaways is really coming due to the rising of game called 'Fortnite'. This game basically created the trend of fake game currency giveaway, they usually use this to target young kids who doesn't know any better. A good thing to know is that free stuff are at a cost, it's your account and information at this case. Just basically don't try to get free currency and you'll be fine. Even if you're on the side you can basically close the site and that'll be fine.";

}
fourthchange = () => {
    ExtLink.href = "External/Third_Scam/Third_Scam.html";
    document.getElementById("ExWeb").style.display = "block";
    document.getElementById("infohead").innerHTML = " Whale Scam";
    document.getElementById("videos").src = "vids/FakeMail.mp4";
    document.getElementById("otherblob").style.visibility = "hidden";
    document.getElementById("whatisit").innerHTML = "What are 'Whale Scams'?";
    document.getElementById("whatisit2").innerHTML = "Whale scams are series of scam where an individual threatens you to do something and that task gets progressively harder and harder. They threaten you by revealing where you generally live to force you to do their deed.";

}
(function () {
    $(window).scroll(function() {
        var a = $(this).scrollTop() + $(this).innerHeight();
        $(".effect").each(function() { // container must have class name effect to work
            var b = $(this).offset().top;
            if (a > b && $(this).css("opacity") == 0) {
                $(this).css("transform", "none");
                $(this).animate({
                    "opacity": 1
                }, 750);
            }
        });
    }).scroll();
})();
