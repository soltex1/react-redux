import React from 'react'
import CommentCard from './CommentCard'

function CommentsList ({ comments }) {
  return (
    <div>
      {comments.map((comment) => <CommentCard key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default CommentsList
