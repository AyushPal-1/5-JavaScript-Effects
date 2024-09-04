
let arr = [
    {
        dp: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",story: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI="
    },

    {
        dp: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",story: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI="
    },
    {
        dp: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",story: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI="
    },
    {
        dp: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI=",story: "https://media.istockphoto.com/id/1014791354/photo/charming-man.jpg?s=612x612&w=0&k=20&c=kbO93sVBzt2ixm7e0SN-kOEOb5GmAVlhn5QRfVxuQkI="
    }
]
let storyan = document.querySelector("#storyan")
let clutter = ""
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
   </div>`
})
storyan.innerHTML = clutter
storyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setInterval(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000);
})

