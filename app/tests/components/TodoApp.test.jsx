var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo on the todos state on handleAddTodo', () => {
    var todoText = 'Testing';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});

    todoApp.handleAddTodo(todoText);
    //  Grab the first element and get its text
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });


  it('should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'Test',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
