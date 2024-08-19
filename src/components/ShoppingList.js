import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addList, removeList, addItem, removeItem, updateItem } from '../actions/shoppingListActions';

const ShoppingLists = () => {
  const [newListName, setNewListName] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const lists = useSelector(state => state.shoppingList.lists);
  console.log('Lists:', lists);
  const dispatch = useDispatch();

  const handleAddList = () => {
    const listId = Date.now().toString();
    dispatch(addList(listId, newListName));
    setNewListName('');
  };

  const handleAddItem = (listId) => {
    const item = { id: Date.now(), name: newItemName };
    dispatch(addItem(listId, item));
    setNewItemName('');
  };

  return (
    <div>
      <h1>Shopping Lists</h1>
      <input
        type="text"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        placeholder="New list name"
      />
      <button onClick={handleAddList}>Add List</button>

      {Object.entries(lists).map(([listId, list]) => (
        <div key={listId}>
          <h2>{list.name}</h2>
          <ul>
            {list.items.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => dispatch(removeItem(listId, item.id))}>Remove</button>
                <button onClick={() => dispatch(updateItem(listId, item.id, prompt("New name", item.name)))}>
                  Update
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="New item name"
          />
          <button onClick={() => handleAddItem(listId)}>Add Item</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingLists;
