import { BOOKS } from '../../data/books';
import { SELECT_BOOK, FILTER_BOOKS } from '../actions/books.action';

const initialState = {
    books: BOOKS,
    filteredBooks: [],
    selected: null
};

const BookReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_BOOK:
            return {
                ...state,
                selected: state.books.find(book => book.id === action.bookId)
            };
        case FILTER_BOOKS:
            return {
                ...state,
                filteredBooks: state.books.filter(book => book.categoryId === action.categoryId)
            };
        default:
            return state;
    }
};

export default BookReducer;