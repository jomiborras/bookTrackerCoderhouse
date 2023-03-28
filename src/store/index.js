import { createStore, combineReducers } from 'redux';

import CategoryReducer from './reducers/category.reducer';
import BookReducer from './reducers/book.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    books: BookReducer,
});

export default createStore(RootReducer);