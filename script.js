let lengthValue = document.getElementById("lengthValue");
let lengthSlider = document.getElementById("length");
let generateBtn = document.getElementById("generateBtn");
let passwordInput = document.getElementById("passwordInp");
let copyBtn = document.getElementById("copyBtn");

let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_=+[]{}|;:',.<>?/`~";

function generatePassword() {
    let charset = "";
    if (uppercase.checked) charset += upperChars;
    if (lowercase.checked) charset += lowerChars;
    if (numbers.checked) charset += numberChars;
    if (symbols.checked) charset += symbolChars;

    const length = parseInt(lengthSlider.value);
    let password = "";

    if (charset.length === 0) {
        passwordInput.value = "Select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * charset.length);
        password += charset[randIndex];
    }

    passwordInput.value = password;
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
    passwordInput.select();
    document.execCommand("copy");
});
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});
