import { useState, useEffect } from 'react';

function useSuggestion(initialItemListSelected, updateParent, autoClearOnSelect, inputID) {
	const [showSuggestion, setShowSuggestion] = useState(false);
	const [itemList, setItemList] = useState([]);
	const [itemListSelected, setItemListSelected] = useState(initialItemListSelected);

	useEffect(() => {
		setItemListSelected(initialItemListSelected);
	}, [initialItemListSelected]);

	const handleSelect = (e) => {
		const target = e.currentTarget;

		// Check if item is already selected
		const newItemID = Number(target.dataset.id);
		const itemIdx = itemListSelected.findIndex((item) => item.id === newItemID);

		if (itemIdx === -1) {
			const newItem = itemList.find((item) => item.id === newItemID);

			const newItems = itemListSelected.slice();
			newItems.push(newItem);

			setItemListSelected(newItems);
			setShowSuggestion(false);
			updateParent(newItems);

			document.getElementById(inputID).value = autoClearOnSelect ? '' : target.dataset.displayname;
		} else {
			document.getElementById(inputID).value = '';
			setShowSuggestion(false);
		}
	};

	const handleRemove = (e) => {
		const target = e.currentTarget;

		const itemToRemoveID = Number(target.dataset.id);
		const itemToRemoveIdx = itemListSelected.findIndex((item) => item.id === itemToRemoveID);

		if (itemToRemoveIdx >= 0) {
			const newItems = itemListSelected.slice();
			newItems.splice(itemToRemoveIdx, 1);

			setItemListSelected(newItems);
			updateParent(newItems);
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
