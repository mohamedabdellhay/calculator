


let display = document.getElementById("display");
console.log(display)

function addToDisplay(e){
    display.innerHTML += e;
}

function clearDisplay(){
    display.innerHTML = "";
}

function calculate(event){
    let numbers = display.innerText.trim().replace(/÷/g, "/");
    if(numbers.length < 1){
        event.preventDefault();
        return;
    }
    // console.log(numbers[(numbers.length)-1])
    if(!/[0-9]/.test(numbers[(numbers.length)-1])){
        event.preventDefault();
        return;
    }
    display.innerHTML = eval(numbers);
}


const closeTab = () => {
    document.body.innerHTML = "Bye";
    setTimeout(()=>{
        window.close(``, `_parent`, ``);
    }, 2000)
}




