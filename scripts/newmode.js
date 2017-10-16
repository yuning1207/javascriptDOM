function addclass(element,value)
{
    if(!element.className)
        element.className=value;
    else
    {
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function newmove()
{
    if(!document.getElementsByTagName)
        return 0;
    if(!document.getElementsByTagName("a"))
        return 0;
    var links=document.getElementsByTagName("a");
    var divs=document.getElementById("slideshow");
    links[0].onmouseover=function()
    {
        addclass(divs,"one");
    }
    links[1].onmouseover=function()
    {
        addclass(divs,"two");
    }
    links[2].onmouseover=function()
    {
        addclass(divs,"three");
    }
}
window.onload=newmove;