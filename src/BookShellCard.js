import React from 'react'
import BooksView from './BooksView'

export default class BookShellCard extends React.Component {

    render() {
        return (
            <div>
                <div className="bookshelf">
                    {this.props.title && <h2 className="bookshelf-title">{this.props.title}</h2>}
                    <BooksView books={this.props.books} changeBookStatus={this.props.changeBookStatus}/>
                </div>
            </div>
        );
    }

}