var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed){
          message = 'Completed ';
          timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={ () => {
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type='checkbox' checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

});

export default connect()(Todo);
