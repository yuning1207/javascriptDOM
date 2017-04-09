function insertAfter(newElement,targetElement)
{
    var parent1=targetElement.parentNode;
    if(parent1.lastChild==targetElement)
    {
        parent1.appendChild(newElement);
    }
    else
    {
        parent1.insertBefore(newElement,targetElement.nextSibling);
    }
}