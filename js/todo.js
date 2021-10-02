/**
 * event는 property를 가지고 있음 target은 클릭된 HTML의 Element임
 * localStorage에는 오직 텍스트만 저장할 수 있음. (Array는 저장 X)
 * JSON.stringify()는 JS의 object나 Array등 JS모든걸 문자열로 변환
 */

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const todos = [];

// functions 
function saveTodoLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(event) {
  let confirmTest = confirm('정말 삭제하시겠어요?');
  const li = event.target.parentElement;
  confirmTest ? li.remove() : null;
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = '❌';
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li)
  
}

function todoFormSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todos.push(newTodo)
  paintToDo(newTodo);
  saveTodoLocalStorage();
}

todoForm.addEventListener("submit", todoFormSubmit);

function sayHello(item) { // 이벤트리스너가 이벤트를 제공해주는것 처럼 JS는 지금 처리되고 있는 item을 제공해줌
  console.log("Hi");
}

const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  // parsedTodos는 Array라서 forEach라는걸 갖고 있음
  // forEach는 펑션을 실행하게 해주는데 그 Array에 있는 각각의 Item에 대해서 실행해줌
  parsedTodos.forEach(sayHello);
}