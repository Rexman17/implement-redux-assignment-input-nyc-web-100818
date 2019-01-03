import { combineReducers, createStore } from 'redux';

// 1. reducer
function nameReducer(state = 'REX', action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return action.payload
    default:
      return state
  }
}

// 2. now we can create our store
const rootReducer = combineReducers({ name: nameReducer })
// 3. create store
const store = createStore(rootReducer)
export default store;

// 4. add provider
// 5. pass store to provider
// 6. connect component - map state to props, and a call to connect
// 7. NOW USE IT INSIDE OF THE INPUT
