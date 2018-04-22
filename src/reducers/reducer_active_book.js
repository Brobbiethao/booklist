// all reducers get 2 args, state and action.
// state argument is not the application state but the state the recuer is reponsible for.
// state = null is a check, if state is null then null otherwise state = state (ES6)
export default function(state = null, action) {
    // action.type if = case, return action.payload
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    };

    return state;
};
