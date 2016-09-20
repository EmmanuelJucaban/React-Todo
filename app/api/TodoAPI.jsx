var $ = require('jquery');

module.exports = {
  // should take an array
  setTodos: function(todos){
    // Verify is todos is an array
    if($.isArray(todos)){
      // Local storage wont save an array
      // Stringify turns it into strings
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  // this will return undefined by default
  },
  // should return an array
  getTodos: function(){
    // grabs the items from localStorage
    var stringsTodos = localStorage.getItem('todos');
    // if we dont have valid data all we do is return this array
    var todos  = [];
    try {
      todos = JSON.parse(stringsTodos);
    } catch (e){

    }
    // Just in case someone tries to maliciously pass in an object
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    // filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos.sort( (a,b) => {
      if(!a.completed && b.completed ){
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });


    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    return filteredTodos;
  }

};
