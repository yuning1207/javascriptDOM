function prepareInternalnav() {
    if (!document.getElementsByTagName)
        return false;
    if (!document.getElementById)
        return false;
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0)
        return false;
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length == 0)
        return false;
    var links = navs[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId))
            continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInternalnav);