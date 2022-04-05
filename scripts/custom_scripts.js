var correctAnswer = '';
getRelatedWords();

window.answerWord.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendAnswer();
    }
});

function getWord(){
    var response = dbWords[Math.floor(Math.random() * dbWords.length)];
    correctAnswer = response.name;
    window.firstLetter.innerHTML = correctAnswer.charAt(0);
    window.wordLength.innerHTML = correctAnswer.length;
    window.answerWord.maxLength = correctAnswer.length;
    return response;
}

function getRelatedWords() {
    window.answerWord.value = '';

    var response = getWord();
    var relatedWords = response.relations;
    var relatedWordsString = '';

    if (relatedWords.length == 0) {
        getRelatedWords();
    }

    var randCount = relatedWords.length > 4 ? 5 : relatedWords.length;
    var randomItems = getRandom(relatedWords, randCount);
    sortByLength(randomItems);
    for (var i = 0; i < randomItems.length; i++) {
        relatedWordsString += '<span class="relWorkItem">' + randomItems[i] + '</span>';
        if (i === parseInt(randomItems.length / 2) - 1) {
            relatedWordsString += '<br><br>';
        }
    }

    document.getElementById('relatedwords').innerHTML = relatedWordsString;
}

function sendAnswer() {
    var answer = window.answerWord.value.turkishToUpper();
    if (answer === '' || answer === ' ') {
        toastr.info('Bir kelime yazmalısınız!');
    } else if (correctAnswer === answer) {
        toastr.success('Tebrikler! Doğru cevap!');
        getRelatedWords();
    } else {
        toastr.error('Yanlış cevap!');
    }
}

window.answerWord = document.getElementById('answerWord');
window.wordLength = document.getElementById('wordLength');
window.firstLetter = document.getElementById('firstLetter');