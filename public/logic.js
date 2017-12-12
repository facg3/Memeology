
var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);
};

var btns = document.querySelectorAll('button');
for (var i=btns.length-1;i>=0;i--) {
  btns[i].addEventListener('click',loading);
}


var potato = document.getElementById("upload");
potato.addEventListener("click", ()=>{
  var url = prompt("Insert a meme direct link (URL).");
  var tagsarray = prompt("Insert space seperated tags for your meme.").split(" ");
})
