function position()
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById("message"))
        return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement("message",200,100,10);
    if(!document.getElementById("message2"))
        return false;
    var elem2=document.getElementById("message2");
    elem2.style.position="absolute";
    elem2.style.left="50px";
    elem2.style.top="50px";
    moveElement("message2",125,125,20);
}
function moveElement(elementid,final_x,final_y,interval)
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById(elementid))
        return false;
    var elem=document.getElementById(elementid);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y)
        return true;
    if(xpos<final_x)
        xpos++;
    if(xpos>final_x)
        xpos--;
    if(ypos<final_y)
        ypos++;
    if(ypos>final_y)
        ypos--;
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementid+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
}
addLoadEvent(position);