# Nooks Brain Games
Nooks Brain Games is a simple trivia application.

![Screen Shot 2020-11-01 at 5 37 28 PM](https://user-images.githubusercontent.com/52799217/97821914-eccd8300-1c68-11eb-8002-c6b13f421dea.png)

# Getting Started
To get started, clone the repo onto your computer. Open the client folder and run _**yarn start**_. Then in your browser open http://localhost:3000 to view Nooks Brain Games.

# Highlights
* Calculate the current rounds score by taking a specific section of an array
```javascript
    let currentScore = 0;
    // 10 questions in a round, the round number * 10 will give us the max
    // by subtracting 10 we get the first index of the round answers we need
    let roundArray = answers.slice(round * 10 - 10);
    roundArray.forEach(answer => {
      if(answer[1]) currentScore += 10;
    });
  };
```
* Passing data from the child component to the parent component
* Shuffle answers to prevent pattern matching
```javascript
  // helper methods
  // shuffling the array
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    swapElements(i, j, array);
  }
  return array;

  // generates a shuffled array after the incorrect and correct data is combined
  const answers = incorrect.slice();
  answers.push(correct);
  return shuffleArray(answers);
```

# Known Issues
* Container resizing issue for smaller screen at the end of the round
* Final score doesn't calculate the last answer

# Unimplemented Features
Below is a list of features that I would liked to have added:
* Bonus rounds with Animal Crossing specific trivia
* Ability for the user to see previous questions and their answer during the round
  * Appended to the side of the question container as a tabbed, and numbered
* Dynamic layout for different screen sizes
* Game music for each round and sound effects for button clicking
* Toggle to turn music or sound on/off
* Option for a dark/light theme
* Animations for choosing the right or wrong answer
* Countdown for round starting
* Timer for questions
* High score or ranking system for players
