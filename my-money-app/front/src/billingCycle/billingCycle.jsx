import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import { selectTab, showTabs } from '../common/tab/actions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from '../billingCycle/billingCycleList'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
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
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'><h1>tabCreate</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>tabUpdate</h1></TabContent>
                            <TabContent id='tabDelete'><h1>tabDelete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

export default connect(null,mapDispatchToProps)(BillingCycle)