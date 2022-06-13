let li = document.querySelectorAll('li')[2]
let body = document.getElementsByTagName('body')[0]
let menu = document.getElementsByTagName('menu')[0]

body.onclick = function(e){
    if(e.target != menu){
     let elementsDropdown = document.querySelectorAll('[data-open=open]')
        elementsDropdown.forEach(element=>{
            element.display = "inline-block"
        })
        
    }else{
        alert('deu ruim')
    }
}
li.onclick = function(){navDropdown(this,menu)}


function navDropdown(handdleElement,e){

    let distTop = handdleElement.offsetHeight + handdleElement.offsetTop
    let distLeft = handdleElement.offsetLeft

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



