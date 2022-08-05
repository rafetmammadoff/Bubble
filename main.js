let menu=document.querySelector("#context-menu");
let area=document.querySelector("body")

area.onclick=function(e){
    if (e.target.offsetParent != menu) {
        menu.style.display="none"
    }
}


const normalizePosition=function(mouseX,mouseY){
    const {left:offsetX,top:offsetY}=area.getBoundingClientRect();
    const isFixedX=mouseX + menu.clientWidth > area.clientWidth
    const isFixedY=mouseY + menu.clientHeight > area.clientHeight
    
    let normalX=mouseX;
    let normalY=mouseY;

    if (isFixedX) {
        normalX=offsetX+area.clientWidth-menu.clientWidth;
    }
    if (isFixedY) {
        normalY=offsetY+area.clientHeight-menu.clientHeight;
    }
    return {normalX,normalY}
}

area.oncontextmenu=function(event) {
    event.preventDefault();
    menu.style.display="block";
    const {clientX:mouseX , clientY:mouseY}=event
    const {normalX,normalY}=normalizePosition(mouseX,mouseY);
    console.log(normalX,normalY);
    menu.style.left=normalX+"px";
    menu.style.top=normalY+"px";
}


let color=document.querySelector("#color");
color.onclick=()=>{
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
        finalCode =finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    }
    area.style.backgroundColor=finalCode;
}
