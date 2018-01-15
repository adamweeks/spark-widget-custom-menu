import React from 'react';
import PropTypes from 'prop-types';

function TodoDisplay({todo, onDone}) {
  function handleDone() {
    onDone(todo);
  }

  const done = todo.completed ? 'Done' : 'Done?';

  return (
    <div>
      {todo.name} <button onClick={handleDone}>{done}</button>
    </div>
  );
}

TodoDisplay.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default TodoDisplay;
