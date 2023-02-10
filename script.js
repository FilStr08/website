function openNav() {
    const sideBarWidth = document.getElementById("mySidebar").style.width;
   
    if (!sideBarWidth || sideBarWidth == "0px") {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        let header = document.querySelector("h2");
        header.innerText = "Close Sidebar";
    } else if (sideBarWidth !== "0px") {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        let header = document.querySelector("h2");
        header.innerText = "Open Sidebar";
    }
}

