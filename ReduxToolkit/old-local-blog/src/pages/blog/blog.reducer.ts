import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}
const initialState = {
  postList: initalPostList
}
export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    //imagerjs
    //immerjs giúp chúng ta mutate một state an toàn
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
