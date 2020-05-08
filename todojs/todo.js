const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  // console.log(event.target); // 클릭한 오브젝트를 알 수 있음
  // console.dir(event); // 버튼(클릭한 오브젝트)을 감싼 부모를 찾을 수 있음
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // li 의 id 타입이 string
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // localStorage 는 String 으로 저장되기 때문에 JSON 으로 바꿔서 저장
  // inspect 에서 읽을 수 있도록
}
function paintToDo(text) {
  const li = document.createElement("li");

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);

  const span = document.createElement("span");
  span.innerHTML = text;

  const newId = Date.now();
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue === "") {
    alert("please, input something !");
    return;
  }
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // return array
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
