let elem = document.querySelectorAll(".elem")


// let elem1Img = document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove", function(dets){
//     elem1Img.style.left = dets.x+"px"
//     elem1Img.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter", function(dets){
//     elem1Img.style.opacity = 1
// })
// elem1.addEventListener("mouseleave", function(dets){
//     elem1Img.style.opacity = 0
// })

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function(){
       val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
    });
});