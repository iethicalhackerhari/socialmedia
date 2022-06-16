import './Feed.scss'
import React from 'react'
import ShareBox from '../ShareBox/ShareBox'
import Post from '../Post/Post'

const Feed = () => {
  return (
    <div className='feed-container'>
      <ShareBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed