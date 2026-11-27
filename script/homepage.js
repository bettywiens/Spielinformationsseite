let closeSidemenu;
let openSidemenu;
let sidemenu;
let filter;

let sidemenuOpen = false;

closeSidemenu = document.getElementById("close_sidemenu");
openSidemenu = document.getElementById("openSidemenu");
sidemenu = document.getElementById("sidemenu");
filter = document.getElementById("filter");



function checkmenu()
{
    if (!sidemenuOpen)
    {
        sidemenu.style.visibility = "hidden";
        filter.style.visibility = "hidden";
    } else
    {
        sidemenu.style.visibility = "visible";
        filter.style.visibility = "visible";
    }
}


openSidemenu.addEventListener("click", function()
{
    sidemenuOpen = true;
    checkmenu();
})

closeSidemenu.addEventListener("click", function()
{
    sidemenuOpen = false;
    checkmenu();
})

link.addEventListener("click", function()
{
    console.log("hier");
})