
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
  let dislikebtn = document.getElementById("dislikebtn1");
  let likenum = document.getElementById("like-num1");

  if (dislikebtn.ariaPressed == "false") {
    if (likebtn.ariaPressed == "false") {
      likebtn.style.color = "#1a340d";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "true";
    } else if (likebtn.ariaPressed == "true") {
      likebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "false";
    }
  } else if (dislikebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) + 1;
    likenum.innerHTML = x;
    dislikebtn.ariaPressed = "false";
  }
}
function clickDislike1() {
  let likebtn = document.getElementById("likebtn1");
  let dislikebtn = document.getElementById("dislikebtn1");
  let likenum = document.getElementById("like-num1");

  if (likebtn.ariaPressed == "false") {
    if (dislikebtn.ariaPressed == "false") {
      dislikebtn.style.color = "red";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "true";
    } else if (dislikebtn.ariaPressed == "true") {
      dislikebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "false";
    }
  } else if (likebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) - 1;
    likenum.innerHTML = x;
    likebtn.ariaPressed = "false";
  }
}

function clickLike2() {
  let likebtn = document.getElementById("likebtn2");
  let dislikebtn = document.getElementById("dislikebtn2");
  let likenum = document.getElementById("like-num2");

  if (dislikebtn.ariaPressed == "false") {
    if (likebtn.ariaPressed == "false") {
      likebtn.style.color = "#1a340d";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "true";
    } else if (likebtn.ariaPressed == "true") {
      likebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "false";
    }
  } else if (dislikebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) + 1;
    likenum.innerHTML = x;
    dislikebtn.ariaPressed = "false";
  }
}
function clickDislike2() {
  let likebtn = document.getElementById("likebtn2");
  let dislikebtn = document.getElementById("dislikebtn2");
  let likenum = document.getElementById("like-num2");

  if (likebtn.ariaPressed == "false") {
    if (dislikebtn.ariaPressed == "false") {
      dislikebtn.style.color = "red";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "true";
    } else if (dislikebtn.ariaPressed == "true") {
      dislikebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "false";
    }
  } else if (likebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) - 1;
    likenum.innerHTML = x;
    likebtn.ariaPressed = "false";
  }
}

function clickLike3() {
  let likebtn = document.getElementById("likebtn3");
  let dislikebtn = document.getElementById("dislikebtn3");
  let likenum = document.getElementById("like-num3");

  if (dislikebtn.ariaPressed == "false") {
    if (likebtn.ariaPressed == "false") {
      likebtn.style.color = "#1a340d";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "true";
    } else if (likebtn.ariaPressed == "true") {
      likebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "false";
    }
  } else if (dislikebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) + 1;
    likenum.innerHTML = x;
    dislikebtn.ariaPressed = "false";
  }
}
function clickDislike3() {
  let likebtn = document.getElementById("likebtn3");
  let dislikebtn = document.getElementById("dislikebtn3");
  let likenum = document.getElementById("like-num3");

  if (likebtn.ariaPressed == "false") {
    if (dislikebtn.ariaPressed == "false") {
      dislikebtn.style.color = "red";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "true";
    } else if (dislikebtn.ariaPressed == "true") {
      dislikebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "false";
    }
  } else if (likebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) - 1;
    likenum.innerHTML = x;
    likebtn.ariaPressed = "false";
  }
}

function clickLike4() {
  let likebtn = document.getElementById("likebtn4");
  let dislikebtn = document.getElementById("dislikebtn4");
  let likenum = document.getElementById("like-num4");

  if (dislikebtn.ariaPressed == "false") {
    if (likebtn.ariaPressed == "false") {
      likebtn.style.color = "#1a340d";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "true";
    } else if (likebtn.ariaPressed == "true") {
      likebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      likebtn.ariaPressed = "false";
    }
  } else if (dislikebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) + 1;
    likenum.innerHTML = x;
    dislikebtn.ariaPressed = "false";
  }
}
function clickDislike4() {
  let likebtn = document.getElementById("likebtn4");
  let dislikebtn = document.getElementById("dislikebtn4");
  let likenum = document.getElementById("like-num4");

  if (likebtn.ariaPressed == "false") {
    if (dislikebtn.ariaPressed == "false") {
      dislikebtn.style.color = "red";
      var x = parseInt(likenum.innerHTML) - 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "true";
    } else if (dislikebtn.ariaPressed == "true") {
      dislikebtn.style.color = "#b8b8b8";
      var x = parseInt(likenum.innerHTML) + 1;
      likenum.innerHTML = x;
      dislikebtn.ariaPressed = "false";
    }
  } else if (likebtn.ariaPressed == "true") {
    likebtn.style.color = "#b8b8b8";
    dislikebtn.style.color = "#b8b8b8";
    var x = parseInt(likenum.innerHTML) - 1;
    likenum.innerHTML = x;
    likebtn.ariaPressed = "false";
  }
}

const new_comments_num = 0;
function addComment() {
  /*
  var comments = document.querySelector(".existing-comments");
  var new_comment = document.createElement("div");
  new_comment.className = "comment"; 
  new_comment.id = "new-comment1";
  new_comments_num += 1;

  var authortimeDiv = document.createElement("div");
  authortimeDiv.className = "comment-author-time";

  var author_name = document.createElement("h5");
  author_name.className = "author-name";
  author_name.innerHTML = "mbc21";

  var time = document.createElement("h6");
  time.className = "time-submitted";
  time.innerHTML = "• Just now";

  var true_comment = document.createElement("div");
  true_comment.className = "true-comment";
  var content = document.createElement("p");
  content.className = "comment-content";
  
  var user_comment = document.getElementById("comment-box").value;
  content.innerHTML = user_comment;
  
  authortimeDiv.appendChild(author_name);
  authortimeDiv.appendChild(time);
  true_comment.appendChild(content);
  new_comment.appendChild(authortimeDiv);
  new_comment.appendChild(true_comment);
  comments.prepend(new_comment);
  */
  var author_name = document.querySelector("#new-comment .author-name");
  author_name.innerHTML = "mbc21";

  var time = document.querySelector("#new-comment .comment-content");
  time.innerHTML = "• Just now";

  var user_comment = document.querySelector("#new-comment .comment-content");
  user_comment.innerHTML = document.getElementById("comment-box").value;

  var comment_num = document.querySelector(".comment-bar .comment-num");
  comment_num.innerHTML = parseInt(comment_num.innerHTML) + 1; 
}

function editPostPopup(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');

  var blur2 = document.getElementById('blur2')
  blur2.classList.toggle('active');

  var p = document.getElementById('popup_editPost');
  p.classList.toggle('active');
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

function createPostPage() {
  window.location.href = "createPostPage.html"
}

//upload photo

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

function cancel(){
  var i = document.getElementById("img");

  if (i.innerHTML=="Text"){
    i.innerHTML = "Image";
  } else{
    i.innerHTML = "Text";
  } 
}