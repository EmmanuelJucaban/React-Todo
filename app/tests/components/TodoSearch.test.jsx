var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call on search with entered input text', () => {
    var inputText = 'Yeee!';
    var spy = expect.createSpy();

    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = inputText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, 'Yeee!');
  });

  it('should call on search with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
