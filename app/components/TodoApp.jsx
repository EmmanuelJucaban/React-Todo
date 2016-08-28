var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id:1,
          text: 'Code some React'
        },
        {
          id: 2,
          text: 'Learn even more code'
        },
        {
          id:3,
          text: 'Master React'
        }
      ]
    };
  },

  handleAddTodo: function(text){
    // alert('new todo: ' + text );
    this.setState({
      todos: [...text] 
    });
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
