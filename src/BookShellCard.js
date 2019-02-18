import React from 'react'

function BooksView(props) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book) =>
                        <li key={"books_" + book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: 'url(' + (book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '') + ')'
                                    }}></div>
                                    <div className="book-shelf-changer">
                                        <select onChange={props.changeBookStatus.bind(this, book)}
                                                value={props.retrieveBookStatus(book) ? props.retrieveBookStatus(book) : "none"}>
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
                                    book.authors && book.authors.map(author =>
                                        <div className="book-authors" key={"authors_" + book.id + "_" + author}>{author}</div>
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

export default class BookShellCard extends React.Component {

    render() {
        return (
            <div>
                <div className="bookshelf">
                    {this.props.title && <h2 className="bookshelf-title">{this.props.title}</h2>}
                    <BooksView books={this.props.books} changeBookStatus={this.props.changeBookStatus}
                    retrieveBookStatus={this.props.retrieveBookStatus}/>
                </div>
            </div>
        );
    }

}