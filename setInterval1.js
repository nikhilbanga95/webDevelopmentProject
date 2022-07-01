const heading = document.querySelector("main h1");
const buttons = document.querySelectorAll("main button");
const blink = document.querySelector("#blink");
const fontReset = document.querySelector("#reset");

const headingStyle = heading.style ;
let buttonStyle;
for( let button of buttons){
  buttonStyle = button.style;
}

function randomColorGeneratorTwo(){
  const red2 = Math.floor(Math.random() * 256);
  const green2 = Math.floor(Math.random() * 256);
  const blue2 = Math.floor(Math.random() * 256);
  const randomColorTwo = `RGB(${red2},${green2},${blue2})`;
  return randomColorTwo;
}
function randomColorGeneratorThree(){
  const red3 = Math.floor(Math.random() * 256);
  const green3 = Math.floor(Math.random() * 256);
  const blue3 = Math.floor(Math.random() * 256);
  const randomColorThree = `RGB(${red3},${green3},${blue3})`;
  return randomColorThree;
}

const colorChange2 = () => setInterval(() => {
  const fontColor = randomColorGeneratorTwo();
  const background = randomColorGeneratorThree();
  heading.style.backgroundColor = background;
  heading.style.color = fontColor;
},100 );
const colorChange3 = () => setInterval(() => {
  for(let button of buttons){
    const fontColor = randomColorGeneratorTwo();
    const background = randomColorGeneratorThree();
    button.style.backgroundColor = background;
    button.style.color = fontColor;
    button.style.transition = "none"
  }
},100 )

let blinkStart1;
let blinkStart2;
let blinkCount = 0 ;
blink.addEventListener("click",() => {
  if(blinkCount == 0){
  blinkStart1 = colorChange2();
  blinkStart2 = colorChange3();
  blinkCount = 1;
  }
})

fontReset.addEventListener("click",() => {
  if(blinkCount == 1){
    clearInterval(blinkStart1);
    clearInterval(blinkStart2);
    blinkCount = 0;
  }
  else{
    heading.style = headingStyle;
    for( let button of buttons){
      button.style = buttonStyle;
    }
  }
})