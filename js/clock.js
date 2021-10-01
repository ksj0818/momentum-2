/**
 * interval은 매번 일어나야 하는 무언가를 말함.
 * setInterval()은 2개의 아규먼트를 받음 첫 번째 아규먼트는 내가 실행하고자하는 함수
 * 두 번째는 호출되는 함수 간격을 ms(milliseconds)로 할 지 정하는 아규먼트 
 * 
 * setTimeOut()은 첫 번째 아규먼트에는 호출하려는 함수를 넣고, 
 * 두 번째에는 얼마나 기다릴지 ms(milliseconds)를 넣어주기 
 * 
 * padStart()는 string에 쓸 수 있는 함수 첫 번째 아규먼트에는 문자열 길이를 넣어주고
 * 두 번째 아규먼트에는 해당 문자열 길이 보다 적을때 넣어줄 문자를 넣어주기
 */

const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // getHours()에는 padStart()를 사용할 수 없음. number이기 때문.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);