const firebaseConfig = {
    apiKey: "AIzaSyDpIGNnBS8FjVbqNS3DcChZTP1uJb4gTIw",
    authDomain: "games-news-1d8ab.firebaseapp.com",
    projectId: "games-news-1d8ab",
    storageBucket: "games-news-1d8ab.appspot.com",
    messagingSenderId: "164881794730",
    appId: "1:164881794730:web:775c11fccdb0557d8a72d3"
  };

  let app = initializeApp(firebaseConfig)

  let db = app.firetore()


let li = document.querySelectorAll('li')[2]
let body = document.getElementsByTagName('body')[0]
let menu = document.getElementsByTagName('menu')[0]

body.onclick = function(e){closeDropdownMenu(e,menu)}


function closeDropdownMenu(e,menu){
    if(menu.dataset.open == "open"){
        if(e.target != menu && e.target != li && e.target.parentElement.parentElement != menu){
            navDropdown('',menu)
        }
    }
}



li.onclick = function(){navDropdown(this,menu)}


function navDropdown(handdleElement,e){

    let distTop = handdleElement.offsetHeight + handdleElement.offsetTop
    let distLeft = handdleElement.offsetLeft
    dropdownVerification(e,distTop,distLeft)
    

}

function dropdownVerification(e,distTop,distLeft){

    if(e.dataset.open == 'close'){
        e.dataset.open = "open"
        e.style.top = distTop+"px"
        e.style.left = distLeft+"px"
        e.style.display = "inline-block"
    }else{
        e.dataset.open = "close"
        e.style.display = "none"
    }

}



