//your JS code here. If required.
function mapLetters(str) {
  // Initialize an empty object to store the letter indices
  const letterIndices = {};
  // Iterate over the input string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];
    // Check if the character is already a key in the object
    if (!letterIndices[char]) {
      // If not, add it as a key with an empty array as the value
      letterIndices[char] = [];
    }
    // Append the current index to the array associated with the character
    letterIndices[char].push(i);
  }
  // Return the object with the letter indices
  return letterIndices;
}

