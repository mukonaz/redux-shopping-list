export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';

export const addList = (listId, name) => ({
  type: ADD_LIST,
  payload: { listId, name },
});


export const removeList = (listId) => ({
  type: REMOVE_LIST,
  payload: listId,
});


export const addItem = (listId, item) => ({
  type: ADD_ITEM,
  payload: { listId, item },
});

export const removeItem = (listId, itemId) => ({
  type: REMOVE_ITEM,
  payload: { listId, itemId },
});


export const updateItem = (listId, itemId, updatedItem) => ({
  type: UPDATE_ITEM,
  payload: { listId, itemId, updatedItem },
});


export const setItems = (listId, items) => ({
  type: SET_ITEMS,
  payload: { listId, items },
});
