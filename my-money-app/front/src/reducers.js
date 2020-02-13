import { combineReducers } from 'redux'

import TabReducer from './common/tab/reducer'

const rootReducer = combineReducers({
    tab: TabReducer
})

export default rootReducer