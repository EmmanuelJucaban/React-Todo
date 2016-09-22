var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require("Todo");

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // Checks how many of a given component are rendered under a certain component
    // 1st arg is item we want to check 2nd is class of item we want to look for
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
