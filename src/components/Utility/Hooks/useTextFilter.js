import { useState } from 'react'

function useTextFilter(key, items) {
  const [filterText, setFilterText] = useState('')
  const [itemsFiltered, setItemsFiltered] = useState(items)

  const filterByText = text => {
    setFilterText(text)
    if (text.length) {
      setItemsFiltered(
        items.filter(item => (item[key].toLowerCase().includes(text) ? true : false))
      )
    } else {
      setItemsFiltered([])
    }
  }

  return [itemsFiltered, filterByText, filterText]
}

export default useTextFilter
