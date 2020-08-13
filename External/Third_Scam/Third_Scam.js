firstname = ["Kevin", "Jason","Hao","Jeremy","Mattew","James","Jessica","Sara","Sarah","Rebecca","Jessie","Ruby","Nancy","Candy","Andy","Rowdy","Sean","Shawn","Edmund","Stewie","Patrick","Spongebob"];
lastname = ["Chen","Lin","Dick","Smith","McDonald","Zhu","Uddin"];
addon = ["","I","II","III","IV","Jr.","V","VI","VII","VIII","IX","X"];
imageslink = ["images/Profile.png","images/Profile2.png","images/Profile3.png","images/Profile4.png"]
decline = false;
times = 0;


start = () =>{
    sidebar = document.getElementById("people");
    notification = document.getElementById("random");
    for( var i = 0; i < 20; i++){
        var people = document.createElement("div");
        var pfp = document.createElement("img");
        for(var x = 0; x < 3; x++){
            var mainstuff = document.createElement("div");
            var mainimage = document.createElement("img");
            var mainname = document.createElement("paragraph");
            var maininfo = document.createElement("paragraph");
            var rndVal = Math.ceil(Math.random() * 2);
            var first = Math.floor(Math.random() * firstname.length);
            var last = Math.floor(Math.random() * lastname.length);
            var add = Math.floor(Math.random() * addon.length)
            mainname.innerHTML = innerHTML = firstname[first] + lastname[last] + addon[add] + "@email.com" ;
            mainname.innerHTML = mainname.innerHTML.toLowerCase();
            mainname.style.paddingLeft = "50px";
            mainname.style.fontSize = "20px";
            mainstuff.onclick = () =>{
                document.getElementById("boxback").style.display = "block";
            };
            if (rndVal == 1){
                mainstuff.style.backgroundColor = "rgba(0,0,0,0.2)";
                mainimage.src = "images/Email2.png"
            }else{
                mainstuff.style.backgroundColor = "rgba(0,0,0,0.3)"
                mainimage.src = "images/Email.png"
            }
            mainstuff.classList.add("apple");
            mainstuff.style.height = "50px";
            mainstuff.style.textAlign = "left";
            mainstuff.style.fontSize = "10px";
            mainstuff.style.borderBottom = "solid 1px black";
            mainstuff.setAttribute("class","backgroundtext");
            mainstuff.appendChild(mainimage);
            mainstuff.appendChild(mainname);
            mainstuff.appendChild(maininfo);
            notification.appendChild(mainstuff);
        }
        
        var images = Math.floor(Math.random() * imageslink.length);
        pfp.src = imageslink[images];
        pfp.style.borderRadius = "15px";
        var first = Math.floor(Math.random() * firstname.length);
        var last = Math.floor(Math.random() * lastname.length);
        var add = Math.floor(Math.random() * addon.length);
        
        people.innerHTML = firstname[first] + " " + lastname[last] + " " + addon[add] + " ";
        people.style.padding = "20px 10px";
        people.style.fontSize = "20px"; 
        sidebar.appendChild(people);
        sidebar.appendChild(pfp);
    }   
    textarea = document.getElementById("box");
    var scam = document.createElement("div");  
    scam.innerHTML =    "Anoymonous : Listen to me or you'll die";
    scam.style.backgroundColor = "white";
    scam.style.paddingLeft = "20px";
    scam.style.marginTop = "-50px";
    scam.style.paddingTop = "10px";
    scam.style.width = "50%";
    scam.style.paddingBottom = "10px";
    scam.style.marginLeft ="2%";
    scam.style.borderRadius = "10px";
    scam.setAttribute("class","replysize");
    
    textarea.appendChild(scam);
}

eviltalk = ["Give me 100$ And I'll let you go","You thought, I'll scam you more","What can you say, I'm evil"];
yourtalk = ["Oh No what do you want","Okay I will do that Please let me go","You fat liar!!"];

Agree = () =>{
    if(decline == false){
        if(times <= 3){
            textarea = document.getElementById("box");
            var scam = document.createElement("div"); 
            var yourreply = document.createElement("div");
            yourreply.innerHTML = "You : " + yourtalk[times]; 
            yourreply.style.paddingLeft = "20px";
            yourreply.style.marginTop = "50px";
            yourreply.style.paddingTop = "10px";
            yourreply.style.width = "50%";
            yourreply.style.marginLeft ="46.5%";
            yourreply.style.borderRadius = "10px";
            yourreply.style.backgroundColor = "white";
            yourreply.style.paddingBottom = "10px";
            yourreply.setAttribute("class","replysize");
            scam.innerHTML = "Anonymous : " + eviltalk[times];
            scam.style.backgroundColor = "white";
            scam.style.paddingLeft = "20px";
            scam.style.marginTop = "50px";
            scam.style.paddingTop = "10px";
            scam.style.width = "50%";
            scam.style.marginLeft ="2%";
            scam.style.borderRadius = "10px";
            scam.style.paddingBottom = "10px";
            scam.setAttribute("class","replysize");
            textarea.appendChild(yourreply);
            textarea.appendChild(scam);
            times++;  
        } 
        if(times == 3){
            setTimeout(() => {
                times++;
               alert("You Just got scammed, Lucky this is a simulation. For these type of Email you should just ignore them and report them to the authorities. Most of them are fake ");
            }, 1);
        }
    }
}
Disagree = () =>{
    decline = true;
    if(times < 3){
        alert("That was the correct thing to do. These type of scam usually will pressure you to do stuff for them, if you do it once they'll as you once more and that process repeats.");
    }
}