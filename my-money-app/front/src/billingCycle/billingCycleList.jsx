import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'

// import { connect } from 'react-redux'

class BillingCycleList extends Component {
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>mes</th>
                            <th>ano</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}
// const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

// export default connect(null,mapDispatchToProps)(BillingCycle)
export default BillingCycleList