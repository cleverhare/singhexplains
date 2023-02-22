const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
        let singhlogo = document.querySelector('.singhlogo')
        singhlogo.style.filter = "invert(1)"
    }else{
        localStorage.setItem("mode", "light");
        let singhlogo = document.querySelector('.singhlogo')
        singhlogo.style.filter = "invert(0)"
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
        let singhlogo = document.querySelector('.singhlogo')
        singhlogo.style.width = "50px"
        singhlogo.src = "../views/images/se.png"
    }else{
        localStorage.setItem("status", "open");
        let singhlogo = document.querySelector('.singhlogo')
        singhlogo.style.width = "190px"
        singhlogo.src = "../views/images/SinghExplains.png"
    }
})
