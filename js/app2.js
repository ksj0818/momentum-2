const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  // const currentColor = h1.style.color;
  // let newColor;

  // currentColor === 'blue' ? newColor = 'tomato' : newColor = 'blue';
  // h1.style.color = newColor;


  const clickedClass = 'clicked';
  // 자바스크립트가 CSS에 직접 대화하지 않게 됨
  // if (h1.className === clickedClass) {
    //   h1.className = "";
    // } else {
      //   h1.className = clickedClass;
      // }

      // className은 이전 클래스들은 상관하지않고 그냥 모든걸 교체해버림
      // h1.className = h1.className !== clickedClass ? clickedClass : '';

      // classList.contains()는 HTML element의 class에 포함되어있는지 말해줌
      // h1.classList.contains(clickedClass)
      // ? h1.classList.remove(clickedClass)
      // : h1.classList.add(clickedClass);

      // 위에 코드를 toggle() 함수를 이용하면 1줄로 바꿀 수 있음
      // toggle()은 토큰을 toggle한다. 토큰이 존재한다면 토큰을 제거하고, 존재하지 않는다면 토큰을 추가한다
      h1.classList.toggle(clickedClass);
}

h1.addEventListener('click', handleTitleClick)