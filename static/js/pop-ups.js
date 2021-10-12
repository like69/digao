 //弹窗
 var homepass = document.getElementsByClassName("homepass")[0]
 var homealer = document.getElementsByClassName("homealer")[0]
 var tanchuang = document.getElementsByClassName("tanchuang")[0]
 homepass.onclick = function() {
     homealer.style.display = "flex"
 }
 homealer.onclick = function() {
     homealer.style.display = "none"
 }
 tanchuang.onclick = function(e) {
     homealer.style.display = "flex"
     e.stopPropagation();
 }