// navigator.geolocation.getCurrentPosition()함수는 user의 위치(geolocation)를 가져옴 wifi, GPS, 위치 등등
// Latitude(위도), Longitude(경도)
// 숫자들을 장소로 바꿔줄 서비스를 사용해야함, https://openweathermap.org/ 접속 후 API탭으로 이동
// Current Weather Data(API doc클릭) > 
// 코드 10줄로 위치와 날씨를 알 수 있음 20년 전에는 불가능했음.

const API_KEY = "378364d4473f47b6ab20bbd7ce37e253";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("당신의 위치는: " , lat, lon);
  // url을 부르는 방법 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch를 이용해서 url을 얻기, 브라우저 네트워크탭에서 wifi에 어떤 일이 일어나는지 확인
  // 실제로 url에 갈 필요없이 JS가 대신 url을 부름
  // API weather map에 가서 어떻게 바꿀 수 있는지 확인해야함 > units로 바꿀 수 있음 &units=metric 섭씨로 변경 API키 마지막에 추가
  // url을 얻었을 때 뭘 하라고 JS에게 말해줘야함
  // 서버의 응답을 기다려야해서 then을 사용
  // url을 fetch하고 response를 받아야함
  // response => response.json() 내용를 추출했으면 data를 얻음
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
  alert('당신의 위치를 찾을 수 없어요.')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


