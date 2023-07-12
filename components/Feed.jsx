'use client'

import React from 'react'
import {useState, useEffect} from 'react';
import PromptCard from './PromptCard';

const Feed = () => {

const [searchText,setSearchText] = useState('');
  const handleSearchChange = (e) =>{
    
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text"
          placeholder='Search for tag'
          value = {searchText}
          onChange={handleSearchChange}
          className='search_input peer'
          required
        />
      </form>

    <PromptCardList
      data ={[]}
      handleTagClick = {() => {}}
    />
    </section>
  )
}

export default Feed