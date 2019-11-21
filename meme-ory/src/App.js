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

class App extends Component{
  state = {
    memes,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  handleClick = id => {
    // const memes = this.state.memes.filter(memes => memes.id !== id);
    // this.setState({ memes });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title = "MEMEory"
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
