window.onscroll = function(){topNav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function topNav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}

var closeNavi = document.getElementById("closeNav")
var openNavi = document.getElementById("openNav")
openNavi.onclick = function(){openNav()}
function openNav(){
    document.getElementById("sidenav").style.width = "250px";
}
closeNavi.onclick = function(){closeNav()}
function closeNav(){
    document.getElementById("sidenav").style.width = "0"
}

var modalFeedback = document.getElementById("sendModal")
var btnFeedback = document.getElementById("send")
var spanFeed = document.getElementsByClassName("closeFeed")[0]
btnFeedback.onclick = function(){displayModalFeed()}
function displayModalFeed(){
    var inputFeed = document.getElementById("inputFeedback").value
    if(inputFeed != ""){
        modalFeedback.style.display = "block"
        return true
    }
}
spanFeed.onclick = function(){closeFeed(); resetFeed()}
function closeFeed(){modalFeedback.style.display = "none"}
function resetFeed(){document.getElementById("formFeed").reset();}
window.onclick = function(event){
    if(event.target == modalFeedback){
        modalFeedback.style.display = "none";
    }
}

var modalWorkshop = document.getElementById("submitModal")
var btnWorkshop = document.getElementById("submit")
var spanWork = document.getElementsByClassName("closeWork")[0]
btnWorkshop.onclick = function(){displayModalWork()}
function displayModalWork(){
    var inputName = document.getElementById("firstName").value
    var inputLast = document.getElementById("lastName").value
    var inputEmail = document.getElementById("emailWork").value
    var inputPhone = document.getElementById("phoneWork").value
    if(inputName != "" && inputLast != "" && inputEmail != "" && inputPhone != ""){
        modalWorkshop.style.display = "block"
        return true
    }
}
spanWork.onclick = function(){closeWork(); resetWork()}
function closeWork(){modalWorkshop.style.display = "none"}
function resetWork(){document.getElementById("formWork").reset();}
window.onclick = function(event){
    if(event.target == modalWorkshop){
        modalWorkshop.style.display = "none";
    }
}