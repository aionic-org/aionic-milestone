/* eslint-disable no-undef */
import { useState } from 'react';

function useSuggestion(initialItemListSelected, updateParent) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [itemListSelected, setItemListSelected] = useState(initialItemListSelected);

  const handleSelect = (e) => {
    const target = e.currentTarget;
    const newItem = itemList[Number(target.dataset.pos)];

    if (newItem) {
      const itemIdx = itemListSelected.findIndex((item) => item.id === newItem.id);

      document.getElementById('suggestionInput').value = '';

      if (itemIdx === -1) {
        itemListSelected.push(newItem);

        setItemListSelected(itemListSelected);
        setShowSuggestion(false);
        updateParent(itemListSelected);
      } else {
        setShowSuggestion(false);
      }
    } else {
      document.getElementById('suggestionInput').value = '';
      setShowSuggestion(false);
    }
  };

  const handleRemove = (e) => {
    const target = e.currentTarget;
    const itemToRemove = itemListSelected[Number(target.dataset.pos)];

    const itemIdx = itemListSelected.findIndex((item) => Number(item.id) === itemToRemove.id);

    if (itemIdx >= 0) {
      itemListSelected.splice(itemIdx, 1);
      setItemListSelected(itemListSelected);
      updateParent(itemListSelected);
    }
  };

  return [
    itemList,
    itemListSelected,
    setItemList,
    showSuggestion,
    setShowSuggestion,
    handleSelect,
    handleRemove
  ];
}

export default useSuggestion;
