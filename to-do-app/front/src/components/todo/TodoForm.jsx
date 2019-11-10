import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm row'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                placeholder='Cadastre uma tarefa'
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.description}/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd} />
                <IconButton style='info' icon='search'
                onClick={props.handleSearch} />
                <IconButton style='default' icon='times'
                onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}