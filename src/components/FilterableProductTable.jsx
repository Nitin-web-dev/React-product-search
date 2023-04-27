import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react';

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
        <SearchBar onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}  filterText={filterText} 
    inStockOnly={inStockOnly}  />
        <ProductTable  filterText={filterText} 
    inStockOnly={inStockOnly} products={products} />
    </div>
  )
}
