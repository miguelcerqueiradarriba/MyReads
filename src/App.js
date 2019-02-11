import React from 'react'
import './App.css'
import BookShellCard from './BookShellCard'
import {getAll, update} from "./BooksAPI";
import SearchPage from './SearchPage'
import {Link, Route} from "react-router-dom";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);

        this.changeBookStatus = this.changeBookStatus.bind(this);
    }

    state = {
        books: []
    }

    componentDidMount() {
        getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    changeBookStatus(book, event) {
        const shelf = event.target.value;
        update(book, shelf).then(() => {
            getAll().then((books) => {
                this.setState(() => ({
                    books
                }))
            })
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BookShellCard title="Currently Reading"
                                               books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                                               changeBookStatus={this.changeBookStatus}/>
                                <BookShellCard title="Want to Read"
                                               books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                                               changeBookStatus={this.changeBookStatus}/>
                                <BookShellCard title="Read"
                                               books={this.state.books.filter(book => book.shelf === 'read')}
                                               changeBookStatus={this.changeBookStatus}/>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link className="open-search" to='/search'>
                                <button>
                                    Add a book
                                </button>
                            </Link>
                        </div>
                    </div>
                )}/>
                <Route exact path='/search' render={() => (
                    <SearchPage books={this.state.books}
                                changeBookStatus={this.changeBookStatus}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
