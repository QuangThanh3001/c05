var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newTextLast);

var listItems = document.querySelectorAll('li');

var i ;
for (i - 0; i< listItems.length; i++){
    listItems[i].className = 'cool';

}