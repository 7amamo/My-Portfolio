let header = document.querySelector("header")

window.onscroll = function(){
    if(this.scrollY >= 50){
        header.classList.add("active")
    }else{
        header.classList.remove("active")

    }
}

let navLinks = document.getElementById("links");
function openCloseMenu(){
    navLinks.classList.toggle("active")
}