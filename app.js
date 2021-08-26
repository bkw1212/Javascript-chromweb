const title = document.querySelector("div.hello:first-child h1");


function handleMouseEnter(){
    title.innerText = "Mouse is here!";
    title.style.color = "blue";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
    title.style.color = "green";
}

function handleWindowResize(){
    title.innerText = "You just resized!";
    title.style.color = "red";
}

function handleRightClick(){
    title.innerText = "That was right click!";
    title.style.color = "indigo";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleRightClick);
