import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book) }
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }

};

// This allows the container to access the state
function mapStateToProps(state) {
    return { 
        books: state.books
    }
}

// This allows the container to send  updates on the state back to redux
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//  connect allows mapStateToProps to call redux, mapDispatchToProps allows redux to see the container's change of the state
export default connect(mapStateToProps, mapDispatchToProps)(BookList);