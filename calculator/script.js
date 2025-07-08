function appendValue(value){
    document.getElementById("screen").value += value;
}

function clearDisplay(){
    document.getElementById("screen").value="";
}

function calculate() {
    const screen = document.getElementById("screen");
    try{
        screen.value = eval(screen.value);
    }
    catch{
        screen.value = "Error";
    }
}

function clearOne() {
  const screen = document.getElementById("screen");
  screen.value = screen.value.slice(0, -1);
}


let coinCount = 0;

function calculate1() {
  try {
    const result = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = result;
    document.getElementById("coin-sound").play();

    coinCount++;
    document.getElementById("coin-count").textContent = coinCount;

    document.getElementById("coin-sound").play();
  } catch {
    document.getElementById("screen").value = "Error";
  }
}
