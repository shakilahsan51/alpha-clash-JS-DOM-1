function play() {
    // console.log('play start now')
    // Hide the Home Screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');


    // Show the play ground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden')

    continueGame()
}





function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();



    // show alphabet to the screen

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set keyboard key color
    setBackgroundColorById(alphabet);
}





function getARandomAlphabet() {

    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');



    // get random index number between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}

// Keyboard//
// -------------------------------------------------------
// keyboard Color

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}


// Keyboard Press
// ----------------------------------------------------

function handleKeyboardKeyUpEvent(event) {

    const playerPressed = event.key;
    console.log(playerPressed);
}
// callback function
document.addEventListener('keyup', handleKeyboardKeyUpEvent)