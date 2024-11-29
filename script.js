let generationCount = 0; // Track how many times symbols have been generated (no longer limiting it)

// Function to simulate generating symbols with delay and animation
function generateSymbols() {
    const inputText = document.getElementById("inputText").value;
    
    // Validate input - only letters, numbers, and spaces allowed
    if (!/^[a-zA-Z0-9 ]*$/.test(inputText)) {
        alert("Please enter only letters, numbers, and spaces.");
        return;
    }

    // Show the "Generating..." message and animate it
    const generatingMessage = document.getElementById("generatingMessage");
    generatingMessage.classList.add("show");

    // Random delay between 4 to 10 seconds for the generation
    const generationDelay = Math.floor(Math.random() * 7) + 4; // 4 to 10 seconds

    setTimeout(() => {
        // Hide "Generating..." message and start the generation process
        generatingMessage.classList.remove("show");

        const outputContainer = document.getElementById("output");
        outputContainer.innerHTML = ''; // Clear previous output

        // Generate 10 new symbols based on the input
        const generatedSymbols = [];
        for (let i = 0; i < 10; i++) {
            generatedSymbols.push(generateSymbolVariation(inputText));
        }

        // Display the new symbols with animation
        generatedSymbols.forEach((symbol) => {
            const div = document.createElement("div");
            div.textContent = symbol;
            div.classList.add("symbol-option");
            div.onclick = function() {
                copyTextToClipboard(symbol);
            };
            outputContainer.appendChild(div);
        });

        generationCount++; // You can keep incrementing if you want to track how many generations have occurred, but there's no cap now.
    }, generationDelay * 1000);
}

// Function to generate a random variation of text
function generateSymbolVariation(text) {
    let variation = '';
    for (let char of text) {
        variation += getRandomSymbol(char);
    }
    return variation;
}

// Function to map characters to random symbols
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
        'z': ['𝓏', '𝓩', '𝔷', '𝒂', '𝕩', '𝒵'],
        '0': ['𝟬', '𝟬', '⓿'],
        '1': ['𝟭', '𝟭', '➊'],
        '2': ['𝟮', '𝟮', '➋'],
        '3': ['𝟯', '𝟯', '➌'],
        '4': ['𝟰', '𝟰', '➍'],
        '5': ['𝟱', '𝟱', '➎'],
        '6': ['𝟲', '𝟲', '➏'],
        '7': ['𝟳', '𝟳', '➐'],
        '8': ['𝟴', '𝟴', '➑'],
        '9': ['𝟵', '𝟵', '➒'],
        ' ': [' '] // Spaces will remain as a space
    };
    return symbols[char.toLowerCase()] ? symbols[char.toLowerCase()][Math.floor(Math.random() * symbols[char.toLowerCase()].length)] : char;
}

// Function to copy text to clipboard
function copyTextToClipboard(text) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show "Text copied!" notification
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
