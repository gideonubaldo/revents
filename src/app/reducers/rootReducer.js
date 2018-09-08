import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testreducer'

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer