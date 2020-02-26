// import uuid from 'uuid/v4';

export const initialState = {
    isAppLoading: true,
    isLoggedIn: false,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP_LOADING': {
            return {
                ...state,
                isAppLoading: false,
                isLoggedIn: false
            }
        }
        case 'LOGGED_IN': {
            // return [...state, {
            //     title: action.book.title,
            //     author: action.book.author,
            //     id: uuid()
            // }
            // ]
            return {
                ...state,
                isAppLoading: false,
                isLoggedIn: true,
                user: action.user
            };
        }
        case 'LOGGED_OUT': {
            return { ...state, ...initialState };
        }
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
} 