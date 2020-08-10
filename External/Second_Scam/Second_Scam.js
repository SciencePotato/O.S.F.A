com = [" Totally FREE and legit service ", " I Got 100$ Worth of My V-Bucks ", " I used once and never have to use it again ", " I'm Glad I found this website ", " This is the only one hack that actually works " , " If you found this website you're LUCKY", " I wish I found this early ", " Now I can be John Wick Too! ", " 10/10 Will use again "];
names = [" Frozacky "," TacoScience "," Jlbopp "," HueSoul "," MonkayMonkay ", " JerSt "," Blyzuard "," Trump "," JohnWickFromFortnite ", " FameTime ", " Pewdiepie ", " Rotmg ", " RocketMan "];

comments = document.getElementById("usercomments");
usernames = document.getElementById("usernames");


Scam = () =>{
    event.preventDefault(); 
    accname = document.getElementById("user");
    accpass = document.getElementById("pass");

    if(accname.value != "" && accpass.value != ""){
        alert(" Boo Boo!!! This is the wrong thing to do. They now have your account for example, here, Your username is " + accname.value + " and your Password is " + accpass.value + " Easiest way to not get scammed is just not go to any shady website like this one nor trust any user comments on small name websites.");
    }
    accname = document.getElementById("user").value = "";
    accpass = document.getElementById("pass").value = "";
};


initialization = () => { 
    setInterval(() => {
        var Val1 = Math.floor(Math.random() * com.length);
        var Val2 = Math.floor(Math.random() * names.length);
        comments.innerHTML = com[Val1];
        usernames.innerHTML = " - " + names[Val2];
    }, 5000);

}
