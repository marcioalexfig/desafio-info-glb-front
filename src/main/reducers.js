import { combineReducers } from 'redux'
import noticiaReducer from '../noticia/noticiaReducer'

const rootReducer = combineReducers({
    noticia: noticiaReducer
})

export default rootReducer