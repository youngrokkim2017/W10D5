import React from 'react';
import TodoList from './todo_list.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

/*
Create a mapStateToProps function
Create a prop called todos set to the return value of your allTodos selector passed the state
Create a mapDispatchToProps function
Create a prop called receiveTodo that accepts a todo and invokes a call to dispatch with the action returned from the receiveTodo action creator
Pass your mapStateToProps and mapDispatchToProps functions to connect
Call the result of this connect function with your TodoList presentational component as an argument
Export the result of this function call
*/