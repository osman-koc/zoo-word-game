var correctAnswer = '';
get_related_words();

window.answerWord.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        send_answer();
    }
});

function get_related_words() {
    window.answerWord.value = '';

    var response = dbWords[Math.floor(Math.random() * dbWords.length)];
    correctAnswer = response.name;
    window.wordLength.innerHTML = correctAnswer.length;

    var relatedWords = response.relations;
    var relatedWordsString = '';

    if (relatedWords.length == 0) {
        get_related_words();
    }

    var randCount = relatedWords.length > 2 ? 3 : relatedWords.length;
    var randomItems = getRandom(relatedWords, randCount);
    for (var i = 0; i < randomItems.length; i++) {
        relatedWordsString += '<span class="relWorkItem">' + randomItems[i] + '</span>';
    }

    document.getElementById('relatedwords').innerHTML = relatedWordsString;
}

function send_answer() {
    var answer = window.answerWord.value.turkishToUpper();
    if (answer === '' || answer === ' ') {
        alert('Bir kelime yazmalısınız!');
    } else if (correctAnswer === answer) {
        alert('Tebrikler! Doğru cevap!');
        get_related_words();
    } else {
        alert('Yanlış cevap!');
    }
}

window.answerWord = document.getElementById('answerWord');
window.wordLength = document.getElementById('wordLength');