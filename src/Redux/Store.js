import { createStore} from 'redux'
import PostReducer from './Reducer'

const myStore=createStore(PostReducer)

myStore.subscribe(()=>{
    myStore.getState()
})
export default myStore