export const SELECT_BOOK = 'SELECT_BOOK';
export const FILTER_BOOKS = 'FILTER_BOOK';

export const selectBook = (id) => ({
    type: SELECT_BOOK,
    bookId: id,
});

export const filterBooks = (id) => ({
    type: FILTER_BOOKS,
    categoryId: id,
});