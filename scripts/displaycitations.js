function displaycitations()
{
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)
        return false;
    var blockquotes=document.getElementsByTagName("blockquote");
    if(blockquotes.length<1)
        return false;
    for(var i=0;i<blockquotes.length;i++)
    {
        if(!blockquotes[i].getAttribute("cite"))
            continue;
        var url=blockquotes[i].getAttribute("cite");
        var link=document.createElement("a");
        var source=document.createTextNode("source");
        link.setAttribute("href",url);
        link.appendChild(source);
        var sup=document.createElement("sup");
        var quotechildren=blockquotes[i].getElementsByTagName("*");
        if(quotechildren.length<1)
            continue;
        var elem=quotechildren[quotechildren.length-1];
        sup.appendChild(link);
        elem.appendChild(sup);
    }
}
addLoadEvent(displaycitations);