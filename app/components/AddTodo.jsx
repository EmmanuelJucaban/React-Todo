var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      // Calls the onAddTodo function in parent component
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input ref='todoText' type='text' placeholder='What do you need todo?'/>
          <button className='button expanded'>Add todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;
