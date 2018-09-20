import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

import {applyMiddleware,compose, combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './reducers/proucts-reducers';

import usersReducer from './reducers/users-reducers';




const allReducers = combineReducers({
    products: productsReducer,
    user: usersReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(allReducers,
    {
    products: [{name: "Xiaomi"}],
    user: "maniek"
    },
    allStoreEnhancers
);




// console.log(store.getState());

// const updateUserAction = {
//     type: "updateUser",
//     payload: {
//         user: "mariusz"
//     }
// }
// store.dispatch(updateUserAction)

// console.log("after update ", store.getState());


// function usersReducer(state='', action) {
//     switch (action.type) {
//         case "updateUser":
//             return action.payload;
//         default:
//             return state;

//     }
// }

// const action = {
//     type: "changeState",
//     payload: {
//        newState: "new state"
//     }
// }
// store.dispatch(action)

ReactDOM.render(
    <Provider store={store}>

        <App randomProps="something from index.js"/>
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
