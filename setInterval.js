const change = document.querySelector("#change");
const stopChange = document.querySelector("#stop");
const body = document.body;
const text = document.querySelector("main h1");

function randomColorGeneratorOne(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColorOne = `RGB(${red},${green},${blue})`;
  return randomColorOne;
}

const colorChange = () => setInterval(() => {
  const backgroundColor = randomColorGeneratorOne();
  text.textContent = `Current Color: ${backgroundColor}`
  body.style.backgroundColor = backgroundColor;
},100 );

let colorChangeStart1;
let click1 = 0;
change.addEventListener("click",() =>{
  if(click1 == 0){
  colorChangeStart1 = colorChange();
  console.log(click1);
  click1 = 1;
  }
  else{
  console.log(click1)
  }
});
stopChange.addEventListener("click",() =>{
  if(click1 == 1){
  console.log("Stopped");
  clearInterval(colorChangeStart1);
  click1 = 0;
}
  else{
    console.log(click1);
    body.style.backgroundColor = "RGB(255,255,255)";
    text.textContent = `Current Color: RGB(255,255,255)`
  }
});
