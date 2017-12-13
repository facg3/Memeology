
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

var request = function(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      cb(null, xhr.responseText);
    }else{
      cb("error" + xhr.responseType);
    }

  }
  xhr.open("GET", url, true);
  xhr.send();
}



var potato = document.getElementById("upload");
potato.addEventListener("click", ()=>{
  var url = prompt("Insert a meme direct link (URL).");
  if(url){var tags = prompt("Insert space seperated tags for your meme.");
}
})

function getMeme(err, data){
  var tag = document.getElementsByClassName("search-box")[0].value;
  if (err){
    console.log(err);
  }else{
    var urls = JSON.parse(data);
    urls.forEach(function(value){
      var meme = document.createElement("img");
      meme.src = value;
      var cont = document.getElementById("memes-container");
      cont.appendChild(meme);
    })
  }
}
