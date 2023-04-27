import React from 'react'

export default function SearchBar({onFilterTextChange,filterText,inStockOnly,onInStockOnlyChange}) {
  return (
    <form >
        <input type="text"  value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} placeholder="Search product..." />
        <br />
        <label>
        <input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)} checked={inStockOnly} />
        {' '}
        Only show products in stock
      </label>

    </form>
  )
}
