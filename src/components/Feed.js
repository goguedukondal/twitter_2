import React from 'react'
import './Feed.css'
import TweetContainer from './TweetContainer'
import Post from './Post'
import { useSelector } from 'react-redux'
function Feed() {
  const PostData =useSelector((postDT)=>{return postDT})
  console.log(PostData)
  return (
    <div className='feedContainer'>
      <div className='feedHeader'>
        <h2>Home</h2>
      </div>
      <TweetContainer/>
      {PostData.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    </div>
  )
}

export default Feed
// key={post.text}
// displayName={post.displayName}
// username={post.username}
// verified={post.verified}
// text={post.text}
// avatar={post.avatar}
// image={post.image}