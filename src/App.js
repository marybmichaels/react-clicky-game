import React, { Component } from "react";
import IconCard from "./components/IconCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import icons from "./icons.json";
import Navbar from "./components/Navbar";
import IconContainer from "./components/IconContainer";




class App extends Component {
  // Setting this.state.icons to the icons json array
  state = {
    icons,
    iconsShuffled: [],
    currentScore: 0,
    highScore: 0,
    clickedIcons: [],
    comment: "Click an image to begin!"
  };


  shuffleImgs = id => {
    let iconsShuffled = this.state.icons;
    for (let i = iconsShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [iconsShuffled[i], iconsShuffled[j]] = [iconsShuffled[j], iconsShuffled[i]];
    }
    this.setState({
      iconsShuffled
    })
  }

  IconClicked = id => {
    console.log(id, "Image is clicked!")
    let clickFlag = false;
    //when img is clicked, check if id is in clickedIcons array
    for (let i = 0; i < this.state.clickedIcons.length; i++) {
      if (id === this.state.clickedIcons[i]) {
        console.log("IF is true");
        clickFlag = true; //set a flag to differentiate which state changes to make
      }
    }
        
    if(clickFlag) {
        // - if id already clicked, setState of comment to "Wrong guess! Play again?", setState of currentScore to 0, empty array
      this.setState({
          comment: "Whoops, game over! Click to play again!",
          currentScore: 0,
          clickedIcons: []
        })
    } else {
    // - if not, push id to clickedIcons, setState currentScore to currentScore + 1, shuffle image cards (do this in render, not here), setState of comment to "Good Job, keep guessing!"
        
    //throw the current state into a new variable so state can change values and thus update
        const newClickedIcons = this.state.clickedIcons;
        newClickedIcons.push(id);
    //throw the current state into a new variable so state can change values and thus update
        const newScore = this.state.currentScore +1;
        let newHighScore = this.state.highScore;

    //if the current score beats the previous highest score, then update to the new highest score
        if(newScore > this.state.highScore) {
           newHighScore = newScore;
        }
        this.setState({
          clickedIcons: newClickedIcons,
          currentScore: newScore,
          highScore: newHighScore,
          comment: "Good job, keep guessing!"
        })
        this.shuffleImgs(); //only shuffle the images when the game is still in play
      }
  }

  render() {
    return (
      <Wrapper>
        <Jumbotron>Symbol Clicky Game</Jumbotron>
        <Navbar
          comment={this.state.comment}
          currentScore={this.state.currentScore}
          topScore={this.state.highScore}
        />
        <IconContainer>
          {this.state.icons.map(icons => (
            <IconCard
              id={icons.id}
              key={icons.id}
              image={icons.image}
              onClick={() => { this.IconClicked(icons.id) }}
            />
          ))}
        </IconContainer>
      </Wrapper>
    );
  }
}

export default App;
