import React, { Component } from 'react';

class Review extends Component {

    hanleOnClick = () => {
        this.props.deleteReview(this.props.review.id)
    }
    
    render() {
        return (
            <div>
                <li>
                    {this.props.review.text}
                </li>
                <button onClick={this.hanleOnClick}> x </button>
            </div>
        );
    }
}

export default Review;
