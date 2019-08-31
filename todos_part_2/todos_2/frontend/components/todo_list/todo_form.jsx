import React from 'react';
import { uniqueId } from '../../util/util.js';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            title: "",
            body: "",
            done: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.receiveTodo(this.state);
        this.setState({
            type: "",
            amount: 0,
            id: uniqueId()
        });
    }

    handleChange(e) {
        let state = {};
        state[e.target.className] = e.target.value;
        this.setState(state);
    }

    render() {
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <p> 
                    <label>Title:
                        <input
                        className="todo-title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>Body:
                        <textarea 
                        className="todo-body" 
                        onChange={this.handleChange} 
                        value={this.state.body} 
                        cols="30" 
                        rows="10">
                        </textarea>
                    </label>
                </p>
                <input type="submit" value="Add Todo"/>
            </form>
        );
    }
}

export default TodoForm;