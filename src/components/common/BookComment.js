import React, { useEffect, useState } from "react"

export const BookComments = ({ firebase, bookId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookComments({
      bookId,
      onSnapshot: snapshot => {
        console.log(snapshot)
        const snapshotComments = []
        snapshot.forEach(doc => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        setComments(snapshotComments)
      },
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.username}</strong>
          <div>{comment.text}</div>
        </div>
      ))}
    </div>
  )
}
