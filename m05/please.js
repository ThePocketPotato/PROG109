var table = 3;            
operator = GetValueFromUser("operator");
table = GetValueFromUser("table")
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;               
  var msg = '<h2>Multiplication Table</h2>';           
  if (operator == 'addition') {
    while (i < 11) {
      var next_value = i + table;
      msg += i + ' + ' + table + ' = ' + next_value + '<br>';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
      i++;
    }
  }
  return msg;
}

