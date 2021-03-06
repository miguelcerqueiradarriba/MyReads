import React from 'react'
import BookShellCard from "./BookShellCard";
import {Link} from "react-router-dom";
import {getAll, search} from "./BooksAPI";

export default class SearchPage extends React.Component {
    state = {
        books: []
    }

    queryBooks(event) {

        if (!event.target.value) {
            this.setState(() => ({
                books: []
            }));
            return;
        }

        search(event.target.value).then((books) => {
            if (!books.error) {
                this.setState(() => ({
                    books: books
                }))
            } else {
                this.setState(() => ({
                    books: []
                }));
            }
        })
    }

    componentDidMount() {
        getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={this.queryBooks.bind(this)} type="text"
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShellCard mainBooks={this.props.mainBooks} books={this.state.books} changeBookStatus={this.props.changeBookStatus}
                                       retrieveBookStatus={this.props.retrieveBookStatus}/>
                </div>
            </div>
        )
    }

}