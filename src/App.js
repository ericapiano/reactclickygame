import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    array: [],
    topScore: 0,
    score: 0,
    message: "",
    shake: "false"
  };
  clickPicture = id => {
    // Arrange the pictures in a random manner
    const shuffledArray = this.shuffleArray(cards);
    this.setState({ cards: shuffledArray });
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.array.includes(id)) {
      this.setState({
        score: 0,
        array: [],
        message: "Wrong! Click an image to start over!",
        shake: "true"
      });
    } else {
      this.setState({
        array: this.state.array.concat([id]),
        score: this.state.score + 1,
        message: "Correct! Keep going!",
        shake: "false"
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    // shake the wrapper if shake is set to true
  };
  shuffleArray = picturesArray => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [
        picturesArray[j],
        picturesArray[i]
      ];
    }
    return picturesArray;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DISNEY PRINCESS MATCH GAME</h1>
        </header>
        <h3 className="App-intro">
          <strong>
            Click a different image each time to earn a point. Click the same
            image twice in a row and you lose!
          </strong>
          <p className="score">
            <strong>
              Score: {this.state.score} | TopScore: {this.state.topScore}
            </strong>
          </p>
          <p className="message">
            <strong>{this.state.message}</strong>
          </p>
        </h3>
        <Wrapper
          shakeWrapper={this.state.shake}
          pictures={this.state.cards.map(picture => (
            <PictureCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} // to get rid of unique key prop warning
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
      </div>
    );
  }
}
export default App;
