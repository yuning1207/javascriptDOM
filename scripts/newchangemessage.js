function newpositionmessage()
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById("message"))
        return false;
    var message=document.getElementById("message");
    message.style.position="absolute";
    message.style.left="50px";
    message.style.top="100px";    
}
function newchangemessage()
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById("message"))
        return false;
    message=document.getElementById("message");
    var xpos=parseInt(message.style.left);
    var ypos=parseInt(message.style.top);
    if(xpos==200&&ypos==100)
        return true;
    if(xpos<200)
        xpos++;
    if(xpos>200)
        xpos--;
    if(ypos<100)
        ypos++;
    if(ypos>100)
        ypos--;
    message.style.left=xpos+"px";
    message.style.top=ypos+"px";
    movement=setTimeout("newchangemessage()",10);
}
addLoadEvent(newpositionmessage);
addLoadEvent(newchangemessage)