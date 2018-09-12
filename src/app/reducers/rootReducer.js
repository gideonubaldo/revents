import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import testReducer from '../../features/testarea/testreducer'
import eventReducer from '../../features/event/eventReducer'
import modalsReducer from '../../features/modals/modalReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer
})

export default rootReducer