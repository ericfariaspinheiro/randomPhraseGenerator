import React from 'react';
import './App.css'

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  }
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = ()=> {
    const newNum = Math.floor(Math.random()*7);

    this.setState(()=>({
      number: newNum
    }))
  }

  render(){
    return (
      <div id="quote-box" style={{margin:"auto", backgroundColor: "darkcyan", textAlign:"center", width:"600px", height:"200px", borderRadius:"10px", fontFamily:"sans-serif"}}>
        <p id="text" style={{color: "white", fontWeight:"bold", paddingTop:"15px", paddingLeft:"10px", paddingRight:"10px"}}>{quotes[this.state.number]["quote"]}</p>
        <p id="author" style={{color: "white", fontWeight:"bold", paddingTop:"5px"}}>{quotes[this.state.number]["author"]}</p>
        <button id="new-quote" onClick={this.onButtonClick}>New quote</button><br />
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet this!</a>
      </div>
    )
  }
}

export default App;
