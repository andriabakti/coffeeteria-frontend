export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    payload: data
  }
}

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}