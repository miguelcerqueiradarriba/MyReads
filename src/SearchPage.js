import React from 'react'
import BookShellCard from "./BookShellCard";
import {Link} from "react-router-dom";

export default class SearchPage extends React.Component {

    state = {
        searchQuery: ''
    }

    queryBooks(event) {
        const query = event.target.value;
        this.setState(() => (
            {searchQuery: query}
        ));
    }

    render() {
        const booksToPrint = this.props.books.filter(book => {
            return book.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 ||
                book.authors.filter(author => author.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1).length > 0;
        });
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
                    <BookShellCard books={booksToPrint} changeBookStatus={this.props.changeBookStatus}/>
                </div>
            </div>
        )
    }

}