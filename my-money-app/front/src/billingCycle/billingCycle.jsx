import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='fas fa-bars' target='tabList' />
                            <TabHeader label='Incluir' icon='fas fa-plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='fas fa-pencil-alt' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='fas fa-trash' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle