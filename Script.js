
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

function clickLike1() {
  let likebtn = document.getElementById("likebtn1");
  likebtn.addEventListener('click', function() {
    likebtn.style.color = "#1a340d"
  });
}
function clickDislike1() {
  let dislikebtn = document.getElementById("dislikebtn1");
  dislikebtn.addEventListener('click', function() {
    dislikebtn.style.color = "red"
  });
}

function clickLike2() {
  let likebtn = document.getElementById("likebtn2");
  likebtn.addEventListener('click', function() {
    likebtn.style.color = "#1a340d"
  });
}
function clickDislike2() {
  let dislikebtn = document.getElementById("dislikebtn2");
  dislikebtn.addEventListener('click', function() {
    dislikebtn.style.color = "red"
  });
}

function clickLike3() {
  let likebtn = document.getElementById("likebtn3");
  likebtn.addEventListener('click', function() {
    likebtn.style.color = "#1a340d"
  });
}
function clickDislike3() {
  let dislikebtn = document.getElementById("dislikebtn3");
  dislikebtn.addEventListener('click', function() {
    dislikebtn.style.color = "red"
  });
}

function clickLike4() {
  let likebtn = document.getElementById("likebtn4");
  likebtn.addEventListener('click', function() {
    likebtn.style.color = "#1a340d"
  });
}
function clickDislike4() {
  let dislikebtn = document.getElementById("dislikebtn4");
  dislikebtn.addEventListener('click', function() {
    dislikebtn.style.color = "red"
  });
}

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

function toggle3(){
  var f=document.getElementById('popup-forgot');
  f.classList.toggle('active')
}

function createPostPage() {
  window.location.href = "createPostPage.html"
}

const dropArea = document.querySelector(".drag-upload");
dragText = dropArea.querySelector("header"),
btn = dropArea.querySelector("button"),
input = dropArea.querySelector("input");

let file;

btn.onclick = ()=>{
  input.click();
}

input.addEventListener("change", function(){
  file = this.files[0];
  show();
  dropArea.classList.add("active");
})

dropArea.addEventListener("dragover", ()=>{
  event.preventDefault();
  console.log("File is over dragArea");
  dropArea.classList.add("active");

  dragText.textContent ="Release to Upload File"
});

dropArea.addEventListener("dragleave", ()=>{
  console.log("File is outside drag area");
  dropArea.classList.remove("active");

  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event)=>{
  event.preventDefault();
  file = event.dataTransfer.files[0];
  show();
});

function show(){
  let fileType = file.type;
  console.log(fileType);

  let allowed = ["image/jpeg", "image/jpg", "image/png"];

  if(allowed.includes(fileType)){
    let reader = new FileReader();
    reader.onload = ()=>{
      let fileURL = reader.result;
      console.log(fileURL);
      let imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML= imgTag;

    }
    reader.readAsDataURL(file);
  }else{
    alert("Invalid");
    dropArea.classList.remove("active");
  }
}

function toImgUpload(){
  var tf = document.getElementById("text-area-container");
  var iu = document.getElementById("img-upload");

 
  if(tf.style.display=="none"){
    tf.style.display = "block";
    iu.style.display="none";
  }else{
    tf.style.display = "none";
    iu.style.display="flex";
  }

}


