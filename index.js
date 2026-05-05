function markAsDone(todos) {
  var index = 0;
  
  while (index < todos.length) {
    todos[index] = 'done - ' + todos[index]  
    index++;
  }
  return todos;
}

