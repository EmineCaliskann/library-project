import { BsSearchHeart } from "react-icons/bs";
import React from 'react'
import '../assets/styles/search.scss'

const Search = ({ setSearch }) => {
  return (
    <div className="search">
      <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Ara..." />
      <span >< BsSearchHeart size={30} /></span>
    </div>

  )
}

export default Search