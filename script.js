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

    // Calculate delay based on input text length
    const charCount = inputText.length;
    let generationDelay;

    // For inputs with 1 to 10 characters
    if (charCount >= 1 && charCount <= 10) {
        generationDelay = Math.random() * 0.5 * charCount + 0.5 * charCount; // Gradually increase time per character
    } 
    // For inputs longer than 10 characters
    else {
        generationDelay = Math.random() * 4 + 6; // Between 6 seconds and 10 seconds
    }

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

        generationCount++; // Track the number of generations
    }, generationDelay * 1000); // Convert delay to milliseconds
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
        'a': ['𝒶', '𝓪', '𝔞', '𝗮', '𝕒', '𝒜', '𝒜', '𝓐', '𝔸', '𝒶', '𝒜', '𝙖', '𝗮', '𝔄', '𝓐', '𝖺', '𝒶', '𝑎', '𝒶', '𝓐', '𝒂', '𝑎', '𝔸', '𝒜', '𝒽', '𝓪', '𝔸', '𝖆'],
        'b': ['𝒷', '𝓫', '𝔟', '𝗯', '𝕓', '𝒝', '𝓑', '𝔹', '𝒷', '𝑏', '𝓫', '𝑩', '𝔅', '𝗕', '𝓑', '𝒷', '𝗯', '𝔹', '𝓫', '𝑏', '𝓫', '𝓫', '𝓑', '𝒷', '𝑩', '𝒷'],
        'c': ['𝒸', '𝓬', '𝔠', '𝗰', '𝕔', '𝒞', '𝓒', 'ℂ', '𝒸', '𝑐', '𝓬', '𝒞', '𝒸', '𝗖', '𝒸', '𝓬', '𝒸', '𝓬', '𝑒', '𝑇', '𝓬', '𝓒', '𝒸', '𝒸', '𝒞', '𝔠'],
        'd': ['𝒹', '𝓭', '𝔡', '𝗱', '𝕕', '𝒟', '𝓓', '𝒟', '𝒹', '𝑑', '𝓭', '𝔇', '𝒟', '𝗗', '𝒹', '𝒹', '𝓭', '𝓭', '𝑑', '𝒿', '𝓓', '𝒸', '𝒸', '𝒸', '𝓭', '𝒹'],
        'e': ['𝑒', '𝓮', '𝔢', '𝗲', '𝕖', '𝒜', '𝓔', 'ℰ', '𝑒', '𝑒', '𝓮', '𝒺', '𝑬', '𝒆', '𝒦', '𝑒', '𝑒', '𝑒', '𝒶', '𝑒', '𝑒', '𝑒', '𝓮', '𝑬', '𝒶', '𝓮', '𝒜'],
        'f': ['𝒻', '𝓯', '𝔣', '𝗳', '𝕗', '𝒻', '𝓕', '𝒻', '𝒻', '𝑓', '𝓯', '𝒻', '𝔉', '𝗙', '𝒻', '𝓯', '𝓯', '𝑓', '𝒻', '𝔉', '𝓯', '𝓯', '𝒻', '𝒻', '𝓯', '𝓯'],
        'g': ['𝑔', '𝓰', '𝔤', '𝗴', '𝕘', '𝒢', '𝒢', '𝓖', 'ℊ', '𝑔', '𝓖', '𝒢', '𝗚', '𝔾', '𝑔', '𝓖', '𝒢', '𝑔', '𝑔', '𝒢', '𝓖', '𝑔', '𝑔', '𝓖', '𝔾', '𝑔', '𝓖'],
        'h': ['𝒽', '𝓱', '𝔥', '𝗵', '𝕙', '𝒯', '𝓗', 'ℍ', '𝒽', '𝒽', '𝓱', '𝗛', '𝒯', '𝔥', '𝒽', '𝒻', '𝒽', '𝒽', '𝓱', '𝓗', '𝒽', '𝒻', '𝒽', '𝒽', '𝓗', '𝓱'],
        'i': ['𝒾', '𝓲', '𝔦', '𝗶', '𝕚', '𝒾', '𝓘', 'ℐ', '𝒾', '𝒾', '𝓲', '𝑰', '𝒾', '𝒾', '𝒾', '𝓲', '𝒾', '𝑰', '𝒾', '𝑖', '𝒾', '𝓲', '𝑰', '𝑖', '𝒾', '𝒾', '𝑰'],
        'j': ['𝒿', '𝓳', '𝔧', '𝗷', '𝕛', '𝒥', '𝓙', '𝒥', '𝒿', '𝑗', '𝓳', '𝔍', '𝒿', '𝗝', '𝑗', '𝑗', '𝓳', '𝒿', '𝑗', '𝑗', '𝒿', '𝒿', '𝓳', '𝑗', '𝑱'],
        'k': ['𝓀', '𝓺', '𝔨', '𝗸', '𝕜', '𝒦', '𝒦', '𝓚', '𝒌', '𝑘', '𝓺', '𝒦', '𝑲', '𝒦', '𝗞', '𝒦', '𝑘', '𝓀', '𝑘', '𝑲', '𝒦', '𝑲', '𝓚', '𝑲', '𝓚', '𝑲'],
        'l': ['𝓁', '𝓵', '𝔩', '𝗹', '𝕝', '𝒻', '𝓛', 'ℒ', '𝒍', '𝑙', '𝓵', '𝔏', '𝒻', '𝓛', '𝗟', '𝒻', '𝓛', '𝑳', '𝓛', '𝓵', '𝑙', '𝒻', '𝑳', '𝑳', '𝑙', '𝓛', '𝓛'],
        'm': ['𝓂', '𝓶', '𝔪', '𝗺', '𝕞', '𝒲', '𝓜', 'ℳ', '𝓶', '𝑚', '𝓶', '𝔐', '𝒲', '𝒲', '𝑴', '𝓶', '𝑴', '𝑚', '𝒲', '𝒲', '𝓶', '𝓜', '𝓶', '𝓜', '𝓶', '𝒲', '𝓶'],
        'n': ['𝓃', '𝓷', '𝔫', '𝗻', '𝕟', '𝒩', '𝓞', '𝑛', '𝑛', '𝓷', '𝒩', '𝓷', '𝗡', '𝓷', '𝓷', '𝒩', '𝓷', '𝓷', '𝓷', '𝑵', '𝓷', '𝑛', '𝓷', '𝓷', '𝓷', '𝑵'],
        'o': ['𝑜', '𝓸', '𝔬', '𝗼', '𝕠', '𝒪', '𝓞', '𝒪', '𝒸', '𝑜', '𝓞', '𝒪', '𝓞', '𝓞', '𝑜', '𝓞', '𝓞', '𝒪', '𝑜', '𝑜', '𝓞', '𝒾', '𝒪', '𝑒', '𝓞', '𝓞', '𝓞'],
        'p': ['𝓅', '𝓹', '𝔭', '𝗽', '𝕡', '𝒫', '𝓟', 'ℙ', '𝓹', '𝑝', '𝓹', '𝓟', '𝑷', '𝓟', '𝗣', '𝓟', '𝑝', '𝓟', '𝓹', '𝑝', '𝑷', '𝓟', '𝓟', '𝓟', '𝑷', '𝓟'],
        'q': ['𝓆', '𝓺', '𝔮', '𝗾', '𝕢', '𝒬', '𝓠', '𝒬', '𝓺', '𝑞', '𝓺', '𝔮', '𝑄', '𝒬', '𝓺', '𝒬', '𝓺', '𝓺', '𝓺', '𝑞', '𝓺', '𝓺', '𝒬', '𝓺', '𝓺', '𝑄', '𝓺'],
        'r': ['𝓇', '𝓻', '𝔯', '𝗿', '𝕣', '𝒜', '𝓡', 'ℝ', '𝓻', '𝑟', '𝓻', '𝔍', '𝒜', '𝗥', '𝒓', '𝓻', '𝓻', '𝓻', '𝓻', '𝑟', '𝑹', '𝓻', '𝓻', '𝒷', '𝓻', '𝓻', '𝓻'],
        's': ['𝓈', '𝓼', '𝔰', '𝗌', '𝕤', '𝒮', '𝓢', '𝒮', '𝓼', '𝑠', '𝓼', '𝔖', '𝓢', '𝒮', '𝒮', '𝓼', '𝑆', '𝓼', '𝒮', '𝑆', '𝓼', '𝓼', '𝑠', '𝓼', '𝓼', '𝓼'],
        't': ['𝓉', '𝓽', '𝔱', '𝗍', '𝕥', '𝒯', '𝓣', '𝒯', '𝓽', '𝑡', '𝓽', '𝑻', '𝒯', '𝗧', '𝓽', '𝑻', '𝒯', '𝒯', '𝒯', '𝓽', '𝑻', '𝓽', '𝑻', '𝑻', '𝓽', '𝓽'],
        'u': ['𝓊', '𝓾', '𝔲', '𝗎', '𝕦', '𝒲', '𝓤', '𝒲', '𝓾', '𝑢', '𝓾', '𝓤', '𝒲', '𝑼', '𝓾', '𝑢', '𝑼', '𝓾', '𝑼', '𝓾', '𝑼', '𝓾', '𝓾', '𝓾', '𝓾', '𝓾'],
        'v': ['𝓋', '𝓿', '𝔳', '𝗏', '𝕧', '𝒲', '𝓥', '𝒲', '𝓿', '𝑣', '𝓿', '𝓥', '𝑽', '𝒲', '𝗩', '𝓿', '𝓿', '𝑣', '𝒲', '𝓿', '𝒲', '𝑽', '𝓿', '𝓿', '𝒲', '𝑽'],
        'w': ['𝓌', '𝓌', '𝔴', '𝗐', '𝕨', '𝒲', '𝓦', '𝒲', '𝓌', '𝑤', '𝓌', '𝓦', '𝒲', '𝑾', '𝓦', '𝑾', '𝓦', '𝑾', '𝓦', '𝓦', '𝓦', '𝓦', '𝓦', '𝓦', '𝓦', '𝓦'],
        'x': ['𝓍', '𝓧', '𝔵', '𝗑', '𝕩', '𝒳', '𝓧', '𝒳', '𝓧', '𝑥', '𝓧', '𝑿', '𝒳', '𝗫', '𝓧', '𝓧', '𝓧', '𝑥', '𝑿', '𝓧', '𝑥', '𝑿', '𝒳', '𝑿', '𝓧', '𝓧'],
        'y': ['𝓎', '𝓨', '𝔶', '𝒀', '𝕪', '𝒴', '𝓨', '𝒴', '𝓎', '𝑦', '𝓎', '𝒴', '𝑌', '𝓎', '𝓎', '𝓎', '𝓎', '𝓎', '𝑌', '𝑌', '𝓎', '𝑌', '𝑌', '𝓎', '𝓎', '𝑌'],
        'z': ['𝓏', '𝓩', '𝔷', '𝒂', '𝕩', '𝒵', '𝓩', '𝒵', '𝓏', '𝑧', '𝓩', '𝒵', '𝔷', '𝒵', '𝓩', '𝓩', '𝑿', '𝓩', '𝓩', '𝓩', '𝑿', '𝒶', '𝓩', '𝓩', '𝑿', '𝒵'],
        '0': ['𝟬', '𝟬', '⓿', '𝟢', '𝕴', '𝟘', '𝟬', '𝑜', '𝟬', '𝕺', '𝟬', '𝟬', '𝟬', '𝟬', '𝟬', '𝑶', '𝟬', '𝓸', '𝟬', '𝟬', '𝑶', '𝟬', '𝟬', '𝟬'],
        '1': ['𝟭', '𝟭', '➊', '𝟣', '𝖨', '𝟭', '𝟣', '𝕀', '𝟭', '𝑰', '𝟣', '𝟭', '𝟣', '𝑰', '𝟭', '𝟣', '𝑰', '𝟭', '𝟷', '𝟭', '𝟭', '𝟭', '𝑰', '𝟣'],
        '2': ['𝟮', '𝟮', '➋', '𝟤', '𝕮', '𝟮', '𝟤', '𝒲', '𝟮', '𝑪', '𝟤', '𝟮', '𝟤', '𝑪', '𝟮', '𝑪', '𝟮', '𝟮', '𝒲', '𝟮', '𝟮', '𝟮', '𝑪', '𝑪', '𝟮'],
        '3': ['𝟯', '𝟯', '➌', '𝟥', '𝖭', '𝟯', '𝟥', '𝒲', '𝟯', '𝑵', '𝟥', '𝟯', '𝟥', '𝑵', '𝟯', '𝑵', '𝟯', '𝟯', '𝒲', '𝟯', '𝟯', '𝟯', '𝑵', '𝑵', '𝟯'],
        '4': ['𝟰', '𝟰', '➍', '𝟜', '𝕲', '𝟰', '𝟜', '𝒲', '𝟰', '𝑮', '𝟜', '𝟰', '𝟜', '𝑮', '𝟰', '𝑮', '𝟰', '𝟰', '𝒲', '𝟰', '𝟰', '𝟰', '𝑮', '𝑮', '𝟰'],
        '5': ['𝟱', '𝟱', '➎', '𝟧', '𝕳', '𝟱', '𝟧', '𝒲', '𝟱', '𝑯', '𝟧', '𝟱', '𝟧', '𝑯', '𝟱', '𝑯', '𝟱', '𝟱', '𝒲', '𝟱', '𝟱', '𝟱', '𝑯', '𝑯', '𝟱'],
        '6': ['𝟲', '𝟲', '➏', '𝟨', '𝕲', '𝟲', '𝟨', '𝒲', '𝟲', '𝑮', '𝟨', '𝟲', '𝟨', '𝑮', '𝟲', '𝑮', '𝟲', '𝟲', '𝒲', '𝟲', '𝟲', '𝟲', '𝑮', '𝑮', '𝟲'],
        '7': ['𝟳', '𝟳', '➐', '𝟩', '𝕷', '𝟳', '𝟩', '𝒲', '𝟳', '𝑳', '𝟩', '𝟳', '𝟩', '𝑳', '𝟳', '𝑳', '𝟳', '𝟳', '𝒲', '𝟳', '𝟳', '𝟳', '𝑳', '𝑳', '𝟳'],
        '8': ['𝟴', '𝟴', '➑', '𝟪', '𝕸', '𝟴', '𝟪', '𝒲', '𝟴', '𝑴', '𝟪', '𝟴', '𝟪', '𝑴', '𝟴', '𝑴', '𝟴', '𝟴', '𝒲', '𝟴', '𝟴', '𝟴', '𝑴', '𝑴', '𝟴'],
        '9': ['𝟵', '𝟵', '➒', '𝟫', '𝕽', '𝟵', '𝟫', '𝒲', '𝟵', '𝑹', '𝟫', '𝟵', '𝟫', '𝑹', '𝟵', '𝑹', '𝟵', '𝟵', '𝒲', '𝟵', '𝟵', '𝟵', '𝑹', '𝑹', '𝟵'],
        ' ': [' ']
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
