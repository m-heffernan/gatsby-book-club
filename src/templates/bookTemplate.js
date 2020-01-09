import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import { BookComments } from "../components/common/BookComment"
import { graphql } from "gatsby"

const BookTemplate = props => {
  return (
    <section>
      <BookItem
        bookCover={props.data.book.localImage.childImageSharp.fixed}
        authorName={props.data.book.author.name}
        bookSummary={props.data.book.summary}
        bookTitle={props.data.book.title}
      />
      <BookComments />
    </section>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      summary
      title
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      id
      author {
        name
      }
    }
  }
`

export default BookTemplate
