var tablinks = document.getElementsByClassName("tab-1");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("tab-2");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("tab-2");
    document.getElementById(tabname).classList.add("active-tab")
}

// side menu 
var sideme=document.getElementById("sidemenu");
function openmenu(){
sideme.style.right="0";
}
function closemenu(){
sideme.style.right="-200px";
}

// dark mode 
var icon=document.getElementById("icon");
icon.onclick =function(){
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
  icon.src = "img/moon.png";
}
else{
  icon.src = "img/sun.png";
}
}
