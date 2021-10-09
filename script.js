const menulist = document.getElementById("menu-list")
menulist.style.maxHeight = "0px"

function clickmenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "120px"
    }
    else{
        menulist.style.maxHeight = "0px"
    }
}