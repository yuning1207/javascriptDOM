function preopareplaceholder()
            {
                if(!document.createElement)
                {
                    return false;
                }
                if(!document.createTextNode)
                {
                    return false;
                }
                if(!document.getElementById)
                {
                    return false;
                }
                if(!document.getElementById("imagegallery"))
                {
                    return false;
                }
                var placeholder=document.createElement("img");
                placeholder.setAttribute("id","placeholder");
                placeholder.setAttribute("src","picture/flower.jpg");
                placeholder.setAttribute("title","sanshengsanshi");
                placeholder.setAttribute("alt","flower");
                var description=document.createElement("p");
                description.setAttribute("id","description");
                var desctext=document.createTextNode("choose an image");
                description.appendChild(desctext);
                var gallery=document.getElementById("imagegallery");
                insertAfter(placeholder,gallery);
                insertAfter(description,placeholder);
            }
function preparegallery(){
                if(!document.getElementById){
                    return false;}
                if(!document.getElementsByTagName){
                    return false;}
                if(!document.getElementById("imagegallery")){
                    return false;}
                var gallery=document.getElementById("imagegallery");
                var links=gallery.getElementsByTagName("a");
                for(var i=0;i<links.length;i++){
                    links[i].onclick = function(){
                        return showpic(this)?false:true;
                }
            }
            }
function showpic(whichpic){
                if(!document.getElementById("placeholder")){
                          return false;}
                var source=whichpic.getAttribute("href");
                var placeHolder=document.getElementById("placeholder");
                if(placeHolder.nodeName!="IMG"){
                          return false;}
                placeHolder.setAttribute("src",source);
                if(document.getElementById("description")){
                          var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
                          var description=document.getElementById("description");
                          if(description.firstChild.nodeType==3){
                          description.firstChild.nodeValue=text;
                          }
                }
                return true;
            }
addLoadEvent(preparegallery);
addLoadEvent(preopareplaceholder);