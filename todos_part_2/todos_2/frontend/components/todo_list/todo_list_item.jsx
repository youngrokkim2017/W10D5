import React from 'react';

class TodoListItem extends React.Component {
    render() {
        return (
            <div>
            <li>{this.props.item.title}</li>
            </div>
        );
    }
}

export default TodoListItem;