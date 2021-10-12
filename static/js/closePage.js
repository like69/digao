// 禁止鼠标右键
document.oncontextmenu = function(){
  return false;
}
document.onkeydown = function(e) {
  if(e.key === 'F12') {
    console.log(1111111)
    closePage()
  }
}
function closePage() {     
  if (navigator.userAgent.indexOf("MSIE") > 0) {     
    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {     
      window.opener = null; 
      window.close();     
      console.log(1)
    }     
    else {     
      window.open('', '_top'); 
      window.top.close();   
      console.log(2)  
    }     
  }     
  else if (navigator.userAgent.indexOf("Firefox") > 0) {     
    window.location.href = 'about:blank '; //火狐默认状态非window.open的页面window.close是无效的    
    //window.history.go(-2);  
    console.log(3)     
  }     
  else {     
    window.opener = null;      
    window.open('', '_self', '');     
    window.close();  
    console.log(4)        
  }     
} 