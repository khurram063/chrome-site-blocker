/*
  *  author:   Sak1sham
  *  @ sak1sham.github.io
*/


findString = function findText(text) {
  if(window.find(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
    document.documentElement.scrollTop = 0;
  };
}

findStringMulti = function findTextMulti(text1, text2, text3) {
  if(window.find(text1) && window.find(text2) && window.find(text3)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
    document.documentElement.scrollTop = 0;
  }
  else{
      if (window.getSelection) {window.getSelection().removeAllRanges();}
      else if (document.selection) {document.selection.empty();}
  }
}

findURL = function changeURL(text){
  var current = window.location.href;
  if(current === text){
    window.location.replace("https://www.google.co.in");
  }
}

findAllURL = function changeAllURL(text){
  var current = window.location.href;
  if(current.startsWith(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
    document.documentElement.scrollTop = 0;
  }
}


go = function main(){
	  //findAllURL("https://www.wikipedia.org/");
	  //findAllURL("https://www.youtube.com");
}

go();

function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;
                onload();
            }
        }
        else {
            onload();
        }
    };
    head.appendChild(script);
}