import React, { Component } from 'react';
import '../css/App.scss'
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDoneContainer from './ToDoneContainer';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Help from '../views/Help';
import PageNotFound from '../views/PageNotFound';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { id: 0, text: "Wash my face", done: false },
                { id: 1, text: "Walk the dog", done: true },
                { id: 2, text: "Have Breakfast", done: false },
                { id: 3, text: "Call mom", done: false },
                { id: 4, text: "Do shopping", done: true },
                { id: 5, text: "Finish reading book", done: true },
                { id: 6, text: "Clean the bathroom", done: true },
                { id: 7, text: "Study  React", done: false },
                { id: 8, text: "Study JavaScript", done: false },
            ]
        }
    }
    updateItem = (id) => {
        let newState = this.state.items.map(item => {
            if (item.id === id) {
                item.done = !item.done
                return item
            } else {
                return item
            }
        })
        this.setState({
            items: newState
        })
    }

    addItem = (newItem) => {
        let item = { id: this.state.items.length, text: newItem, done: false }
        this.setState({
            items: [...this.state.items, item]
        })
    }

    render() {
        const toDos = this.state.items.filter(el => !el.done)
        const toDones = this.state.items.filter(el => el.done)

        return (
            <HashRouter>
                <div className="app">
                    <Navigation />
                    <Switch>
                        <Route path='/' exact>
                            <ToDosContainer items={toDos} updateItem={this.updateItem} addItem={this.addItem} />
                            <ToDoneContainer items={toDones} updateItem={this.updateItem} />
                        </Route>
                        <Route path='/help' exact>
                            <Help />
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}



