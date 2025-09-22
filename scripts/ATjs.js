

let lasty = window.screenY;

const map = document.getElementById("ATmap");
const trail = document.getElementById("ATmapLine");
const trailLine = document.getElementById("trail");
const trailLength = trailLine.getTotalLength();
const viewportHight =  document.body.offsetHeight;
const totalHight = document.documentElement.scrollHeight;

function setInitialTrailValue(){
    trail.setAttribute("style", `stroke-dasharray: ${trailLength}; stroke-dashoffset: ${trailLength}`);
}

/*takes in the y position of the screen and determines how far the image should scroll*/
function calculateMapPlace(scrollY,forTrailLength){
    const modifier = 200 //min display in px
    const rate = -1.15;
    if (forTrailLength){
        return (rate * scrollY);
    } else {
        return ((rate * scrollY) + modifier)
    }

}


function adjustMapAndTrailHeight(){

    console.log(`screeny : ${window.scrollY}`);
    map.setAttribute("style", `bottom: ${calculateMapPlace(window.scrollY,false)}px`);
    trail.setAttribute("style", `bottom: ${calculateMapPlace(window.scrollY,false)}px; stroke-dasharray: ${trailLength}; stroke-dashoffset: ${(trailLength +( -.33 * window.scrollY))}; `);

}

function smoother(){
    requestAnimationFrame(adjustMapAndTrailHeight)
}
document.addEventListener("scroll",smoother);
setInitialTrailValue();