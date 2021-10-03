/**
 * event는 property를 가지고 있음 target은 클릭된 HTML의 Element임
 * localStorage에는 오직 텍스트만 저장할 수 있음. (Array는 저장 X)
 * JSON.stringify()는 JS의 object나 Array등 JS모든걸 문자열로 변환 (단순 스트링)
 * JSON.parse()단순한 string을 가지고 살아있는 JS object로 만들어줄 수 있음 (단순 스트링을 JSON.parse()에 넣으면 실제로 무언가 할 수 있는 Array을 얻게 됨)
 * Array에 있는 각각의 아이템에 대해서 function을 실행하는게 핵심
 */

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let todos = [];
const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);

// localStorag에서 가져온 키 값이 null이 아니면 불러온 값 JSON.parse 해주기
if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  // parsedTodos는 Array라서 forEach라는걸 갖고 있음
  // forEach는 펑션을 실행하게 해주는데 그 Array에 있는 각각의 Item에 대해서 실행해줌
  // 이벤트리스너가 이벤트를 제공해주는것 처럼 JS는 지금 처리되고 있는 item을 제공해줌
  // parsedTodos.forEach((item) => )  
  // paintToDo는 텍스트를 받는데 JS는 그 텍스트를 paintToDo에게 전달해줌
  todos.forEach(paintToDo)
}

// functions 
function saveTodoLocalStorage() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // 키 값 넣어주고, todos배열을 단순 문자열로 변환 후 로컬스토리지에 set해주기
}

function deleteTodo(event) {
  let testConfirm = confirm('정말 삭제하시겠어요?');
  const li = event.target.parentElement;
  testConfirm ? li.remove() : null;
  todos = todos.filter(todo => todo.id !== Number(li.id));
  saveTodoLocalStorage();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = '❌';
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoFormSubmit(event) {
  event.preventDefault(); // submit 기본동작 정지
  const newTodo = todoInput.value;  // html에서 입력받은 todo값 넣어주기
  const newTodoObj = {
    id: Date.now(), // Date.now()는 ms(millisecond)를 주는 함수
    text: newTodo
  };
  todoInput.value = '';   // 입력받은 값 공백으로 초기화
  todos.push(newTodoObj)  // todos배열에 newTodoObj값 푸쉬하기 마지막인덱스에 값이 들어감
  paintToDo(newTodoObj);  // 투두리스트 보여주는 함수에 newTodo값을 아규먼트로 넣어서 호출
  saveTodoLocalStorage(); // 로컬스토리지 set하는 함수 호출
}

todoForm.addEventListener("submit", todoFormSubmit);
