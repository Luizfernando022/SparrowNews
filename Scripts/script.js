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
        e.style.opacity = "1"
    }else{
        e.dataset.open = "close"
        e.style.display = "none"
        e.style.opacity = "0"
    }

}



