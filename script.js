let buttons = Array.from(document.getElementsByClassName("button"))
let display = document.getElementById("display")

function CheckIfMalicious(e) {
    try{
        display.innerText = Function( "return " + e)();
    } catch { display.innerText = "Error"}
}
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "=":
                CheckIfMalicious(display.innerText)
                break;
            case "C":
                 display.innerText =""
                 break;
            default:
                console.log("clicked")
                display.innerText += e.target.innerText;
                break;
        }
    })
})