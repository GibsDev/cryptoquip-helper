console.log('Hello cryptoquip');

const letterInputContainer = document.getElementById('letterInputs');
const cryptoInput = document.getElementById('cryptoInput');
const output = document.getElementById('output');

cryptoInput.addEventListener('change', update);

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const letterInputs = {};

for (const letter of alphabet) {
    const upperCase = letter.toUpperCase();
    const wrapper = document.createElement('div');
    const label = document.createElement('p');
    label.innerHTML = upperCase;
    const input = document.createElement('input');
    input.type = 'text';
    letterInputs[upperCase] = input;
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    input.addEventListener('change', update);
    letterInputContainer.appendChild(wrapper);
}

function update () {
    let translated = '';
    for (const letter of cryptoInput.value) {
        const upperCase = letter.toUpperCase();
        if (letterInputs[upperCase] && letterInputs[upperCase].value.length > 0) {
            translated += letterInputs[upperCase].value.toUpperCase();
        } else if (alphabet.toLocaleUpperCase().includes(upperCase)) {
            translated += '-';
        } else {
            translated += letter;
        }
    }
    // Get the inputs from all the letters and create the output
    output.innerHTML = cryptoInput.value.toUpperCase() + '<br>' + translated;
}
