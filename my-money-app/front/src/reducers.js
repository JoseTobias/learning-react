import { combineReducers } from 'redux'

import TabReducer from './common/tab/reducer'
import BillingCycleReducer from './billingCycle/reducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer