function displayaccesskeys()
{
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)
        return false;
    var links=document.getElementsByTagName("a");
    if(links.length<1)
        return false;
    var def=new Array();
    for(var i=0;i<links.length;i++)
    {
        var acc1=links[i].getAttribute("accesskey")
        if(!acc1)
            continue;
        var key=acc1;
        var content=links[i].lastChild.nodeValue;
        def[key]=content;
    }
    var dul=document.createElement("ul");
    for(key in def)
    {
        var content=def[key];
        var dli=document.createElement("li");
        var text=key+":"+content;
        var dli_text=document.createTextNode(text);
        dli.appendChild(dli_text);
        dul.appendChild(dli);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dul);
}
addLoadEvent(displayaccesskeys);