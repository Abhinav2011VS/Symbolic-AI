// Function to transform text to different symbolic versions
function generateSymbols() {
  const inputText = document.getElementById("inputText").value;

  // Validate input - only letters and numbers allowed
  if (!/^[a-zA-Z0-9]*$/.test(inputText)) {
    alert("Please enter only letters and numbers.");
    return;
  }

  const outputContainer = document.getElementById("output");
  outputContainer.innerHTML = ''; // Clear previous output

  // Array to store generated symbolic transformations
  const generatedSymbols = [];

  // Generate 10 variations on the spot
  for (let i = 0; i < 10; i++) {
    generatedSymbols.push(generateSymbolVariation(inputText));
  }

  // Display each generated variation
  generatedSymbols.forEach((symbol) => {
    const div = document.createElement("div");
    div.textContent = symbol;
    div.classList.add("symbol-option");
    div.onclick = function() {
      copyTextToClipboard(symbol);
    };
    outputContainer.appendChild(div);
  });
}

// Function to generate a unique symbolic variation for the text
function generateSymbolVariation(text) {
  let variation = '';
  for (let char of text) {
    variation += getRandomSymbol(char);
  }
  return variation;
}

// Function to map each character to a random symbol or variant
function getRandomSymbol(char) {
  const symbols = {
    'a': ['𝒶', '𝓪', '𝔞', '𝗮', '𝕒', '𝒜'],
    'b': ['𝒷', '𝓫', '𝔟', '𝗯', '𝕓', '𝒝'],
    'c': ['𝒸', '𝓬', '𝔠', '𝗰', '𝕔', '𝒞'],
    'd': ['𝒹', '𝓭', '𝔡', '𝗱', '𝕕', '𝒟'],
    'e': ['𝑒', '𝓮', '𝔢', '𝗲', '𝕖', '𝒜'],
    'f': ['𝒻', '𝓯', '𝔣', '𝗳', '𝕗', '𝒻'],
    'g': ['𝑔', '𝓰', '𝔤', '𝗴', '𝕘', '𝒢'],
    'h': ['𝒽', '𝓱', '𝔥', '𝗵', '𝕙', '𝒯'],
    'i': ['𝒾', '𝓲', '𝔦', '𝗶', '𝕚', '𝒾'],
    'j': ['𝒿', '𝓳', '𝔧', '𝗷', '𝕛', '𝒥'],
    'k': ['𝓀', '𝓺', '𝔨', '𝗸', '𝕜', '𝒦'],
    'l': ['𝓁', '𝓵', '𝔩', '𝗹', '𝕝', '𝒻'],
    'm': ['𝓂', '𝓶', '𝔪', '𝗺', '𝕞', '𝒲'],
    'n': ['𝓃', '𝓷', '𝔫', '𝗻', '𝕟', '𝒩'],
    'o': ['𝑜', '𝓸', '𝔬', '𝗼', '𝕠', '𝒪'],
    'p': ['𝓅', '𝓹', '𝔭', '𝗽', '𝕡', '𝒫'],
    'q': ['𝓆', '𝓺', '𝔮', '𝗾', '𝕢', '𝒬'],
    'r': ['𝓇', '𝓻', '𝔯', '𝗿', '𝕣', '𝒜'],
    's': ['𝓈', '𝓼', '𝔰', '𝗌', '𝕤', '𝒮'],
    't': ['𝓉', '𝓽', '𝔱', '𝗍', '𝕥', '𝒯'],
    'u': ['𝓊', '𝓾', '𝔲', '𝗎', '𝕦', '𝒲'],
    'v': ['𝓋', '𝓿', '𝔳', '𝗏', '𝕧', '𝒲'],
    'w': ['𝓌', '𝓌', '𝔴', '𝗐', '𝕨', '𝒲'],
    'x': ['𝓍', '𝓧', '𝔵', '𝗑', '𝕩', '𝒳'],
    'y': ['𝓎', '𝓨', '𝔶', '𝒀', '𝕪', '𝒴'],
    'z': ['𝓏', '𝓩', '𝔷', '𝒁', '𝕩', '𝒵'],
    '0': ['𝟬', '𝟬', '⓿'],
    '1': ['𝟭', '𝟭', '➊'],
    '2': ['𝟮', '𝟮', '➋'],
    '3': ['𝟯', '𝟯', '➌'],
    '4': ['𝟰', '𝟰', '➍'],
    '5': ['𝟱', '𝟱', '➎'],
    '6': ['𝟲', '𝟲', '➏'],
    '7': ['𝟳', '𝟳', '➐'],
    '8': ['𝟴', '𝟴', '➑'],
    '9': ['𝟵', '𝟵', '➒']
  };

  // Default symbol for characters not mapped
  if (symbols[char.toLowerCase()]) {
    const symbolSet = symbols[char.toLowerCase()];
    return symbolSet[Math.floor(Math.random() * symbolSet.length)];
  } else {
    return char; // If no symbol available, return the character itself
  }
}

// Function to copy text to clipboard
function copyTextToClipboard(text) {
  const tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Show notification
  showNotification();
}

// Show notification when text is copied
function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');

  // Hide notification after 4 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 4000);
}
