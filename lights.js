// let onClick=()=>{   
function trafficLights() {
    let redLight = document.querySelector(".red-light")
    let yellowLight = document.querySelector(".yellow-light")
    let greenLight = document.querySelector(".green-light")

    // let btn = document.querySelector(".buttons button")
    let state = 0

    function resetLights() {
        redLight.style.backgroundColor = "#444";
        yellowLight.style.backgroundColor = "#444";
        greenLight.style.backgroundColor = "#444";
    }

    // btn.addEventListener("click", function () {
    function changeLight() {
        resetLights();

        if(state == 0){
            redLight.style.backgroundColor = "#e01f1f";
            // btn.innerText = "Next: Yellow";
            state = 1;
        } 
        else if (state === 1) {
            yellowLight.style.backgroundColor = "#d3ed13";
            // btn.innerText = "Next: Green";
            state = 2;
        } 
        else {
            greenLight.style.backgroundColor = "#55e245";
            // btn.innerText = "Next: Red";
            state = 0;
        }
    }
    changeLight();

    setInterval(changeLight, 2000)
}

trafficLights()