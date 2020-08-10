let progress = document.getElementById("progress");
let Height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY/ Height) * 100;
    progress.style.width = progressHeight + '%';
}


Initial = () =>{
}