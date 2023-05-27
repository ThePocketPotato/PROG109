var newItem = document.getElementById('items').value;
function add_item(name) {
  
  var newEl = document.createElement('li');
  var newText = document.createTextNode(name);
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('ul')[0];
  position.appendChild(newEl);
}
