import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        number: this.props.number
    }
    add = () => {
        this.changeNumber(1)
    }
    sub = () => {
        this.changeNumber(-1)
    } 
    changeNumber = (dif) => {
        this.setState({ number: this.state.number + dif })
    }
    render() {
        return (
            <div>
                <div>Número: {this.state.number}</div>
                <button onClick={this.add}>Inc</button>
                <button onClick={this.sub}>Dec</button>
                <button onClick={() => this.changeNumber(10)}>Inc 10</button>
                <button onClick={() => this.changeNumber(-10)}>Dec 10</button>
            </div>
        )
    }
}