var pleft = document.getElementById("pleft")
var ple = document.getElementsByClassName("p_le")[0]
pleft.onchange = function() {
    var pat = new FileReader()
    pat.readAsDataURL(this.files[0])
    pat.onload = function() {
        pleft.style.opacity = 0;
        document.getElementById("p_lem").style.background = `url(${pat.result}) no-repeat`;
        document.getElementById("p_lem").style.backgroundSize = "cover"
    }
}
var pright = document.getElementById("pright")
var pri = document.getElementsByClassName("p_ri")[0]
pright.onchange = function() {
    var pat = new FileReader()
    pat.readAsDataURL(this.files[0])
    pat.onload = function() {
        pright.style.opacity = 0;
        document.getElementById("p_rim").style.background = `url(${pat.result}) no-repeat`;
        document.getElementById("p_rim").style.backgroundSize = "cover"
    }
}