import { combineReducers } from 'redux';
import shoppingListReducer from './ShoppingListReducer';


const rootReducer = combineReducers({
    shoppingList: shoppingListReducer,

});

export default rootReducer;

