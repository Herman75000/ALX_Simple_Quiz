function checkAnswer() {
    const correctAnswer = "4";
    const userChoice = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (userChoice) {
        const userAnswer = userChoice.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
    }
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
