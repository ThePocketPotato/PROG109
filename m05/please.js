var table = 0;            
table = GetValueFromUser()
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);

function GetValueFromUser() {
  var greetingMessage = 'Hello. How are you doing today?';
    greetingMessage += " Please enter the table number.";
  return prompt(greetingMessage);
}

function GetTableContent(table) {
  var i = 1;               
  var msg = '<h2>Multiplication Table</h2>';           
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
     i++;
  }
  return msg;
}

