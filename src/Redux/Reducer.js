//  import React from 'react'

 const initialState =[{displayName:'Gogu',
    username:'Edukondal',
    verified:true,
    text:'Try to use Twitter...',
    avatar:'https://pbs.twimg.com/profile_images/1398147289005268993/Qq1XDr_e_400x400.jpg',
    image:'https://th.bing.com/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'}]

 const PostReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'ADD_POST':
        return [...state,action.payload]
        default :
        return state
  }

 }

 export default PostReducer