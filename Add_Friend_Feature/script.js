let istatus = document.querySelector("h5")
let add = document.querySelector("#add")
let flag = 0
add.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        flag = 1
        
    }
    else{
        
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        add.innerHTML = "Add Friend"
        flag = 0
    }

})
