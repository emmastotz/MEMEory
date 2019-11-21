import React, { Component } from "react";
// Components
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import MemeCard from "./components/MemeCard";
import memes from "./memes.json";
import Nav from "./components/Nav";
// Bootstrap Styling Elements
import Column from "./components/Column";
import Row from "./components/Row";
import Container from "./components/Row";

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
      <Wrapper>
        <Nav
          image = {this.state.image}
          score = {this.state.currentScore}
          topScore = {this.state.topScore}
        />

        <Title>
          |Try to click on each meme only once|
        </Title>

        <Container>
          <Row>
            {this.state.memes.map(meme => (
              <Column size="sm-3">  
                <MemeCard
                  key = {meme.id}
                  id = {meme.id}
                  image = {meme.image}
                  handleClick = {this.handleClick}
                />
              </Column>
            ))}
          </Row>
        </Container>
        
      </Wrapper>
    )
  };
};

export default App;
