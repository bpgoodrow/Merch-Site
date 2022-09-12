import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;
  const currentState = {
    1: {
      name: 'Ryan & Aimen',
      price: '4',
      description: 'Redux action is not working correctly.',
      quantity: '4',
      id: 1
    }, 2: {
    name: 'Someone & Someone else',
    price: '40',
    description: 'Does Supreme sell JavaScript shirts?.',
    quantity: '14',
    id: 2
    }
  };

  const merchData = {
    name: 'Ryan & Aimen',
    price: '4',
    description: 'Redux action is not working correctly.',
    quantity: '4',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merch data to mainMerchList', () => {
    const { name, price, description, quantity, id } = merchData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };
    expect(merchListReducer(currentState, action)).toEqual({
      2: {
        name: 'Someone & Someone else',
        price: '40',
        description: 'Does Supreme sell JavaScript shirts?.',
        quantity: '14',
        id: 2
        }
    });
  });


});
// });