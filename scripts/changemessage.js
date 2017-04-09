function positionmessage()
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById("message"))
        return false;
    var message=document.getElementById("message");
    message.style.position="absolute";
    message.style.left="50px";
    message.style.top="100px";
    movement=setTimeout("movemessage()",5000);
}
function movemessage()
{
    if(!document.getElementById)
        return false;
    if(!document.getElementById("message"))
        return false;
    var message=document.getElementById("message");
    message.style.left="200px";
}
addLoadEvent(positionmessage);