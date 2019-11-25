import React, { Component } from "react";
// Components
import Title from "./components/Title";
import MemeCard from "./components/MemeCard";
import memes from "./memes.json";
import Nav from "./components/Nav";
import "./style.css";

function shuffleMemes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component{
  state = {
    memes,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    } else if (newScore === 12) {
      console.log("You win");
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledMemes = shuffleMemes(memes);
    this.setState({ memes: shuffledMemes });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container container-fluid">
          <Nav
            image = {this.state.image}
            score = {this.state.currentScore}
            topScore = {this.state.topScore}
          />
        </div>  
        <Title>
          Try to click on each meme only once.
        </Title>

        <div className="container meme-container">
          <div className="row">
          {this.state.memes.map(meme => (
            <div className="col-sm-4">

              <MemeCard
                key = {meme.id}
                id = {meme.id}
                image = {meme.image}
                handleClick = {this.handleClick}
              />
            </div>
          ))}
          </div>
        </div>
        <footer class="footer footer-home">
          <div class="container">
            <p>
              <a>Created by Emma</a> | 
              <a href="https://github.com/emmastotz/MEMEory">GitHub Repo</a>
            </p>
          </div>
        </footer>
      </div>
    )
  };
};

export default App;
