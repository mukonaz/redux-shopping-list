

import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, SET_ITEMS, ADD_LIST, REMOVE_LIST } from '../actions/shoppingListActions';

const initialState = {
  lists: {},
};

const shoppingListReducer = (state = initialState, action) => {
  console.log('Action:', action);
  console.log('State before:', state);
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: { name: action.payload.name, items: [] },
        },
      };

    case REMOVE_LIST:
      const newLists = { ...state.lists };
      delete newLists[action.payload];
      return {
        ...state,
        lists: newLists,
      };

    case ADD_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            items: [...state.lists[action.payload.listId].items, action.payload.item],
          },
        },
      };

    case REMOVE_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            items: state.lists[action.payload.listId].items.filter(
              item => item.id !== action.payload.itemId
            ),
          },
        },
      };

    case UPDATE_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            items: state.lists[action.payload.listId].items.map(item =>
              item.id === action.payload.itemId ? action.payload.updatedItem : item
            ),
          },
        },
      };

    case SET_ITEMS:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            items: action.payload.items,
          },
        },
      };

    default:
      console.log('State after:', state);
      return state;
  }
};

export default shoppingListReducer;
