/* II had an issue here where I was using: 
export default function selectBook(book) {
    console.log('This book was selected:' ,book.title);
};

This was breaking because it was not a valid. Changes are the below:

*/

export function selectBook(book) {
    // selectBook is an ActionCreator. It needs to return an action, an object with a type of property.
    // swtich(the action.type with action.payload)
    // re-renders the state of redux
    switch(action.type) {
        case 'BOOK_SELECTED':
        payload: book
    };

    return state;
}
