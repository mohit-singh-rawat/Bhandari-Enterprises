// Import action types from constants
import { ELECTRONICS_LOADING, ELECTRONICS_SUCCESS, ELECTRONICS_ERROR, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './constant';

// Initial state for electronics data
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Initial state for the cart
const ADD_TO_CART_initialState = {
  items: [],
};

// Electronics reducer
export const electronicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ELECTRONICS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ELECTRONICS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ELECTRONICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Cart reducer
export const cartReducer = (state = ADD_TO_CART_initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increase its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item does not exist, add it to the cart with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
