const reducer = (state = {}, action) => {
  const { name, price, description, quantity, id } = action;
  switch (action.type) {
    case 'ADD_MERCH':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          description: description,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_MERCH':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;


