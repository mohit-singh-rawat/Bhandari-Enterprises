export const electronicsLoading = (data) => ({
    type: 'ELECTRONICS_LOADING',
})
export const electronicsSuccess = (data) => ({
    type: "ELECTRONICS_SUCCESS",
    payload: data,
})
export const electronicsError = (error) => ({
    type: "ELECTRONICS_ERROR",
    payload: {
        error
    }
})
export const addToCart = (data) => ({
    type: "ADD_TO_CART",
    payload: data,
  });
  
  export const removeFromCart = (dataId) => ({
    type: "REMOVE_FROM_CART",
    payload: dataId,
  });
  export const increaseQuantity = (Id) => ({
    type: 'INCREASE_QUANTITY',
    payload:Id,
  });
  
  export const decreaseQuantity = (Id) => ({
    type: 'DECREASE_QUANTITY',
    payload:Id,
  });