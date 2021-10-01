const loginForm = document.querySelector('#form-login');
const loginInput = document.querySelector('#form-login input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY);

// local storage는 우리가 브라우저에 뭔가를 저장할 수 있게 해줌
// local storage가 비어있으면 form부터 보여줘야함
// 하지만 local storage에 유저 정보가 있다면 form을 보여줘선 안됨, h1태그를 보여줘야함
// 본인이 생성한 string을 반복해서 사용하게 될 경우에는 대문자 변수로 저장해 두는 것이 좋다. JS가 변수오타는 잡아주는데 string 오타는 안잡아줌

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  setGreeting(savedUserName);
}

//functions
function onLoginSubmit(event) {
  // preventDefault() 어떤 event의 기본 행동 등 발생 되지 않도록 막음
  event.preventDefault(); 
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  setGreeting(userName)
}

function setGreeting(userName) {
  greeting.innerText = `Hello ${userName}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}


// events
// JS는 함수를 실행시키는 동시에 그 함수에 첫 번째 인자로 object를 넣어줌 이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있음
// 가장 중요한건 addEventListener안에 있는 함수는 직접 실행하지 않는다는 것
loginForm.addEventListener('submit', onLoginSubmit) 