import React from 'react';
import './Quote.css';

const text = ["You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    "Strive not to be a success, but rather to be of value.",
    "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "If you want your children to turn out well, spend twice as much time with them, and half as much money.If you want your children to turn out well, spend twice as much time with them, and half as much money.",
];
const author = ["Erica Jong", "Albert Einstein", "Ann Landers", "Napoleon Hill", "Abigail Van Buren"];

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
            author: "Erica Jong",
        }
    }
    handleChange = () => {
        const randomIndex = Math.floor(Math.random() * text.length);
        this.setState((state) => ({
            text: text[randomIndex],
            author: author[randomIndex],
        }));
        console.log(randomIndex);
    }
    render() {
        console.log(this.state);
        return (
            <div id="quote-box">
                <div className='quote-text'>
                    <i className="fa fa-quote-left"></i>
                    <span id="text">{this.state.text}</span>
                </div>
                <div className='quote-author'>
                    -
                    <span id="author">{this.state.author}</span>
                </div>
                <div className='quote-buttons'>
                    <a target="_top" id="tweet-quote" href="twitter.com/intent/tweet"><i className='fa fa-twitter'></i></a>
                    <button id="new-quote" onClick={this.handleChange}>New quote</button>
                </div>


            </div>
        );
    }

}

export default Quote;