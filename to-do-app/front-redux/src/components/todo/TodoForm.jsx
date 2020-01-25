import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className='todoForm row'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                    placeholder='Cadastre uma tarefa'
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)} />
                    <IconButton style='info' icon='search'
                    onClick={search} />
                    <IconButton style='default' icon='times'
                    onClick={() => clear()}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToPops = state => ({description: state.todo.description})
const mapDispatchToPops = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToPops, mapDispatchToPops)(TodoForm)