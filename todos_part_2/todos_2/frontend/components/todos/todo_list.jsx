import React from 'react';

// module.exports = () => <h3>Todo List goes here!</h3>

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((el) => {
                        return <TodoListItem item={el} key={el.id} />
                    })
                }
            </ul>
        );
    }
}

export default TodoList;