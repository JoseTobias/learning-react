import React from 'react'

const people = ['Paula', 'Maria', 'José', 'João']

export default props => {
    const generateItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {generateItens(people)}
        </ul>
    )
}