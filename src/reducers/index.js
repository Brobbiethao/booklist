import { combineReducers } from 'redux';
import BooksReducer from './reducer_books' // the anonymous function is called BooksReducer on import
import ActiveBook from './reducer_active_book' // the anonymous function is called ActiveBook on import

// global object key of books and array
const rootReducer = combineReducers({
  // the state key books has an object of BooksReducer which is pulled from import.
  books: BooksReducer,
  // the state of activeBook has an object of ActiveBook which is pulled from import.
  activeBook: ActiveBook
});

export default rootReducer;
