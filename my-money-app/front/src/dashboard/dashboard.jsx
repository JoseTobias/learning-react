import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <ValueBox cols='12 4' color='success' icon='fas fa-piggy-bank'
                        value='R$ 10' text='Total de créditos' />
                    <ValueBox cols='12 4' color='danger' icon='fas fa-credit-card'
                        value='R$ 10' text='Total de Débitos' />
                    <ValueBox cols='12 4' color='primary' icon='fas fa-money-check-alt'
                        value='R$ 0' text='Valor consolidado' />
                </Content>
            </div>
        )
    }
}

export default Dashboard