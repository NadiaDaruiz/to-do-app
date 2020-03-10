import React, { Component } from 'react';
import ToDoItem from './ToDoItem';


export default class ToDosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ""
        }
    }
    handleNewToDoItem = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    formSubmit = (e) => {
        e.preventDefault()
        if (this.state.userInput.trim() !== "") {
            this.props.addItem(this.state.userInput)

            this.setState({
                userInput: ""
            })
        }

    }

    render() {

        const todos = this.props.items
        const toDoItems = todos.map(el => {
            return (<ToDoItem item={el} key={el.text} updateItem={this.props.updateItem} />)
        })

        return (
            <div className="todos-container" >
                <form className="todo-form" onSubmit={this.formSubmit}>
                    <label className="input-item">
                        <input type="text" name="todo" value={this.state.userInput} onChange={this.handleNewToDoItem} />
                    </label>
                    <input type="submit" className="btn" value="ADD" />
                </form>
                <div className="todos">
                    <h3>TO DO</h3>
                    {toDoItems}
                </div>

            </div>
        )

    }
}
