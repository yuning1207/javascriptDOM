function displayabbrevistions()
{
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)
        return false;
    var abbrevistions=document.getElementsByTagName("abbr");
    if(abbrevistions.length<1)
        return false;
    var defs=new Array();
    for(var i=0;i<abbrevistions.length;i++)
    {
        var current_abbr=abbrevistions[i];
        if(current_abbr.childNodes.length<1)
            continue;
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
    }
    var dlist=document.createElement("dl");
    for(key in defs)
    {
        var definition=defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1)
        return false;
    var header=document.createElement("h2");
    var header_text=document.createTextNode("abbrevistions");
    header.appendChild(header_text);
    var br=document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
addLoadEvent(displayabbrevistions);