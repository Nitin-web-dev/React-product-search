import React from 'react'

export default function SearchBar() {
  return (
    <form >
        <input type="text" placeholder="Search product..." />
        <br />
        <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>

    </form>
  )
}
