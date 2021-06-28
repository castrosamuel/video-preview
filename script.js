console.log("page loaded...");

document.querySelector("#myVid").muted = true;
function startVideo(element){
    element.play()
}

function pauseVideo(element){
    element.pause()
}