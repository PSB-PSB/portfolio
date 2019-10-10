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
