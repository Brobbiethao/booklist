import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)

/*

A container requires mapStateToProps to literally have the state mapped to the container and available as this.props.object.
This is achieved by the connect method calling mapStateToProps and the envoked BookDetail Component to render.
*/