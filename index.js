function CountDistinctWords(inputText) {
    if (inputText) {
        // Split the input text into words
        const words = inputText.split(/\s+/);

        // Create a Set to store distinct words
        let distinctWordsSet = new Set(words);

        // Return the count of distinct words
        return distinctWordsSet.size;
    } else {
        return 0;
    }

}

function countWords() {
    let inputText = document.getElementById("inputField").value;
    inputText = inputText.trim();

    let WordsCount = 0;
    let CharCount = 0;

    for (let i = 0; i < inputText.length; i++) {
        let currentcCharacter = inputText[i];

        if (currentcCharacter === " ") { // for cnt words
            WordsCount += 1;
        }
        if (currentcCharacter !== " ") {// for cnt chars
            CharCount += 1;
        }
    }
    // Count the last word if the input is not empty
    if (inputText.length > 0) {
        WordsCount += 1;
    }
    // Display Words count
    document.getElementById("show")
        .innerHTML = WordsCount;

    // Display characters count
    document.getElementById("show1")
        .innerHTML = CharCount;

    // for Distinct word count
    let DistinctWordCount = CountDistinctWords(inputText);
    document.getElementById("show2")
        .innerHTML = DistinctWordCount; 

    // for maxfrequency Word count 
    const { maxWord, maxFrequency } = findMaxOccurringWord(inputText);
     // Count the last word if the input is not empty
    if (inputText.length > 0) {
        document.getElementById("show3")
        .innerHTML = `${maxWord} , ${maxFrequency}`; 
    }else{
        document.getElementById("show3")
        .innerHTML = "";
    }
    

} 

// for deleting all text from inputbox
function DeleteAllText() {
    let inputText = document.getElementById("inputField").value;
    inputText = "";
    document.getElementById("inputField").value = inputText;
    countWords(); // Recalculate counts after deleting text
} 
 
// for fnding maximum frequency bala word and it's frequency count
function findMaxOccurringWord(inputString) {
    // Split the input string into words
    const words = inputString.split(/\s+/);

    // Create an object to store word frequencies
    const wordFrequency = {};

    // Count the frequency of each word
    words.forEach(word => {
        const lowercaseWord = word.toLowerCase();
        wordFrequency[lowercaseWord] = (wordFrequency[lowercaseWord] || 0) + 1;
    });

    // Find the word with the maximum frequency
    let maxWord = '';
    let maxFrequency = 0;

    for (const word in wordFrequency) {
        if (wordFrequency[word] > maxFrequency) {
            maxWord = word;
            maxFrequency = wordFrequency[word];
        }
    }

    return { maxWord, maxFrequency };
}


