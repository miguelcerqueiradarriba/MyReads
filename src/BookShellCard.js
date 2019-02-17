import React from 'react'

function BooksView(props) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book) =>
                        //I couldn't find out how to get rid of key warning. Tried many things but didn't worked.
                        <li key={"li1_" + book.id}>
                            <div className="book" key={"div1_" + book.id}>
                                <div className="book-top" key={"div2_" + book.id}>
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: 'url(' + (book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '') + ')'
                                    }} key={"div3_" + book.id}></div>
                                    <div className="book-shelf-changer" key={"div4_" + book.id}>
                                        <select onChange={props.changeBookStatus.bind(this, book)}
                                                value={props.retrieveBookStatus(book) ? props.retrieveBookStatus(book) : "none"}
                                                key={"select1_" + book.id}>
                                            <option value="move" disabled key={"option1_" + book.id}>Move to...</option>
                                            <option value="currentlyReading" key={"option2_" + book.id}>Currently Reading</option>
                                            <option value="wantToRead" key={"option3_" + book.id}>Want to Read</option>
                                            <option value="read" key={"option4_" + book.id}>Read</option>
                                            <option value="none" key={"option5_" + book.id}>None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title" key={"div5_" + book.id}>{book.title}</div>
                                {
                                    book.authors && book.authors.map(author =>
                                        <div className="book-authors" key={"div6_" + book.id + "_" + author}>{author}</div>
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