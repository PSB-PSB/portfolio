var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
// 마이픽 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("main__img__one");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 마이픽 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 선물추천 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function openCity2(evt, choiceName) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("main__img__two");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(choiceName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 서치인풋
function putbtn(){
  var put = document.getElementById("put");
  if (put.style.display === "none") {
    put.style.display="block";
    put.style.transition ="1s";
  }else{
    put.style.display="none";
    put.style.transition ="1s";
  }
}
// 폰 메뉴
function menubtn(){
  var menu = document.getElementsByClassName('p__menu');
  if (menu[0].style.height === "0px") {
    menu[0].style.height="450px";
    menu[0].style.transition =".5s";
  }else{
    menu[0].style.height="0px";
    menu[0].style.transition =".5s";
  }
}
