
var isScrolling = false;

$(window).on("scroll", function () {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function () {
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

function searchPosts(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    var input = document.getElementById("searchbar").value.toLowerCase();
    var posts = document.getElementsByClassName("post-container");

    for (var i = 0; i < posts.length; i++) {
      var title = posts[i].getElementsByClassName("post-title")[0];
      var titleText = title.textContent.toLowerCase();

      if (titleText.includes(input)) {
        posts[i].style.display = "flex";
      } else {
        posts[i].style.display = "none";
      }
    }
  }
}

// APPEND POSTS
// Function to create a new post and append it at the top of the grid-container

function createPost() {
  let postCounter = 0;
  postCounter++;

  // Get input data from the form
  const title = document.getElementById('post-title').value;
  const text = document.getElementById('text-box').value;

  // Generate the HTML structure for the new post
  const newPostHTML = `
  <div class="post-container grid-x align-center">
  <div class="cell medium-8">
    <!--like column of every post-->
    <div class="like-column">
      <div>
        <button type="button" class="like-button" aria-pressed="false" id="likebtn${postCounter}" onclick="clickLike(${postCounter})">
          <i class="fa-solid fa-caret-up"></i>
        </button>
      </div>
      <div class="like-num">
        <span id="like-num${postCounter}">0</span>
      </div>
      <div>
        <button type="button" class="dislike-button" aria-pressed="false" id="dislikebtn${postCounter}" onmousedown="clickDislike(${postCounter})">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="blog-post" style="width: max-content;">
      <a href="Post.html"></a>
      <div class="d-flex justify-content-between align-items-center">
        <a href="/MyProfile">
          <div class="d-flex align-items-center">
            <img class="avatar-image" src="/assets/PFPs and Posts/pfp1.png" id="pfp1">
            <span class="avatar-name">Posted by mbc21 2 days ago</span>
          </div>
        </a>
        <!--
      <button type="button">
        <i class="bi-pencil-square" href="#" onclick="editPostPopup()"></i>
      </button>
      -->
    </div>

      <div class="d-flex flex-column">
        <div class="row">
          <div class="col">
            <div class="post-title">
              <a id="post1-title" href="Post.html" style="color: #1a340d;">
                ${title}
              </a>
            </div>
            <div id="post1-body" class="post-text">
              ${text}
            </div>
          </div>

          <!--The comment and like bar of every post-->
          <div class="comment-bar">
            <div class="comment-button">
              <button type="button">
                <a href="Post.html" style="color: #1a340d">
                  <i class="fa-solid fa-message"></i>
                  <span class="comment-num">0</span>
                  <span> Comments </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

  // Create a new div element to hold the post content
  const newPostDiv = document.createElement('div');
  newPostDiv.innerHTML = newPostHTML;

  // Get the container for posts and the first post in that container
  const postContainer = document.getElementById('old-container');
  const firstPost = postContainer.firstChild;

  // Insert the new post before the first post in the container
  postContainer.insertBefore(newPostDiv, firstPost);

  // Clear the form fields after post creation
  document.getElementById('post-title').value = '';
  document.getElementById('text-box').value = '';
}

// Function to handle the "Post" button click
function onPostButtonClick() {
  createPost();
}

// Function to handle the like button click for a specific post
function clickLike(postId) {
  const likebtn = document.getElementById(`likebtn${postId}`);
  const dislikebtn = document.getElementById(`dislikebtn${postId}`);
  const likenum = document.getElementById(`like-num${postId}`);

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

// Function to handle the dislike button click for a specific post
function clickDislike(postId) {
  const likebtn = document.getElementById(`likebtn${postId}`);
  const dislikebtn = document.getElementById(`dislikebtn${postId}`);
  const likenum = document.getElementById(`like-num${postId}`);

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


/* */

function clickLike01() {
  let likebtn = document.getElementById("likebtn01");
  let dislikebtn = document.getElementById("dislikebtn01");
  let likenum = document.getElementById("like-num01");

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

function clickDislike01() {
  let likebtn = document.getElementById("likebtn01");
  let dislikebtn = document.getElementById("dislikebtn01");
  let likenum = document.getElementById("like-num01");

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

function clickLike02() {
  let likebtn = document.getElementById("likebtn02");
  let dislikebtn = document.getElementById("dislikebtn02");
  let likenum = document.getElementById("like-num02");

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
function clickDislike02() {
  let likebtn = document.getElementById("likebtn02");
  let dislikebtn = document.getElementById("dislikebtn02");
  let likenum = document.getElementById("like-num02");

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

function clickLike03() {
  let likebtn = document.getElementById("likebtn03");
  let dislikebtn = document.getElementById("dislikebtn03");
  let likenum = document.getElementById("like-num03");

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
function clickDislike03() {
  let likebtn = document.getElementById("likebtn03");
  let dislikebtn = document.getElementById("dislikebtn03");
  let likenum = document.getElementById("like-num03");

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

function clickLike04() {
  let likebtn = document.getElementById("likebtn04");
  let dislikebtn = document.getElementById("dislikebtn04");
  let likenum = document.getElementById("like-num04");

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
function clickDislike04() {
  let likebtn = document.getElementById("likebtn04");
  let dislikebtn = document.getElementById("dislikebtn04");
  let likenum = document.getElementById("like-num04");

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

function clickLike05() {
  let likebtn = document.getElementById("likebtn05");
  let dislikebtn = document.getElementById("dislikebtn05");
  let likenum = document.getElementById("like-num05");

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

function clickDislike05() {
  let likebtn = document.getElementById("likebtn05");
  let dislikebtn = document.getElementById("dislikebtn05");
  let likenum = document.getElementById("like-num05");

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

let new_comments_num = 0;
const postCommentBtn = document.querySelector(".create-comment #postCommentBtn");
postCommentBtn.addEventListener("click", function addComment() {
  const comments = document.querySelector(".all-comment-box .existing-comments");
  const new_comment = document.createElement("div");
  new_comment.className = "comment";
  new_comment.id = "new-comment" + new_comments_num;
  new_comments_num += 1;
  comments.prepend(new_comment);

  const authortimeDiv = document.createElement("div");
  authortimeDiv.className = "comment-author-time";
  new_comment.appendChild(authortimeDiv);

  const author_name = document.createElement("h5");
  author_name.className = "author-name";
  author_name.innerHTML = "mbc21";
  authortimeDiv.appendChild(author_name);

  const time = document.createElement("h6");
  time.className = "time-submitted";
  time.innerHTML = "• Just now";
  authortimeDiv.appendChild(time);

  const true_comment = document.createElement("div");
  true_comment.className = "true-comment";
  new_comment.appendChild(true_comment);

  const content = document.createElement("p");
  content.className = "comment-content";
  const user_comment = document.querySelector("#comment-box").value;
  content.innerHTML = user_comment;
  true_comment.appendChild(content);
}
)


function editPostPopup() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var blur2 = document.getElementById('blur2');
  blur2.classList.toggle('active');

  var ep = document.getElementById('popup_editPost');
  ep.classList.toggle('active');
}

function deletePost() {
  var x = document.getElementById("post1"); //to be changed

  x.remove();
  editPostPopup();
}

function editPost() {
  var new_title = document.querySelector("#editTitle-box").value;
  var new_body = document.querySelector("#editBody-box").value;
  var edited_title = document.querySelector("#post1-title");
  var edited_body = document.querySelector("#post1-body");

  edited_title.innerHTML = new_title;
  edited_body.innerHTML = new_body;

  editPostPopup();
}


function editCommentPopup() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var blur2 = document.getElementById('blur2');
  blur2.classList.toggle('active');

  var ep = document.getElementById('popup_editComment');
  ep.classList.toggle('active');
}

function deleteComment() {
  var x = document.getElementById("old-comment2"); //to be changed

  x.remove();
  editCommentPopup();
}

function editComment() {
  var new_body = document.querySelector("#editComment-box").value;
  var edited_body = document.querySelector("#post1-body");

  edited_body.innerHTML = new_body;

  editCommentPopup();
}

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');

  var blur2 = document.getElementById('blur2')
  blur2.classList.toggle('active');

  var p = document.getElementById('popup_login');
  p.classList.toggle('active');
}

function toggle2() {
  var r = document.getElementById('popup-reg');
  r.classList.toggle('active');
}

function createPostPage() {
  window.location.href = "createPostPage.html"
}

function backHome() {
  window.location.href = "/Yonde"
}
//upload photo

const dropArea = document.querySelector(".drag-upload");
dragText = dropArea.querySelector("header"),
  btn = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");

let file;

btn.onclick = () => {
  input.click();
}

input.addEventListener("change", function () {
  file = this.files[0];
  show();
  dropArea.classList.add("active");
})

dropArea.addEventListener("dragover", () => {
  event.preventDefault();
  console.log("File is over dragArea");
  dropArea.classList.add("active");

  dragText.textContent = "Release to Upload File"
});

dropArea.addEventListener("dragleave", () => {
  console.log("File is outside drag area");
  dropArea.classList.remove("active");

  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  show();
});

function show() {
  let fileType = file.type;
  console.log(fileType);

  let allowed = ["image/jpeg", "image/jpg", "image/png"];

  if (allowed.includes(fileType)) {
    let reader = new FileReader();
    reader.onload = () => {
      let fileURL = reader.result;
      console.log(fileURL);
      let imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML = imgTag;

    }
    reader.readAsDataURL(file);
  } else {
    alert("Invalid");
    dropArea.classList.remove("active");
  }
}

function toImgUpload() {
  var tf = document.getElementById("text-area-container");
  var iu = document.getElementById("img-upload");


  if (tf.style.display == "none") {
    tf.style.display = "block";
    iu.style.display = "none";
  } else {
    tf.style.display = "none";
    iu.style.display = "flex";
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