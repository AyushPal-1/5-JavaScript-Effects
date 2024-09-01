let con = document.querySelector("#container")
let icon = document.querySelector("i")

con.addEventListener("dblclick", function(){
    icon.style.transform = "translate(-50%, -50%) scale(1.5)";
    icon.style.opacity = 0.8
    setInterval(function() {
        icon.style.opacity = 0      
    }, 1000);
    setInterval(function() {
        icon.style.transform = "translate(-50%, -50%) scale(1.5)";
        
    }, 2000);
})