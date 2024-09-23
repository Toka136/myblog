// Scroll to top button
let button_up=document.querySelector(".button-show");

let container=document.querySelector(".container");
window.onscroll=function()
{
    let top=container.offsetTop;
    //when container class started
    if(window.scrollY >= top - 100)
    {
        button_up.classList.add("show-button");
    }
    else
    {
        button_up.classList.remove("show-button");
    }
}
button_up.onclick=function()
{
    // Make Window scroll to top of page
    window.scrollTo(window.top)
}