const initialState = {count: 0, cart:[]}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count+1}
            
        case 'DECREMENT':
            return { count: state.count-1}
    
        case 'ADDTOCART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        
        default:
            return state
    }
}


