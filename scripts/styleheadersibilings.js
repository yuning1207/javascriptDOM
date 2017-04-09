function styleheadersibilings()
{
    if(!document.getElementsByTagName)
        return false;
    var headers=document.getElementsByTagName("h1");
    var length1=headers.length;
    if(length1<1)
        return false;
    var elem;
    for(var i=0;i<length1;i++)
    {
        elem=getnextelement(headers[i].nextSibling);
        elem.style.fontSize="1.2em";
        elem.style.fontWeight="bold";
    }
}
function getnextelement(node)
{
    if(node.nodeType==1)
        return node;
    if(node.nextSibling)
        return getnextelement(node.nextSibling);
    return null;
}
addLoadEvent(styleheadersibilings);