import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    Ciclos de Pagamento
                </Content>
            </div>
        )
    }
}

export default BillingCycle