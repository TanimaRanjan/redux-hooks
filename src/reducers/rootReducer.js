import { combineReducers } from 'redux'
import subReducer from './subReducer'

const rootReducer = combineReducers({
    data:subReducer
})


export default rootReducer 