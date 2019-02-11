import React from 'react'

export default class BooksView extends React.Component {

    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books.map((book) =>
                            //I couldn't find out how to get rid of key warning. Tried many things but didn't worked.
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={this.props.changeBookStatus.bind(this, book)} value={book.shelf}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {
                                        book.authors.map(author =>
                                            <div className="book-authors">{author}</div>
                                        )
                                    }
                                </div>
                            </li>
                        )
                    }
                </ol>
            </div>
        );
    }

}