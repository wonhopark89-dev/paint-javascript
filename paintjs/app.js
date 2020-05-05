const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor"); // array
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INIT_COLOR = "#2C2C2C";
const CANVAS_SIZE = 600;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// 초기 배경값을 하얀색으로 설정하기 위함
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = "2.5";

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(event) {
  stopPainting();
}

function handleColorClick(event) {
  // console.log(event);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleContextMenu(event) {
  event.preventDefault(); // 우클릭 방지
}

function handleSaveClick() {
  // const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png"); // default is "png", same as "image/png"
  link.download = "paint"; // 저장되는 이름
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseLeave);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleContextMenu);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  // 일종의 방어코드
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
