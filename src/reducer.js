export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    // this console.log will tell us which product we clicked
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM TO BASKET
            return {
                ...state,
                // initially ...state.basket is current item in basket 
                // then clicking add to basket we are adding action.item in basket
                // its like x = x + 1 where x is current items in basket
                basket: [...state.basket, action.item]
            };   
        case 'REMOVE_FROM_BASKET':
            // LOGIC FOR REMOVING ITEM TO BASKET
            let newBasket = [...state.basket];
            // checking that what we are removing is inside the basket or not
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exist in basket, remove it ...
                newBasket.splice(index, 1);
            } else {
                // warn shows in yellow in console
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket.`
                );
            }

            return {...state, basket: newBasket};

        default:
            return state;
    }
} 

export default reducer;   