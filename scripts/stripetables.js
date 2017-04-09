function stripetables()
{
    if(!document.getElementsByTagName)
        return false;
    var tables=document.getElementsByTagName("table");
    if(tables.length<1)
        return false;
    var odd,rows;
    for(var i=0;i<tables.length;i++)
    {
        odd=false;
        rows=document.getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++)
        {
            if(rows.length<1)
                return false;
            if(odd==true)
            {
                addclass(rows[j],"odd");
                odd=false;
            }
            else
                odd=true;
        }
    }
}
function addclass(elem,value)
{
    if(!elem.className)
        elem.className=value;
    else
    {
        var newclassname=elem.className;
        newclassname+=" ";
        newclassname+=value;
        elem.className=newclassname;
    }
}
addLoadEvent(stripetables);