// Generates a random number for question picking
export const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

// Shuffles the array for answer output
// Ensures that the answer will be in a different position each time
export const shuffleArray = array => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    swapElements(i, j, array);
  }
  return array;
};

export const swapElements = (idx1, idx2, array) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

// Creates a new array with the answers shuffled
export const generateAnswerArray = (incorrect, correct) => {
  const answers = incorrect;
  answers.push(correct);
  return shuffleArray(answers);
};