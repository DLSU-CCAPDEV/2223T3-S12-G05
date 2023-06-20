
var isScrolling = false;

$(window).on("scroll", function() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function() {
      if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("shrink");
        $(".kanji").addClass("shrink");
        $(".tagline").addClass("shrink");
        $(".form-control").addClass("shrink");
        $(".fa-search").addClass("shrink");
        $(".fa-bars").addClass("shrink");
        $(".rounded-pill").addClass("shrink");
      } else {
        $(".navbar").removeClass("shrink");
        $(".kanji").removeClass("shrink");
        $(".tagline").removeClass("shrink");
        $(".form-control").removeClass("shrink");
        $(".fa-search").removeClass("shrink");
        $(".fa-bars").removeClass("shrink");
        $(".rounded-pill").addClass("shrink");
      }
      isScrolling = false;
    });
  }
});

$(document).foundation();

function toggle(){
  var blur=document.getElementById('blur');
  blur.classList.toggle('active');

  var blur2=document.getElementById('blur2')
  blur2.classList.toggle('active');

  var p =document.getElementById('popup_login');
  p.classList.toggle('active');
}

function toggle2(){
  var r=document.getElementById('popup-reg');
  r.classList.toggle('active');
}

var curr = null;

function open(id){
  if (curr){
    curr.style.display = "none";
  }

  var p = document.getElementById(id);
  p.style.display = "block";
  curr = p;
}

function close(id){
  var p = document.getElementById(id);
  p.style.display = "none";
  curr = null;
}