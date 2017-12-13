

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

}



var potato = document.getElementById("upload");
potato.addEventListener("click", ()=>{
  var url = prompt("Insert a meme direct link (URL).");
  if(url){var tags = prompt("Insert space seperated tags for your meme.");
}
})

function getMeme(){
  url = "/getMeme"
  var tag = document.getElementsByClassName("search-box")[0].value;
  var xhr = new XMLHttpRequest();
  var response
  xhr.onreadystatechange = function(){
    if(xhr.status === 200){
      response = (xhr.responseText);
      console.log(response)
          var meme = document.createElement("img");
          meme.src = response;
          var cont = document.getElementById("memes-container");
          cont.appendChild(meme);


    }else{
      console.log("errorrrr" + xhr.responseType);
    }

  }

  xhr.open("POST", url);
  xhr.send(tag);
}
