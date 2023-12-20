import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ["You take your life in your own hands, and what happens? A terrible thing, no one to blame.", "Strive not to be a success, but rather to be of value.", "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", "Whatever the mind of man can conceive and believe, it can achieve.", "If you want your children to turn out well, spend twice as much time with them, and half as much money.If you want your children to turn out well, spend twice as much time with them, and half as much money."],
      author: ["Erica Jong", "Albert Einstein", "Ann Landers", "Napoleon Hill", "Abigail Van Buren"],
    };
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <i class="fa fa=quote-left"></i>
          <span>{this.state.text}</span>
        </div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.handleSubmit}></button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
      </div>
    );
  }

}

export default App;
