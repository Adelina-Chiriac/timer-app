const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
// Fill the circle length by using the calculated perimeter
circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log("Timer has started!");
    },
    onTick() {
        circle.setAttribute("stroke-dashoffset", currentOffset);
        currentOffset = currentOffset - 1;
        console.log("Timer ticked");
    }, 
    onComplete() {
        console.log("Timer has reached 0!");
    }
});

