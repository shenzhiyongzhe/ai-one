// store/index.js
import { createStore, combineReducers } from 'redux';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    navigation: navigationReducer
    // 其他reducer...
});

const store = createStore(rootReducer);

export default store;